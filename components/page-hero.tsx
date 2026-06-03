import Image from "next/image";
import { EVENT_CITY, EVENT_DATE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  titleClassName?: string;
  description?: React.ReactNode;
  lead?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  showEventMeta?: boolean;
  fullHeight?: boolean;
  priority?: boolean;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageHero({
  title,
  titleClassName,
  description,
  lead,
  showEventMeta = true,
  image,
  imageAlt,
  fullHeight = false,
  priority = false,
  children,
  className,
  ctaHref = "/register#tickets",
  ctaLabel = "Apply here",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative z-0 w-full max-w-full overflow-x-hidden border-b border-border/70 bg-white",
        fullHeight && "lg:min-h-[calc(100dvh-4.5rem)] lg:overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "grid w-full max-w-full lg:grid-cols-2 lg:grid-rows-1",
          fullHeight && "lg:h-full lg:min-h-[calc(100dvh-4.5rem)]",
        )}
      >
        <div className="flex flex-col px-5 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8 lg:min-h-0 lg:justify-center lg:px-10 lg:py-10 xl:px-14">
          <div className="flex flex-col justify-center lg:min-h-0 lg:flex-1">
            {showEventMeta && (
              <div className="space-y-0.5">
                <p className="font-display text-2xl font-bold tracking-tight text-[var(--navy)] sm:text-3xl lg:text-[2rem]">
                  {EVENT_CITY}
                </p>
                <p className="font-display text-xl font-bold tracking-tight text-[var(--accent-orange)] sm:text-2xl lg:text-[1.75rem]">
                  {EVENT_DATE}
                </p>
              </div>
            )}
            <div className="flex items-center gap-4 justify-between">
              <h1
                className={cn(
                  "font-display text-[1.75rem] font-bold leading-[1.08] tracking-tight text-[var(--navy)] sm:text-4xl lg:text-[2.75rem]",
                  showEventMeta ? "mt-4 lg:mt-5" : "mt-0",
                  titleClassName,
                )}
              >
                {title}
              </h1>
              <a
                href={ctaHref}
                className="lp-btn-primary"
                target={ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {ctaLabel}
              </a>
            </div>

            {lead && (
              <p className="mt-4 max-w-xl text-[0.9375rem] font-semibold leading-snug text-[var(--navy)] sm:text-lg">
                {lead}
              </p>
            )}

            {description &&
              (typeof description === "string" ? (
                <p
                  className={cn(
                    "max-w-xl text-[0.8125rem] leading-relaxed text-[var(--navy)]/85 sm:text-sm lg:text-base",
                    lead ? "mt-3" : "mt-4",
                  )}
                >
                  {description}
                </p>
              ) : (
                description
              ))}

            {children}
            {/* <p className=" text-[var(--navy)]/85 py-2">
              We welcome sponsors seeking promotion, branding, meeting new
              clients and demonstrating thought leadership. As a sponsor, you
              give remarks to the audience, get advance marketing on the
              website, moderate a session, receive the opt-in attendee list,
              tickets for staff, and curated in-person introductions.
            </p> */}
          </div>
        </div>

        {image && imageAlt && (
          <div className="px-5 pb-8 sm:px-8 sm:pb-10 lg:flex lg:min-h-0 lg:items-stretch lg:p-6 lg:pt-10 xl:p-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] sm:aspect-[16/9] sm:rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[320px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                priority={priority}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
