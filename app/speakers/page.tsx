import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SpeakerCard } from "@/components/speaker-card";
import { STOCK_IMAGES } from "@/lib/constants";
import { confirmedSpeakers, type Speaker } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Speakers",
};

const placeholderSpeakers: Speaker[] = Array.from({ length: 6 }, () => ({
  name: "Speaker TBA",
  title: "To be announced",
  company: "",
  image: STOCK_IMAGES.speakerPlaceholder,
  confirmed: false,
}));

export default function SpeakersPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <section className="border-b border-border/70 bg-white py-10 md:py-12">
        <Container>
          <h1 className="font-display text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            Speakers
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Featured voices shaping the future of venture capital and allocator
            strategy. More speakers will be announced as the program is
            finalized.
          </p>
        </Container>
      </section>

      <section className="bg-white py-8 md:py-12">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {[...confirmedSpeakers, ...placeholderSpeakers].map(
              (speaker, i) => (
                <SpeakerCard key={`${speaker.name}-${i}`} speaker={speaker} />
              ),
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
