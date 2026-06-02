"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { LUMA_URL, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const MAIN_NAV_LINKS = NAV_LINKS;

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full max-w-[100vw] border-b border-border/60 bg-white/90 shadow-[var(--shadow-nav)] backdrop-blur-xl">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" className="font-display text-lg font-semibold text-[var(--navy)]">
            {SITE_NAME}
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {MAIN_NAV_LINKS.map((link) => {
              const isActive = pathname === link.href.split("#")[0];
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium text-muted-foreground transition-colors hover:text-[var(--navy)]",
                    isActive && "text-[var(--navy)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lp-btn-primary h-10 px-6 text-sm lg:inline-flex"
          >
            Register
          </a>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {MAIN_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--navy)] hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={LUMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lp-btn-primary mt-3 w-full"
            >
              Register
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
