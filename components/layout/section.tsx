import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  divided?: boolean;
  size?: "default" | "narrow" | "wide";
  id?: string;
  spacing?: "default" | "compact" | "hero";
};

const spacingMap = {
  default: "py-20 md:py-28",
  compact: "py-14 md:py-16",
  hero: "py-0",
};

export function Section({
  children,
  className,
  containerClassName,
  divided = true,
  size = "default",
  id,
  spacing = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "max-w-full bg-white",
        divided && "border-t border-border/70",
        spacingMap[spacing],
        className,
      )}
    >
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
