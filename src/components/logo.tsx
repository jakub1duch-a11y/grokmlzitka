import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <a
      href="#top"
      className={cn(
        "inline-flex items-center gap-2 font-semibold tracking-tight",
        inverted ? "text-hero-fg" : "text-fg",
        className,
      )}
      aria-label="mlzidla.cz — úvod"
    >
      <span
        className={cn(
          "grid size-8 place-items-center rounded-full",
          inverted ? "bg-accent text-fg" : "bg-primary text-primary-fg",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
          <path d="M12 2.4C12 2.4 5.2 11.1 5.2 16.05a6.8 6.8 0 1 0 13.6 0C18.8 11.1 12 2.4 12 2.4Z" />
        </svg>
      </span>
      <span className="text-lg">mlzidla.cz</span>
    </a>
  );
}
