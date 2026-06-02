import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type Stat = { value: string; label: string };

type StatsBandProps = {
  title?: string;
  stats: Stat[];
};

function StatItem({
  stat,
  className,
}: {
  stat: Stat;
  className?: string;
}) {
  const isWordValue = Number.isNaN(Number.parseFloat(stat.value));

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-6 py-8 text-center sm:px-8 sm:py-10",
        className,
      )}
    >
      <p
        className={cn(
          "font-display font-semibold leading-none tracking-tight text-white",
          isWordValue
            ? "text-3xl sm:text-4xl lg:text-[2.5rem]"
            : "text-5xl sm:text-6xl lg:text-7xl",
        )}
      >
        {stat.value}
      </p>
      <p className="mt-4 max-w-[12rem] text-xs font-medium leading-snug tracking-[0.12em] text-white/70 uppercase sm:text-sm">
        {stat.label}
      </p>
    </div>
  );
}

export function StatsBand({ title, stats }: StatsBandProps) {
  return (
    <section className="w-full max-w-full overflow-x-hidden bg-white py-16 md:py-24">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[var(--navy)] shadow-[var(--shadow-soft)] sm:rounded-3xl">
          {title && (
            <div className="border-b border-white/10 px-6 py-10 text-center sm:px-10 sm:py-12">
              <h2 className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
                {title}
              </h2>
            </div>
          )}

          <div className="grid sm:grid-cols-3">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                stat={stat}
                className={cn(
                  index > 0 && "border-t border-white/10 sm:border-t-0",
                  index > 0 && "sm:border-l sm:border-white/10",
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
