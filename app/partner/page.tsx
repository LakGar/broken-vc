import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { partnerBenefits, partnerRequests } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Partner",
};

export default function PartnerPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <section className="border-b border-border/70 bg-white py-10 md:py-12">
        <Container>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-display text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
                Nonprofit, community and media partnerships
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Free supporting partner program for meetups, media, and trade
                organizations.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Become a free supporting partner — exhibitor table, comp ticket,
                member discounts, website listing, and logo on signage. Package
                value: $1,495.
              </p>
            </div>
          </div>
          <div className="mt-5 text-sm">
            <p className="font-semibold text-[var(--navy)]">
              Contact us for media and nonprofit partnerships:
            </p>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
              <p>
                <strong className="text-[var(--navy)]">Angel Launch:</strong>{" "}
                Zahava Stroud ·{" "}
                <a
                  href="mailto:zahava@angellaunch.com?subject=Broken%20VC%20Summit%20Media%20Partnership"
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
                  href="mailto:brian@expertdojo.com?subject=Broken%20VC%20Summit%20Media%20Partnership"
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

      <section className="bg-white py-8 md:py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-border/80 p-6 md:p-8">
              <h2 className="font-display text-xl font-medium">
                Your benefits
              </h2>
              <ul className="mt-6 space-y-3">
                {partnerBenefits.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-[var(--accent)]">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-border/80 p-6 md:p-8">
              <h2 className="font-display text-xl font-medium text-[var(--navy)]">
                Promotional support we request
              </h2>
              <ul className="mt-6 space-y-3">
                {partnerRequests.map((r) => (
                  <li
                    key={r}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-[var(--navy)]">✓</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
}
