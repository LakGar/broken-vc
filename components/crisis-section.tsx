import Image from "next/image";
import { Container } from "@/components/layout/container";
import { STOCK_IMAGES } from "@/lib/constants";

export function CrisisSection() {
  return (
    <section className="page-section">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="lp-heading-section">
              No Longer a System of Doomed Capital.
            </h2>
            <p className="mt-4 font-display text-xl font-semibold leading-snug text-[var(--navy)] sm:text-2xl"></p>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Broken VC Conference will bring together leading fund allocators
                from around the country to look at the future of how Silicon
                Valley should operate in this new world of AI—with a focus on
                LPs, family offices, and angels. The world is changing fast and
                Silicon Valley is not keeping up.
              </p>
              <p>
                This is a very real and needed conversation amongst serious
                capital allocators to change the face of venture capital
                investment for better returns and a better world. We gather key
                financial decision-makers who determine where innovation
                happens, which markets grow, and which ecosystems thrive.
              </p>
              <p>
                Don&apos;t miss this exceptional opportunity to develop
                relationships with global investors looking for investment
                opportunities in tech and related markets. Your team will
                develop business relationships with high-net-worth investors to
                rethink how capital is deployed—toward more efficient models,
                stronger returns, and long-term economic impact.
              </p>
            </div>
          </div>
          <div className="lp-image-frame relative aspect-[4/3] lg:aspect-[5/4]">
            <Image
              src={STOCK_IMAGES.zombieCapital}
              alt="Venture capital partners in a high-rise conference room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
