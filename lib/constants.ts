export const SITE_NAME = "Broken VC Summit";
export const EVENT_DATE = "July 16, 2026";
export const EVENT_CITY = "San Francisco";
export const EVENT_LOCATION_NOTE =
  "Downtown San Francisco (near 3rd & Market Street). Venue address provided one week before the event.";

export const LUMA_URL =
  process.env.NEXT_PUBLIC_LUMA_URL ?? "https://lu.ma/broken-vc-summit";

export const SPEAK_FORM_URL = "https://forms.gle/Q8tKgf1mv82RQm6dA";

export const NAV_LINKS = [
  { label: "Agenda", href: "/agenda" },
  { label: "Attend", href: "/attend" },
  { label: "Tickets", href: "/register#tickets" },
  { label: "Speakers", href: "/speakers" },
  { label: "Speak", href: "/speak" },
  { label: "Sponsor", href: "/sponsor" },
  { label: "Partner", href: "/partner" },
  { label: "About Us", href: "/about" },
] as const;

export const STOCK_IMAGES = {
  hero: "/images/hero.png",
  zombieCapital: "/images/zombie-capital.png",
  transparentAccountability: "/images/transparent-accountability.png",
  writtenApproval: "/images/written-approval.png",
  speakPanel: "/images/speak-panel.png",
  networking:
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=80",
  roundtable:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
  conference:
    "https://images.unsplash.com/photo-1475721027785-f48eccf3a8d1?w=900&q=80",
  speakerPlaceholder:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  organizerBrian:
    "/images/brian-macmahon.jpg",
  organizerZahava: "/images/zahava-stroud.jpg",
  expertDojoLogo: "/images/expert-dojo-logo-white.png",
  angelLaunchLogo: "/images/angel-launch-logo.jpg",
} as const;
