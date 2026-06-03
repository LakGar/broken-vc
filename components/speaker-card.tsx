import Image from "next/image";
import type { Speaker } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type SpeakerCardProps = {
  speaker: Speaker;
};

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  const isTba = !speaker.confirmed;
  const detailLine = speaker.company
    ? `${speaker.title} · ${speaker.company}`
    : speaker.title;

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-lg border border-border/80 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]",
        isTba && "border-dashed",
      )}
    >
      <div className="relative aspect-[4/5] bg-[var(--navy)]">
        <Image
          src={speaker.image}
          alt={isTba ? "Speaker to be announced" : speaker.name}
          fill
          className={cn(
            "object-cover transition-transform duration-300 group-hover:scale-[1.04]",
            isTba && "opacity-35 grayscale",
          )}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 180px"
        />
      </div>
      <div className="p-3">
        <h3 className="font-display text-sm font-semibold leading-tight text-[var(--navy)]">
          {speaker.name}
        </h3>
        <p className="mt-1 truncate text-xs leading-snug text-muted-foreground">
          {detailLine}
        </p>
      </div>
    </article>
  );
}
