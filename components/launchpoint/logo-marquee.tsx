const partners = [
  "Expert Dojo",
  "Angel Launch",
  "Nathan Family Office",
  "The Lifestyle Group",
  "The Global Family Office",
  "Outpost Ventures",
  "BDev Ventures",
];

export function LogoMarquee() {
  const items = [...partners, ...partners];

  return (
    <section className="w-full max-w-full overflow-hidden border-b border-border/70 bg-white py-8">
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 px-6 will-change-transform">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 whitespace-nowrap text-sm font-semibold tracking-wide text-[var(--navy)]/30 uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
