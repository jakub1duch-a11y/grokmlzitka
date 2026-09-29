"use client";

import { useState } from "react";
import { Droplets, Menu, Power } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhoneMock({ className }: { className?: string }) {
  const [on, setOn] = useState(true);

  return (
    <div className={cn("relative mx-auto w-64 select-none", className)}>
      <div className="rounded-phone bg-fg p-2 shadow-soft">
        <div className="relative overflow-hidden rounded-xl bg-hero text-hero-fg">
          <div className="flex items-center justify-between px-5 pt-4 text-xs text-hero-muted">
            <span className="tabular-nums">20:16</span>
            <span className="flex gap-1">
              <span className="block h-2 w-4 rounded-sm bg-hero-muted/70" />
              <span className="block size-2 rounded-full bg-hero-muted/70" />
            </span>
          </div>

          <div className="flex items-center justify-between px-5 pt-5">
            <div className="flex items-center gap-1.5 text-sm font-medium">
              <span className="grid size-5 place-items-center rounded-full bg-accent text-fg">
                <Droplets className="size-3" />
              </span>
              mlzidla
            </div>
            <Menu className="size-4 text-hero-muted" />
          </div>

          <p className="px-5 pt-6 text-center text-sm text-hero-muted">Mlžítko Nábřeží</p>

          <div className="flex flex-col items-center px-5 pt-4 pb-2">
            <button
              type="button"
              onClick={() => setOn((v) => !v)}
              aria-pressed={on}
              aria-label={on ? "Vypnout mlžení" : "Zapnout mlžení"}
              className={cn(
                "grid size-28 place-items-center rounded-full border-4 transition-[border-color,box-shadow,color,transform] duration-200 ease-[var(--ease-out)]",
                on ? "border-accent text-accent shadow-soft" : "border-hero-muted/40 text-hero-muted",
              )}
            >
              <Power className="size-10" strokeWidth={1.75} />
            </button>
            <p className="mt-3 text-sm font-medium text-accent">{on ? "Aktivní" : "Vypnuto"}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 px-4 pb-2 text-xs">
            <div className="rounded-md bg-hero-fg/10 px-3 py-2">
              <p className="text-hero-muted">Režim</p>
              <p className="mt-0.5 font-medium">{on ? "Automatický" : "Ruční"}</p>
            </div>
            <div className="rounded-md bg-hero-fg/10 px-3 py-2">
              <p className="text-hero-muted">Teplota</p>
              <p className="mt-0.5 font-medium tabular-nums">28,4 °C</p>
            </div>
            <div className="rounded-md bg-hero-fg/10 px-3 py-2">
              <p className="text-hero-muted">Vlhkost</p>
              <p className="mt-0.5 font-medium tabular-nums">46 %</p>
            </div>
            <div className="rounded-md bg-hero-fg/10 px-3 py-2">
              <p className="text-hero-muted">Voda dnes</p>
              <p className="mt-0.5 font-medium tabular-nums">18 l</p>
            </div>
          </div>

          <div className="px-4 pt-1 pb-6">
            <div className="flex h-10 items-end gap-0.5">
              {(on
                ? [28, 36, 32, 48, 40, 62, 54, 70, 58, 76, 64, 80]
                : [18, 16, 20, 14, 18, 12, 16, 14, 18, 10, 14, 12]
              ).map((h, i) => (
                <span
                  key={i}
                  className={cn(
                    "flex-1 rounded-t-sm transition-[height,background-color] duration-200",
                    on ? "bg-accent/80" : "bg-hero-muted/35",
                  )}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
