import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionIntro } from "@/components/launchpoint/section-intro";
import { SponsorTierCard } from "@/components/sponsor-tier-card";
import { PageHero } from "@/components/page-hero";
import { STOCK_IMAGES } from "@/lib/constants";
import { sponsorshipExtras, sponsorshipTiers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sponsor",
};

export default function SponsorPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <PageHero
        title="Sponsorship levels"
        description="Promote your brand, meet new clients, and demonstrate thought leadership to a curated audience of allocators and operators."
        image={STOCK_IMAGES.transparentAccountability}
        imageAlt="Executive conference room for sponsor presentations"
      />

      <section
        className="py-5
      "
      >
        <SectionIntro title="Sponsorship tiers" align="center" />
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {sponsorshipTiers.map((tier) => (
              <SponsorTierCard key={tier.title} {...tier} />
            ))}
          </div>

          <h2 className="lp-heading-section mt-20 text-center">
            Additional options
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {sponsorshipExtras.map((extra) => (
              <article key={extra.title} className="lp-card p-6 md:p-7">
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  {extra.price}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium">
                  {extra.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {extra.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
