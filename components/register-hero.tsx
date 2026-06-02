import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import {
  EVENT_LOCATION_NOTE,
  LUMA_URL,
  STOCK_IMAGES,
} from "@/lib/constants";

const includedItems = [
  "Full-day sessions",
  "Curated networking",
  "Lunch included",
  "Cocktail party",
] as const;

export function RegisterHero() {
  return (
    <PageHero
      title="Flexible packages"
      lead="All attendees must apply and be approved in writing."
      description="Tickets include sessions, networking, lunch, and the cocktail party. Choose the package that fits your role below."
      image={STOCK_IMAGES.writtenApproval}
      imageAlt="Attendees reviewing registration at a venture capital summit"
      fullHeight
      priority
      footer={
        <>
          <p className="text-sm font-bold text-[var(--accent-orange)] sm:text-base">
            Free for qualified investors · Fee for others
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-8 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[var(--navy-muted)] sm:min-h-12 sm:text-base"
            >
              Register here on Luma
              <ExternalLink className="size-4" aria-hidden />
            </a>
            <Link
              href="#tickets"
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[var(--navy)]/15 px-8 text-sm font-semibold text-[var(--navy)] transition-all hover:border-[var(--navy)]/25 sm:min-h-12 sm:text-base"
            >
              View packages
            </Link>
          </div>
          <p className="mt-5 flex max-w-xl items-start gap-2 text-xs leading-relaxed text-[var(--navy)]/65 sm:text-sm">
            <MapPin
              className="mt-0.5 size-4 shrink-0 text-[var(--navy)]/45"
              aria-hidden
            />
            {EVENT_LOCATION_NOTE}
          </p>
        </>
      }
    >
      <ul className="mt-5 flex flex-wrap gap-2">
        {includedItems.map((item) => (
          <li
            key={item}
            className="rounded-full border border-[var(--navy)]/10 bg-[var(--navy)]/[0.03] px-3 py-1.5 text-xs font-medium text-[var(--navy)]/80 sm:text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </PageHero>
  );
}
