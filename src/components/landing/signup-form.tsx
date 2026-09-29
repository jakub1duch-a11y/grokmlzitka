"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORAGE_KEY = "mlzidla-poptavka";

export function SignupForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setError("Zadejte platný e-mail.");
      return;
    }
    setError(null);
    const payload = {
      email: trimmed,
      city: city.trim(),
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([payload, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    setDone(true);
    toast.success("Poptávka je u nás. Ozveme se do jednoho pracovního dne.");
  }

  if (done) {
    return (
      <div
        className={
          dark
            ? "flex items-start gap-3 rounded-xl bg-surface/10 px-5 py-4 text-hero-fg"
            : "flex items-start gap-3 rounded-xl bg-mist px-5 py-4 text-fg"
        }
        role="status"
      >
        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-fg">
          <Check className="size-4" />
        </span>
        <div>
          <p className="font-semibold">Děkujeme, {email}</p>
          <p className={dark ? "mt-1 text-sm text-hero-muted" : "mt-1 text-sm text-muted"}>
            Pošleme vám briefing k ochlazení {city.trim() || "vašeho města"} a termín krátkého dema.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row sm:items-start">
      <div className="min-w-0 flex-1">
        <label htmlFor="signup-email" className="sr-only">
          E-mail
        </label>
        <Input
          id="signup-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="váš@město.cz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(error)}
          required
        />
        {error ? (
          <p className="mt-2 px-2 text-sm text-danger" role="alert">
            {error}
          </p>
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <label htmlFor="signup-city" className="sr-only">
          Město
        </label>
        <Input
          id="signup-city"
          type="text"
          name="city"
          autoComplete="address-level2"
          placeholder="Město nebo obec"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <Button type="submit" size="lg" className="sm:mt-0">
        Chci briefing
        <ArrowRight />
      </Button>
    </form>
  );
}
