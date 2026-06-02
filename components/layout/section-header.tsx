import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  title,
  description,
  align = "left",
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-12 md:mb-14",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <h2 className={cn("lp-heading-section", dark && "!text-white")}>
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "lp-body mt-5",
            align === "center" && "mx-auto",
            dark && "!text-white/75",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
