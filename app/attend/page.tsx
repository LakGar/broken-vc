import type { Metadata } from "next";
import Link from "next/link";
import { CategoryBox } from "@/components/layout/category-box";
import { Container } from "@/components/layout/container";
import { EVENT_CITY, EVENT_DATE, EVENT_LOCATION_NOTE } from "@/lib/constants";
import { attendBox1, attendBox2, attendBox3 } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Who Should Attend",
};

export default function AttendPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <section className="border-b border-border/70 bg-white py-10 md:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="text-sm font-semibold text-[var(--accent-orange)]">
                {EVENT_CITY} · {EVENT_DATE}
              </p>
              <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
                Who Should Attend
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Attendance is curated for investors and select ecosystem leaders.
                All attendees must apply for an invitation. Approval is entirely
                at the discretion of the event producers, and approved guests
                receive written confirmation with the venue address.
              </p>
            </div>
            <div className="rounded-lg border border-border/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Venue
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--navy)]">
                {EVENT_LOCATION_NOTE}
              </p>
              <Link href="/register#tickets" className="lp-btn-primary mt-5 w-full">
                View tickets here
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section py-8 md:py-10">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <CategoryBox
              title="These categories can apply for a free ticket if approved"
              items={attendBox1}
              accent="free"
            />
            <CategoryBox
              title="These categories can purchase a ticket if approved"
              items={attendBox2}
              accent="paid"
            />
            <CategoryBox
              title="These categories can sponsor the summit or attend the cocktail party only"
              items={attendBox3}
              accent="vendor"
              initialVisibleItems={7}
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
