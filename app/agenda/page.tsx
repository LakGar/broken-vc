import type { Metadata } from "next";
import { AgendaTimeline } from "@/components/layout/agenda-timeline";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Agenda",
};

export default function AgendaPage() {
  return (
    <div className="min-w-0 max-w-full overflow-x-hidden bg-white">
      <section className="border-b border-border/70 bg-white py-10 md:py-12">
        <Container size="narrow">
          <h1 className="font-display text-4xl font-semibold leading-tight text-[var(--navy)] md:text-5xl">
            Agenda
          </h1>
        </Container>
      </section>

      <section className="bg-white py-6 md:py-8">
        <Container size="narrow">
          <AgendaTimeline />
        </Container>
      </section>
    </div>
  );
}
