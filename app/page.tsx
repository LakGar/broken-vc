import { HomeHero } from "@/components/home-hero";
import { Container } from "@/components/layout/container";
import { NumberedCard } from "@/components/launchpoint/numbered-card";
import { SectionIntro } from "@/components/launchpoint/section-intro";
import { SplitSection } from "@/components/launchpoint/split-section";
import { CrisisSection } from "@/components/crisis-section";
import { LUMA_URL, STOCK_IMAGES } from "@/lib/constants";
import { frameworkPillars } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <HomeHero />

      <SplitSection
        title="Let allocators connect with real outcomes"
        description="We combine first-principles keynotes, closed-door design labs, and allocator roundtables so serious capital can reshape venture economics — without pitch decks, fluff, or misaligned incentives."
        image={STOCK_IMAGES.roundtable}
        imageAlt="Allocator roundtable"
        primaryCta={{ label: "Register here", href: LUMA_URL }}
        secondaryCta={{ label: "Discover agenda", href: "/agenda" }}
      >
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {frameworkPillars.slice(0, 2).map((p) => (
            <div
              key={p.number}
              className="rounded-xl border border-border/80 bg-white p-5"
            >
              <p className="text-sm font-medium text-[var(--accent)]">
                {p.number}.
              </p>
              <h3 className="mt-2 font-display font-medium text-[var(--navy)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </SplitSection>

      <CrisisSection />

      <section className="page-section">
        <SectionIntro
          title="This is the Era of AI Driven Returns"
          description="Every principle connects back to aligned capital, disciplined operators, and measurable outcomes."
          align="center"
        />
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {frameworkPillars.map((pillar) => (
              <NumberedCard
                key={pillar.number}
                number={pillar.number}
                title={pillar.title}
                description={pillar.description}
                href="/attend"
              />
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}
