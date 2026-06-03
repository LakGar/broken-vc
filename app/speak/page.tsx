import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { FeatureGrid } from "@/components/launchpoint/feature-grid";
import { PageHero } from "@/components/page-hero";
import { SPEAK_FORM_URL, STOCK_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Speak",
};

const sessionFormats = [
  {
    title: "Featured Talk",
    description:
      "Lead a focused session on trends shaping venture capital and allocator strategy.",
  },
  {
    title: "Fireside Chat",
    description:
      "Moderated conversation sharing practical insights from the front lines of investing.",
  },
  {
    title: "Panel Discussion",
    description:
      "Join peers debating where returns, liquidity, and venture models are heading next.",
  },
  {
    title: "Sponsored Presentation",
    description:
      "Partner-led session opportunities are available through our sponsorship program.",
  },
];

export default function SpeakPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <PageHero
        title="Apply to speak"
        lead="There is no fee for speakers."
        description="If you are selected, you receive a full complimentary ticket and a spot on the agenda — keynotes, fireside chats, short talks, and panel discussions with leaders across technology, investment, and enterprise."
        image={STOCK_IMAGES.speakPanel}
        imageAlt="Panel discussion at Broken VC Summit"
        ctaHref={SPEAK_FORM_URL}
        ctaLabel="Apply to speak"
      />
      <section className="py-4">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="lp-heading-section">Session formats</h2>
              <p className="lp-body mt-5 max-w-xl">
                Review the agenda and tell us which format fits your topic best:
              </p>
              <FeatureGrid
                features={sessionFormats}
                className="mt-8 lg:grid-cols-2"
              />
              <p className="mt-6 text-sm text-muted-foreground">
                Sponsored presentation options are outlined on the{" "}
                <Link
                  href="/sponsor"
                  className="font-semibold text-[var(--accent)] underline"
                >
                  sponsorship page
                </Link>
                .
              </p>
            </div>
            <div className="lp-image-frame relative aspect-[4/3] lg:aspect-[5/4]">
              <Image
                src={STOCK_IMAGES.speakPanel}
                alt="Panel discussion at Broken VC Summit"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
