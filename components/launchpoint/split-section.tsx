import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

type SplitSectionProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: React.ReactNode;
  className?: string;
};

export function SplitSection({
  title,
  description,
  image,
  imageAlt,
  reverse,
  primaryCta,
  secondaryCta,
  children,
  className,
}: SplitSectionProps) {
  const primaryIsExternal = primaryCta?.href.startsWith("http");
  const secondaryIsExternal = secondaryCta?.href.startsWith("http");

  return (
    <section className={cn("page-section max-w-full", className)}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div>
            <h2 className="lp-heading-section">{title}</h2>
            <p className="lp-body mt-6 max-w-xl">{description}</p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="lp-btn-primary"
                    target={primaryIsExternal ? "_blank" : undefined}
                    rel={primaryIsExternal ? "noopener noreferrer" : undefined}
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="lp-btn-outline"
                    target={secondaryIsExternal ? "_blank" : undefined}
                    rel={secondaryIsExternal ? "noopener noreferrer" : undefined}
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
            {children}
          </div>
          <div className="lp-image-frame relative aspect-[4/3] lg:aspect-[5/4]">
            <Image
              src={image}
              alt={imageAlt}
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
