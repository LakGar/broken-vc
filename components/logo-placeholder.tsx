import { cn } from "@/lib/utils";

type LogoPlaceholderProps = {
  name: string;
  className?: string;
};

export function LogoPlaceholder({ name, className }: LogoPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex h-12 min-w-[130px] items-center justify-center rounded-full border border-border/80 bg-white px-5",
        className,
      )}
    >
      <span className="text-[10px] font-bold tracking-[0.1em] text-[var(--navy)]/45 uppercase">
        {name}
      </span>
    </div>
  );
}
