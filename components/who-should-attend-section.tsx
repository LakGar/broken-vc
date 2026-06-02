import { CategoryBox } from "@/components/layout/category-box";
import { Container } from "@/components/layout/container";
import { SectionIntro } from "@/components/launchpoint/section-intro";
import { attendBox1, attendBox2, attendBox3 } from "@/lib/site-data";

export function WhoShouldAttendSection() {
  return (
    <section id="who-should-attend" className="page-section scroll-mt-24">
      <SectionIntro
        align="center"
        title="Who Should Attend"
        description="Built for discerning investors who expect high performance outcomes."
      />
      <Container>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
          All attendees must apply for an invitation which decision is made
          entirely at the discretion of event producers. Once approved, you will
          receive written confirmation with the venue address.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
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
            title="These categories can sponsor the entire summit or attend the cocktail party only"
            items={attendBox3}
            accent="vendor"
            initialVisibleItems={7}
          />
        </div>
      </Container>
    </section>
  );
}
