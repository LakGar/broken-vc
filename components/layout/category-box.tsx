"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type CategoryBoxProps = {
  title: string;
  subtitle?: string;
  items: string[];
  accent?: "free" | "paid" | "vendor";
  initialVisibleItems?: number;
};

const accentBorder = {
  free: "border-t-[var(--navy)]",
  paid: "border-t-[var(--accent)]",
  vendor: "border-t-amber-500",
};

export function CategoryBox({
  title,
  subtitle,
  items,
  accent = "free",
  initialVisibleItems,
}: CategoryBoxProps) {
  const [expanded, setExpanded] = useState(false);
  const canCollapse =
    initialVisibleItems !== undefined && items.length > initialVisibleItems;
  const visibleItems =
    canCollapse && !expanded ? items.slice(0, initialVisibleItems) : items;

  return (
    <article
      className={cn(
        "lp-card flex h-full flex-col border-t-4 p-8 md:p-9",
        accentBorder[accent],
      )}
    >
      <h3 className="font-display text-lg font-medium leading-snug text-[var(--navy)]">
        {title}
      </h3>
      {subtitle ? (
        <p className="mt-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {subtitle}
        </p>
      ) : null}
      <ul
        className={cn(
          "flex-1 space-y-2.5 border-t border-border pt-6",
          subtitle ? "mt-6" : "mt-5",
        )}
      >
        {visibleItems.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
            <span className="text-[var(--navy)]">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {canCollapse ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-5 self-start text-sm font-semibold text-[var(--navy)] underline underline-offset-4 hover:text-[var(--accent)]"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : `Show more (${items.length - visibleItems.length})`}
        </button>
      ) : null}
    </article>
  );
}
