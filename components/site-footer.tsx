import Link from "next/link";
import { Container } from "@/components/layout/container";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

const contacts = [
  {
    org: "Angel Launch",
    name: "Zahava Stroud",
    phone: "310 621 6850",
    email: "zahava@angellaunch.com",
  },
  {
    org: "Expert Dojo",
    name: "Brian Mac Mahon",
    phone: "310 745 9580",
    email: "brian@expertdojo.com",
  },
];

export function SiteFooter() {
  return (
    <footer className="w-full max-w-[100vw] overflow-x-hidden border-t border-border bg-[var(--navy)] text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-medium">Broken VC Summit</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Produced by Expert DOJO and Angel Launch in partnership with the
              Nathan Family Office.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-white/45 uppercase">
              Navigate
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold tracking-wide text-white/50 uppercase">
              Contact
            </p>
            {contacts.map((c) => (
              <div key={c.org} className="mt-4 border-t border-white/10 pt-4 first:mt-3 first:border-0 first:pt-0">
                <p className="text-sm font-medium">{c.org}</p>
                <p className="text-xs text-white/60">{c.name}</p>
                <a href={`mailto:${c.email}`} className="mt-1 block text-sm text-white/80 hover:text-white">
                  {c.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/45">
          © {new Date().getFullYear()} {SITE_NAME} · Expert DOJO. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
