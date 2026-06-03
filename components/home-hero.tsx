import { PageHero } from "@/components/page-hero";
import { STOCK_IMAGES } from "@/lib/constants";

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
            It&apos;s time for allocators to take control. Higher returns.
            Faster exits. Improved liquidity. Reduced risk. Scaling with ease.
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
    />
  );
}
