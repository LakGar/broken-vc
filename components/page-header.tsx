import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("page-header-light py-16 md:py-20", className)}>
      <Container>
        <h1 className="lp-heading-section max-w-3xl">{title}</h1>
        {description && (
          <p className="lp-body mt-5 max-w-2xl">{description}</p>
        )}
      </Container>
    </div>
  );
}
