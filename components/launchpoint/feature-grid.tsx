import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
};

type FeatureGridProps = {
  features: Feature[];
  className?: string;
};

export function FeatureGrid({ features, className }: FeatureGridProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {features.map((f) => (
        <article
          key={f.title}
          className="lp-card rounded-2xl border border-border/80 bg-white p-6 md:p-7"
        >
          <h3 className="font-display text-lg font-medium text-[var(--navy)]">
            {f.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {f.description}
          </p>
        </article>
      ))}
    </div>
  );
}
