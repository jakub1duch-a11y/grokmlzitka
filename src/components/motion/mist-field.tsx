import { cn } from "@/lib/utils";

const ORBS = [
  { left: "6%", size: "7rem", delay: "0s", duration: "9s" },
  { left: "22%", size: "5rem", delay: "1.4s", duration: "11s" },
  { left: "38%", size: "9rem", delay: "0.6s", duration: "10s" },
  { left: "54%", size: "6rem", delay: "2.1s", duration: "8s" },
  { left: "70%", size: "8rem", delay: "0.9s", duration: "12s" },
  { left: "84%", size: "5.5rem", delay: "1.8s", duration: "9.5s" },
];

export function MistField({ className, tone = "accent" }: { className?: string; tone?: "accent" | "light" }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {ORBS.map((orb) => (
        <span
          key={orb.left}
          className={cn("mist-orb", tone === "light" ? "mist-orb-light" : "mist-orb-accent")}
          style={{
            left: orb.left,
            width: orb.size,
            height: orb.size,
            animationDelay: orb.delay,
            animationDuration: orb.duration,
          }}
        />
      ))}
    </div>
  );
}
