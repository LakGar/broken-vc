import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SponsorTierCard } from "@/components/sponsor-tier-card";
import { sponsorshipExtras, sponsorshipTiers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sponsor",
};

const capitalPlatforms = [
  "Venture capital firms raising funds",
  "Emerging managers",
  "Private equity firms",
  "Private credit funds",
  "Real estate investment platforms",
  "Secondary market platforms",
  "Co-investment platforms",
  "VC management software",
  "LP reporting platforms",
  "Fund administrators",
  "SPV and syndicate platform",
];

const serviceProviders = [
  "Accountants and auditors",
  "Angel or investor syndicates",
  "Banks and lenders",
  "Executive recruiters",
  "Financial management firms",
  "Fund managers",
  "Geographic regions seeking to attract investors such as cities or incubators",
  "Law firms",
  "Startup incubator hubs seeking investments",
  "Trust advisory services",
  "Wealth management services",
];

const sponsorBenefits = [
  "Give remarks to the audience",
  "Get promoted in advance marketing and on the website",
  "Moderate a session",
  "Receive the opt-in attendee list",
  "Receive curated in-person introductions for your team based on the advance attendee list",
  "Signage and banner placement at the event",
  "Demo table showcase",
  "Facilitate small group sroundtable session",
  "Complimentary tickets for staff or clients",
  "Premium logo placement — website, emails, all materials",
];

export default function SponsorPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <section className="bg-white py-10 md:py-12">
        <Container>
          <h1 className="font-display text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            Sponsor
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Sponsors get visibility before and during the event, access to
            curated introductions, and a stronger way to meet the right investor
            audience in person.
          </p>
          <div className="mt-5 text-sm">
            <p className="font-semibold text-[var(--navy)]">
              Contact us for sponsorship packages:
            </p>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
              <p>
                <strong className="text-[var(--navy)]">Angel Launch:</strong>{" "}
                Zahava Stroud ·{" "}
                <a
                  href="mailto:zahava@angellaunch.com?subject=Broken%20VC%20Summit%20Sponsorship"
                  className="font-medium text-[var(--accent)] underline underline-offset-4 hover:text-[var(--navy)]"
                >
                  zahava@angellaunch.com
                </a>{" "}
                ·{" "}
                <a
                  href="tel:3106216850"
                  className="font-medium text-[var(--navy)] hover:underline"
                >
                  310 621 6850
                </a>
              </p>
              <p>
                <strong className="text-[var(--navy)]">Expert Dojo:</strong>{" "}
                Brian Mac Mahon ·{" "}
                <a
                  href="mailto:brian@expertdojo.com?subject=Broken%20VC%20Summit%20Sponsorship"
                  className="font-medium text-[var(--accent)] underline underline-offset-4 hover:text-[var(--navy)]"
                >
                  brian@expertdojo.com
                </a>{" "}
                ·{" "}
                <a
                  href="tel:3107459580"
                  className="font-medium text-[var(--navy)] hover:underline"
                >
                  310 745 9580
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/70 bg-white py-8 md:py-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-lg bg-[var(--navy)] p-6 text-white md:p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]"></p>
              <h2 className="mt-2 font-display text-2xl font-medium text-white">
                Who Should Sponsor
              </h2>
              <div className="mt-5 grid gap-6 border-t border-white/15 pt-5 md:grid-cols-2">
                {[
                  {
                    title: "Capital and Investment Platforms",
                    items: capitalPlatforms,
                  },
                  {
                    title: "Service Providers and Vendors",
                    items: serviceProviders,
                  },
                ].map((group) => (
                  <article key={group.title}>
                    <h3 className="font-display text-lg font-medium leading-snug text-white">
                      {group.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-white/75"
                        >
                          <span className="text-[var(--accent)]">•</span>
                          <span className="text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border/80 bg-white p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                Sponsor Benefits
              </p>
              <h2 className="mt-2 font-display text-2xl font-medium text-[var(--navy)]">
                Sponsor Benefits
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                As a sponsor, your team gets visibility, audience access, and
                curated in-person introductions at the event.
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                {sponsorBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-2 text-sm leading-relaxed text-[var(--navy)]/80"
                  >
                    <span className="text-[var(--accent)]">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-8 md:py-12">
        <Container>
          <h2 className="font-display text-3xl font-semibold text-[var(--navy)] md:text-4xl">
            Sponsorship tiers
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {sponsorshipTiers.map((tier) => (
              <SponsorTierCard key={tier.title} {...tier} />
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl font-semibold text-[var(--navy)] md:text-4xl">
            Additional options
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
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
