import Link from "next/link";
import { LUMA_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type TicketCardProps = {
  badge: string;
  label: string;
  price: string;
  title: string;
  subtitle?: string;
  description: string;
  audience: string;
  benefits: string[];
  cta: string;
  ctaHref?: string;
  variant: "navy" | "white";
  featured?: boolean;
};

export function TicketCard({
  badge,
  price,
  title,
  subtitle,
  description,
  audience,
  benefits,
  cta,
  ctaHref,
  variant,
  featured,
}: TicketCardProps) {
  const isNavy = variant === "navy";
  const href = ctaHref ?? LUMA_URL;

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 md:p-9",
        isNavy
          ? "border-[var(--navy)] bg-[var(--navy)] text-white shadow-[var(--shadow-card)]"
          : "border-border/80 bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
        featured && !isNavy && "ring-2 ring-[var(--accent)]/30",
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold tracking-wide uppercase",
          isNavy ? "text-white/70" : "text-[var(--accent)]",
        )}
      >
        {badge}
      </p>

      <div className="mt-6 flex items-end gap-1">
        <span
          className={cn(
            "font-display text-5xl font-medium tracking-tight",
            isNavy ? "text-white" : "text-[var(--navy)]",
          )}
        >
          {price}
        </span>
        {price !== "Free" && price !== "Complimentary" && (
          <span
            className={cn(
              "mb-2 text-sm",
              isNavy ? "text-white/60" : "text-muted-foreground",
            )}
          >
            / ticket
          </span>
        )}
      </div>

      <h3
        className={cn(
          "mt-4 font-display text-xl font-medium",
          isNavy ? "text-white" : "",
        )}
      >
        {title}
      </h3>
      {subtitle && (
        <p
          className={cn(
            "mt-1 text-sm",
            isNavy ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
      <p
        className={cn(
          "mt-3 text-sm font-semibold leading-snug",
          isNavy ? "text-amber-200" : "text-[var(--accent-orange)]",
        )}
      >
        {description}
      </p>
      <p
        className={cn(
          "mt-4 text-sm",
          isNavy ? "text-amber-200" : "text-muted-foreground",
        )}
      >
        {audience}
      </p>

      <ul
        className={cn(
          "mt-6 flex-1 space-y-2.5 border-t pt-6 text-sm",
          isNavy ? "border-white/15" : "border-border",
        )}
      >
        {benefits.map((b) => (
          <li key={b} className="flex gap-2 leading-relaxed">
            <span
              className={isNavy ? "text-[var(--accent)]" : "text-[var(--navy)]"}
            >
              ✓
            </span>
            <span
              className={isNavy ? "text-white/90" : "text-[var(--navy)]/80"}
            >
              {b}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(
          "mt-8 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition-all",
          isNavy
            ? "bg-white text-[var(--navy)] hover:bg-white/95"
            : "bg-[var(--navy)] text-white hover:bg-[var(--navy-muted)]",
        )}
      >
        {cta}
      </Link>
    </article>
  );
}
