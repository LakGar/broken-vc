import Image from "next/image";
import Link from "next/link";
import type { Speaker } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type SpeakerCardProps = {
  speaker: Speaker;
};

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  const isTba = !speaker.confirmed;

  return (
    <article
      className={cn(
        "lp-card w-full max-w-[200px] overflow-hidden p-0",
        isTba && "border-dashed opacity-70",
      )}
    >
      <div className="relative aspect-[4/5] bg-white">
        <Image
          src={speaker.image}
          alt={isTba ? "Speaker TBA" : speaker.name}
          fill
          className={cn("object-cover", isTba && "opacity-30 grayscale")}
          sizes="200px"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display text-sm font-medium text-[var(--navy)]">{speaker.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{speaker.title}</p>
        {speaker.company && (
          <p className="text-[11px] text-muted-foreground/80">@ {speaker.company}</p>
        )}
        {speaker.linkedin && speaker.confirmed ? (
          <Link
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[11px] font-semibold text-[var(--accent)] hover:underline"
          >
            LinkedIn →
          </Link>
        ) : (
          <span className="mt-3 inline-block text-[10px] text-muted-foreground">Coming soon</span>
        )}
      </div>
    </article>
  );
}
