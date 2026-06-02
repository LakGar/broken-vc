import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type NumberedCardProps = {
  number: string;
  title: string;
  description: string;
  href?: string;
  className?: string;
};

export function NumberedCard({
  number,
  title,
  description,
  href,
  className,
}: NumberedCardProps) {
  return (
    <article className={cn("lp-card group flex flex-col p-8 md:p-9", className)}>
      <span className="font-display text-sm font-medium text-[var(--accent)]">
        {number}.
      </span>
      <h3 className="mt-4 font-display text-xl font-medium text-[var(--navy)] sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
      {href && (
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--navy)] transition-colors group-hover:text-[var(--accent)]"
        >
          Read more
          <ArrowUpRight className="size-4" />
        </Link>
      )}
    </article>
  );
}
