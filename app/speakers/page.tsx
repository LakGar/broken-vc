import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionIntro } from "@/components/launchpoint/section-intro";
import { SpeakerCard } from "@/components/speaker-card";
import { PageHero } from "@/components/page-hero";
import { STOCK_IMAGES } from "@/lib/constants";
import { confirmedSpeakers, type Speaker } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Speakers",
};

const placeholderSpeakers: Speaker[] = Array.from({ length: 20 }, () => ({
  name: "Speaker TBA",
  title: "To be announced",
  company: "",
  image: STOCK_IMAGES.speakerPlaceholder,
  confirmed: false,
}));

export default function SpeakersPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <PageHero
        title="Featured speakers"
        description="Industry leaders reshaping venture with real results and bold conviction. Additional speakers announced as the program is finalized."
        image={STOCK_IMAGES.zombieCapital}
        imageAlt="Summit speakers in a collaborative meeting"
      />
      <section className="page-section">
        <SectionIntro
          align="center"
          title="Confirmed & upcoming voices"
        />
        <Container>
          <div className="grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {[...confirmedSpeakers, ...placeholderSpeakers].map((speaker, i) => (
              <SpeakerCard key={`${speaker.name}-${i}`} speaker={speaker} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
