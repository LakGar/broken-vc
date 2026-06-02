import { cn } from "@/lib/utils";

type CalloutPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function CalloutPanel({ children, className }: CalloutPanelProps) {
  return (
    <div className={cn("lp-card rounded-2xl p-8 md:p-10", className)}>
      {children}
    </div>
  );
}
