import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { LUMA_URL, STOCK_IMAGES } from "@/lib/constants";

export function HomeHero() {
  return (
    <PageHero
      title="Broken VC Summit"
      titleClassName="uppercase sm:mt-4 lg:mt-5 xl:text-5xl"
      lead="Convergence: Reshaping Traditional Venture Capital for Modern Investors and LPs in the Age of AI"
      image={STOCK_IMAGES.hero}
      imageAlt="Professionals networking at a venture capital summit"
      fullHeight
      priority
      className="border-b-0 pt-5 sm:pt-8 lg:pt-5"
      description={
        <div className="mt-3 max-w-xl space-y-2.5 text-[0.8125rem] leading-relaxed text-[var(--navy)]/85 sm:mt-4 sm:space-y-3 sm:text-sm lg:space-y-3.5 lg:text-base">
          <p className="font-semibold text-[var(--navy)]">
            It&apos;s time for allocators to take control. Higher returns. Faster
            exits. Improved liquidity, reduced risk. Scaling with ease.
          </p>
          <p>
            An exclusive invite-only summit for LPs, angels, family offices,
            foundations, institutional capital and select GPs gathering leading
            influencers on how Silicon Valley can deploy capital with emerging
            investment models to reshape venture capital with increased returns.
          </p>
          <p className="text-[var(--navy)]/65">
            Produced by Expert Dojo and Angel Launch in partnership with the
            Nathan family office.
          </p>
        </div>
      }
      footer={
        <>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-sm font-bold text-[var(--navy)] sm:text-base">
              Angel Launch
            </span>
            <span
              className="hidden h-4 w-px bg-[var(--navy)]/20 sm:block"
              aria-hidden
            />
            <span className="text-sm font-bold text-[var(--navy)] sm:text-base">
              Expert Dojo
            </span>
          </div>
          <p className="mt-2 text-xs font-semibold text-[var(--accent-orange)] sm:text-sm">
            Free for qualified investors. Fee for others
          </p>
          <a
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--navy)] px-8 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[var(--navy-muted)] sm:min-h-12 sm:text-base"
          >
            Register here
          </a>
        </>
      }
    />
  );
}
