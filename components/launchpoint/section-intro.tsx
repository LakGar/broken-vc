import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

type SectionIntroProps = {
  title: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
};

export function SectionIntro({
  title,
  description,
  align = "left",
  className,
  children,
}: SectionIntroProps) {
  return (
    <Container className={cn("mb-12 md:mb-16", className)}>
      <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
        <h2 className="lp-heading-section">{title}</h2>
        {description && (
          <p className="lp-body mt-5 max-w-2xl">{description}</p>
        )}
        {children}
      </div>
    </Container>
  );
}
