import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Poppins } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SITE_NAME } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Redesigning Venture Capital for Allocators`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "An exclusive invite-only summit for LPs, angels, family offices, foundations, institutional capital and select GPs — July 16, 2026 in San Francisco.",
  openGraph: {
    title: SITE_NAME,
    description:
      "Reshaping traditional venture capital for modern investors and LPs in the age of AI.",
    siteName: SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full overflow-x-hidden`}>
      <body className="flex min-h-full max-w-[100vw] flex-col overflow-x-hidden">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
