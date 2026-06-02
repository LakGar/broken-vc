import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { Container } from "@/components/layout/container";
import { FeatureGrid } from "@/components/launchpoint/feature-grid";
import { LogoMarquee } from "@/components/launchpoint/logo-marquee";
import { NumberedCard } from "@/components/launchpoint/numbered-card";
import { SectionIntro } from "@/components/launchpoint/section-intro";
import { SplitSection } from "@/components/launchpoint/split-section";
import { StatsBand } from "@/components/launchpoint/stats-band";
import { StepsRow } from "@/components/launchpoint/steps-row";
import { CrisisSection } from "@/components/crisis-section";
import { STOCK_IMAGES } from "@/lib/constants";
import {
  credibilityStats,
  formatSessions,
  frameworkPillars,
} from "@/lib/site-data";

const attendSteps = [
  {
    number: "01",
    title: "Apply for Invitation",
    image: STOCK_IMAGES.networking,
  },
  {
    number: "02",
    title: "Receive Written Approval",
    image: STOCK_IMAGES.writtenApproval,
  },
  {
    number: "03",
    title: "Join Full-Day Sessions",
    image: STOCK_IMAGES.roundtable,
  },
  { number: "04", title: "Network & Deal Room", image: STOCK_IMAGES.hero },
];

export default function HomePage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <HomeHero />
      <LogoMarquee />

      <SplitSection
        title="Let allocators connect with real outcomes"
        description="We combine first-principles keynotes, closed-door design labs, and allocator roundtables so serious capital can reshape venture economics — without pitch decks, fluff, or misaligned incentives."
        image={STOCK_IMAGES.roundtable}
        imageAlt="Allocator roundtable"
        primaryCta={{ label: "Register here", href: "/register#tickets" }}
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
          title="This is the AI Era of Capital"
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

      <section className="page-section py-12 md:py-16">
        <Container>
          <div className="lp-image-frame relative aspect-[21/9]">
            <Image
              src={STOCK_IMAGES.transparentAccountability}
              alt="Executive roundtable in a modern conference room"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center font-display text-xl font-medium text-[var(--navy)] md:text-2xl">
            Transparent accountability and ownership-centric design simplify how
            allocators evaluate venture — no hidden fees, no zombie capital.
          </p>
        </Container>
      </section>

      <section className="page-section">
        <SectionIntro
          title="Make your summit experience count"
          description="Every element is designed for high-signal conversations between serious allocators."
          align="center"
        />
        <Container>
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <Link href="/register#tickets" className="lp-btn-primary">
              View tickets
            </Link>
            <Link href="/agenda" className="lp-btn-outline">
              See agenda
            </Link>
          </div>
          <FeatureGrid
            features={formatSessions.map((s) => ({
              title: s.title,
              description: s.description,
            }))}
          />
        </Container>
      </section>

      <StepsRow
        title="From application to an epic event day"
        steps={attendSteps}
        cta={{
          primary: "Register here",
          secondary: "See packages",
          primaryHref: "/register#tickets",
          secondaryHref: "/register",
        }}
      />

      <StatsBand
        title="Growth we've achieved serving allocators"
        stats={credibilityStats.map((s) => ({
          value: s.value,
          label: s.label,
        }))}
      />
    </div>
  );
}
