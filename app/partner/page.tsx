import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/page-hero";
import { STOCK_IMAGES } from "@/lib/constants";
import { partnerBenefits, partnerRequests } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Partner",
};

export default function PartnerPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <PageHero
        title="Media & nonprofit partnerships"
        description="Free supporting partner program for meetups, media, and trade organizations — exhibitor table, comp ticket, member discounts, and co-marketing."
        image={STOCK_IMAGES.networking}
        imageAlt="Partners networking at a venture capital event"
        footer={
          <p className="text-sm font-medium">
            <a
              href="mailto:info@angellaunch.com"
              className="text-[var(--accent)] underline"
            >
              info@angellaunch.com
            </a>
            {" · "}310 621 6850
          </p>
        }
      />
      <section className="page-section">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="lp-card p-8 md:p-10">
              <h2 className="lp-heading-section text-2xl">
                Nonprofit and media benefits
              </h2>
              <p className="lp-body mt-5">
                Become a free supporting partner — exhibitor table, comp ticket,
                member discounts, website listing, and logo on signage. Package
                value: $1,495.
              </p>
              <p className="mt-6 text-sm font-medium">
                <a href="mailto:info@angellaunch.com" className="text-[var(--accent)] underline">
                  info@angellaunch.com
                </a>
                {" · "}310 621 6850
              </p>
            </article>

            <article className="lp-card p-8 md:p-10">
              <h2 className="font-display text-xl font-medium">Your benefits</h2>
              <ul className="mt-6 space-y-3">
                {partnerBenefits.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-[var(--accent)]">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="lp-card mt-6 border-[var(--navy)]/15 p-8 md:mt-8 md:p-10">
            <h2 className="font-display text-xl font-medium text-[var(--navy)]">
              Promotional support we request
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {partnerRequests.map((r) => (
                <li key={r} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-[var(--navy)]">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </article>
        </Container>
      </section>
    </div>
  );
}
