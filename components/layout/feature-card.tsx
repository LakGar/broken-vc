import { cn } from "@/lib/utils";

type FeatureCardProps = {
  number?: string;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  number,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <article className={cn("lp-card flex flex-col p-7 md:p-8", className)}>
      {number && (
        <span className="font-display text-sm font-medium text-[var(--accent)]">
          {number}.
        </span>
      )}
      <h3 className="mt-3 font-display text-lg font-medium text-[var(--navy)]">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
