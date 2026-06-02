import { agendaItems } from "@/lib/site-data";

export function AgendaTimeline() {
  return (
    <div className="space-y-0">
      {agendaItems.map((item) => (
        <article
          key={`${item.time}-${item.title}`}
          className="grid gap-4 border-b border-border/80 py-8 last:border-0 sm:grid-cols-[10rem_1fr] sm:gap-10 md:py-10"
        >
          <time className="font-mono text-sm font-medium tabular-nums text-[var(--accent)]">
            {item.time}
          </time>
          <h3 className="font-display text-lg font-medium leading-snug text-[var(--navy)] sm:text-xl">
            {item.title}
          </h3>
        </article>
      ))}
    </div>
  );
}
