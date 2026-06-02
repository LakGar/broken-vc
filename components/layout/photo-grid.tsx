import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoGridProps = {
  images: { src: string; alt: string }[];
  className?: string;
};

export function PhotoGrid({ images, className }: PhotoGridProps) {
  return (
    <div
      className={cn(
        "grid min-w-0 gap-3 overflow-hidden sm:grid-cols-3 sm:gap-4",
        className,
      )}
    >
      {images.map((img) => (
        <div
          key={img.src}
          className="relative min-w-0 overflow-hidden rounded-xl ring-1 ring-[var(--navy)]/10"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
