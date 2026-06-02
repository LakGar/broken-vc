import Image from "next/image";
import { Container } from "@/components/layout/container";
import { STOCK_IMAGES } from "@/lib/constants";

export function CrisisSection() {
  return (
    <section className="page-section">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="lp-heading-section">A System of Zombie Capital.</h2>
            <p className="mt-4 font-display text-xl font-semibold leading-snug text-[var(--navy)] sm:text-2xl"></p>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Venture Capital has become a graveyard of misaligned incentives,
                inflated valuations, and predatory fee structures.
              </p>
              <p>
                We are witnessing the death of the traditional 2/20 model. The
                industry is haunted by &ldquo;zombie&rdquo; funds that persist
                solely on management fees while failing to return meaningful
                capital to LPs.
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
