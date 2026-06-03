import type { Metadata } from "next";
import Link from "next/link";
import { TicketCard } from "@/components/ticket-card";
import { Container } from "@/components/layout/container";
import { SectionIntro } from "@/components/launchpoint/section-intro";
import { ticketTiers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <section id="tickets" className="bg-white py-10 md:py-14">
        <SectionIntro
          title="Tickets"
          description={
            <>
              <p>Attendees limited to verified accredited investors or sponsors.</p>
              For startups, vendors and service providers to attend, you must
              sponsor—see the{" "}
              <Link
                href="/sponsor"
                className="font-semibold text-[var(--accent)] underline"
              >
                sponsorship page
              </Link>
              .
            </>
          }
          align="center"
        />
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {ticketTiers.map((tier) => (
              <TicketCard key={tier.id} {...tier} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
