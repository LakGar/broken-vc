import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { STOCK_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Event Producers",
};

const ANGEL_LAUNCH_EVENTS_URL = "https://www.angellaunch.com";

type Producer = {
  org: string;
  website: string;
  logo: string;
  logoAlt: string;
  logoDark?: boolean;
  heading: string;
  paragraphs: string[];
  leader: string;
  name: string;
  phone: string;
  email: string;
  image: string;
  eventsLink?: string;
};

const producers: Producer[] = [
  {
    org: "Expert Dojo",
    website: "https://expertdojo.com",
    logo: STOCK_IMAGES.expertDojoLogo,
    logoAlt: "Expert Dojo logo",
    logoDark: true,
    heading: "About Expert Dojo",
    paragraphs: [
      "Expert DOJO is a Santa Monica-based investment firm backing early-stage startups. We combine capital with hands-on support to help founders gain traction and scale faster than they could alone. Since 2019, we have invested in 266 startups, deployed $27 million of proprietary capital from our single family office, grown approximately 38% annually, and built the portfolio to $100 million in assets under management. We also manage the Nathan family office fund.",
      "We are not a venture capital firm, nor are we trying to be one. We have built a different kind of investment model, one designed to serve allocators better and to replace the outdated incentives and structure of traditional VC.",
      "Since 2019, we have invested in 266 startups, deployed $27 million of proprietary capital from a single-family office, grown approximately 38% annually, and built the portfolio to $100 million in assets under management. Their focus is on building a more aligned and effective model for allocators than traditional venture capital has historically offered.",
    ],
    leader: "Brian Mac Mahon is the CEO and Founder of Expert Dojo and event co-chair.",
    name: "Brian Mac Mahon",
    phone: "310 745 9580",
    email: "brian@expertdojo.com",
    image: STOCK_IMAGES.organizerBrian,
  },
  {
    org: "Angel Launch",
    website: "https://www.angellaunch.com",
    logo: STOCK_IMAGES.angelLaunchLogo,
    logoAlt: "Angel Launch logo",
    heading: "About Angel Launch",
    paragraphs: [
      "Angel Launch, based in Silicon Valley, is a leading producer of tech venture forums connecting thousands of global startups to hundreds of accredited investors in live networking events held in the SF Bay area. Since Covid we have produced over 100 summits, mixers and conferences relating to startups, investors and AI, many in Palo Alto. We have produced the Silicon Valley Investing Summit almost every month for the past four years in Palo Alto or San Francisco, with thousands of investors and global startups in attendance.",
      "Our events bring together investors (VCs, angels, institutional, family offices and corporate) from Silicon Valley and the east coast to meet promising innovative global startups. We connect investors seeking opportunities to exceptional high growth startups, pre-IPO, and public companies.",
    ],
    leader: "Zahava Stroud is the founder and CEO of Angel Launch and event co-chair.",
    name: "Zahava Stroud",
    phone: "310 621 6850",
    email: "zahava@angellaunch.com",
    image: STOCK_IMAGES.organizerZahava,
    eventsLink: ANGEL_LAUNCH_EVENTS_URL,
  },
];

export default function AboutPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <section className="border-b border-border/70 bg-white py-10 md:py-12">
        <Container>
          <h1 className="font-display text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            About Event Producers
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Meet the teams behind Broken VC Summit: Expert Dojo and Angel Launch.
          </p>
        </Container>
      </section>

      <section className="page-section py-10 md:py-14">
        <Container>
          <div className="space-y-6">
            {producers.map((producer) => (
              <article
                key={producer.org}
                className="lp-card grid overflow-hidden lg:grid-cols-[220px_1fr]"
              >
                <div className="flex flex-col items-center gap-5 border-b border-border/70 bg-[var(--navy)] p-6 lg:border-b-0 lg:border-r">
                  <div className="size-32 overflow-hidden rounded-full ring-4 ring-white shadow-md">
                    <Image
                      src={producer.image}
                      alt={producer.name}
                      width={128}
                      height={128}
                      unoptimized
                      className="size-full object-cover"
                    />
                  </div>
                  <Link
                    href={producer.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${producer.org}`}
                    className={`flex h-16 w-full max-w-[170px] items-center justify-center overflow-hidden rounded-md p-3 ${producer.logoDark ? "bg-black" : "bg-white"}`}
                  >
                    <Image
                      src={producer.logo}
                      alt={producer.logoAlt}
                      width={170}
                      height={64}
                      unoptimized
                      className="max-h-full w-full object-contain"
                    />
                  </Link>
                  <div className="w-full max-w-[190px] border-t border-white/15 pt-4 text-center text-xs text-white/75">
                    <p className="font-display text-sm font-medium text-white">
                      {producer.name}
                    </p>
                    <a
                      href={`tel:${producer.phone.replace(/\s/g, "")}`}
                      className="mt-2 block hover:text-white hover:underline"
                    >
                      {producer.phone}
                    </a>
                    <a
                      href={`mailto:${producer.email}`}
                      className="mt-1 block break-words text-white/85 hover:text-white hover:underline"
                    >
                      {producer.email}
                    </a>
                    <Link
                      href={producer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-xs font-semibold uppercase tracking-wide text-white underline underline-offset-4 hover:text-white/80"
                    >
                      Visit website
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <h2 className="lp-heading-section text-2xl">
                    <Link
                      href={producer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--accent)]"
                    >
                      {producer.heading}
                    </Link>
                  </h2>
                  <div className="mt-4 space-y-3">
                    {producer.paragraphs.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-sm leading-relaxed text-muted-foreground md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {producer.eventsLink && (
                    <p className="mt-4">
                      <Link
                        href={producer.eventsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[var(--navy)] underline underline-offset-4 hover:text-[var(--accent)]"
                      >
                        View past events here
                      </Link>
                    </p>
                  )}
                  <p className="mt-4 text-sm font-medium text-[var(--navy)]">
                    {producer.leader}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}
