"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type SponsorTierCardProps = {
  badge: string;
  price: string;
  title: string;
  subtitle?: string;
  benefits: string[];
  note?: string;
  highlight?: boolean;
};

export function SponsorTierCard({
  price,
  title,
  subtitle,
  benefits,
  note,
  highlight,
}: SponsorTierCardProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleBenefits = showAll ? benefits : benefits.slice(0, 8);
  const hasMoreBenefits = benefits.length > 8;

  return (
    <article
      className={cn(
        "lp-card flex h-full flex-col p-4 md:p-6",
        highlight && "ring-2 ring-[var(--accent)]/25",
      )}
    >
      <div className="flex items-end">
        <span className="font-display text-4xl font-medium text-[var(--navy)]">
          {price}
        </span>
      </div>

      <h3 className="font-display text-xl font-medium text-[var(--navy)]">
        {title}
      </h3>

      {subtitle && (
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      )}

      <ul className="mt-2 flex-1 space-y-2.5 border-t border-border pt-6 text-sm text-[var(--navy)]/80">
        {visibleBenefits.map((b, index) => (
          <li
            key={`${b}-${index}`}
            className={cn("flex gap-2 leading-relaxed", index === 0 && "mt-0")}
          >
            <span className="text-[var(--accent)]">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {hasMoreBenefits && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-4 text-left text-sm font-medium text-[var(--accent)] transition hover:opacity-70"
        >
          {showAll ? "Show less" : `Show more ${benefits.length - 8}`}
        </button>
      )}

      {note && (
        <p className="mt-4 text-sm font-medium text-muted-foreground">{note}</p>
      )}
    </article>
  );
}
