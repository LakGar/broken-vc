import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";

type Step = {
  number: string;
  title: string;
  image?: string;
};

type StepsRowProps = {
  steps: Step[];
  title?: string;
  cta?: { primary: string; secondary: string; primaryHref: string; secondaryHref: string };
};

export function StepsRow({ steps, title, cta }: StepsRowProps) {
  return (
    <section className="page-section">
      <Container>
        {title && (
          <h2 className="lp-heading-section mx-auto max-w-2xl text-center">{title}</h2>
        )}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="lp-card overflow-hidden p-0">
              {step.image && (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              )}
              <div className="p-6">
                <span className="font-display text-sm font-medium text-[var(--accent)]">
                  {step.number}.
                </span>
                <h3 className="mt-2 font-display text-lg font-medium text-[var(--navy)]">
                  {step.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
        {cta && (
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href={cta.primaryHref} className="lp-btn-primary">
              {cta.primary}
            </Link>
            <Link href={cta.secondaryHref} className="lp-btn-outline">
              {cta.secondary}
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
