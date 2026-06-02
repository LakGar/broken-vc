import type { Metadata } from "next";
import Link from "next/link";
import { TicketCard } from "@/components/ticket-card";
import { Container } from "@/components/layout/container";
import { SectionIntro } from "@/components/launchpoint/section-intro";
import { RegisterHero } from "@/components/register-hero";
import { ticketTiers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <RegisterHero />

      <section id="tickets" className="page-section scroll-mt-24">
        <SectionIntro
          title="Choose your package"
          description={
            <>
              Sponsors and service providers — see the{" "}
              <Link href="/sponsor" className="font-semibold text-[var(--accent)] underline">
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
