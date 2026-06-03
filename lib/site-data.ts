export const frameworkPillars = [
  {
    number: "01",
    title: "Performance-First Capital Structures",
    description:
      "Reimagining fund economics to prioritize consistent, measurable returns over inflated AUM.",
  },
  {
    number: "02",
    title: "True Alignment Between LPs and Operators",
    description:
      "Structural incentive alignment that ensures managers succeed only when allocators do.",
  },
  {
    number: "03",
    title: "Targeting Consistent 5x–10x Outcomes",
    description:
      "Moving beyond power-law narratives toward repeatable, high-conviction return profiles.",
  },
  {
    number: "04",
    title: "Transparent Accountability Metrics",
    description:
      "Open reporting frameworks that replace opacity with verifiable performance data.",
  },
  {
    number: "05",
    title: "Ownership-Centric Venture Design",
    description:
      "Preserving meaningful equity positions through disciplined capital deployment strategies.",
  },
];

export const attendBox1 = [
  "Angels",
  "Endowments",
  "Family Offices: Single and multi-family offices",
  "Foundations",
  "LPs",
  "Pension funds",
  "Sovereign entities",
];

export const attendBox2 = [
  "Emerging Managers",
  "Fund managers",
  "GPs",
  "Hedge funds",
  "Private equity",
  "Private credit funds",
  "Real estate investment platforms",
  "Secondary market platforms",
  "Venture capital",
];

export const attendBox3 = [
  "Accountants and auditors",
  "Angel or investor syndicates",
  "CFOs",
  "Corporate executives",
  "Commercial banks",
  "Executive recruiters",
  "Financial management firms",
  "Fund managers and administrators",
  "Geographic regions seeking to attract Series C and D investors",
  "Law firms",
  "Registered investment advisors",
  "Tech professionals",
  "Startups",
  "Startup incubator hubs",
  "Wealth management and trust advisory services",
  "VC management software and LP reporting platforms",
];

export const agendaItems = [
  {
    time: "9:00 AM – 10:00 AM",
    title:
      "Multiple roundtable group workshop focused on the future of Venture Capital & New Business Models for VC industry",
  },
  {
    time: "10:00 – 10:25 AM",
    title: "Keynote Speaker: Venture Return Convergence",
  },
  {
    time: "10:30 – 10:55 AM",
    title: "Strategies for Allocators to Skyrocket Returns",
  },
  {
    time: "11:00 – 11:15 AM",
    title: "Investment Success in Era of AI",
  },
  {
    time: "11:15 – 11:30 AM",
    title: "Combatting Dilution, Excessive Pricing and Market Bubbles",
  },
  {
    time: "11:30 – 11:45 AM",
    title: "Owning Domain Expertise",
  },
  {
    time: "11:45 AM – 12:00 PM",
    title: "From Passive to Active Investing",
  },
  {
    time: "12:00 – 12:30 PM",
    title:
      "Investor Group Panel: Are Private Investor Groups the New Power Base of Venture Capital",
  },
  { time: "12:30 – 1:30 PM", title: "Lunch" },
  {
    time: "1:30 – 2:00 PM",
    title:
      "Panel – Family Office Panel: Opinion on How to Improve Venture Outcomes",
  },
  {
    time: "2:10 – 2:40 PM",
    title:
      "Alternative Investment Panel: Where Will the Next Generation of Returns Come From",
  },
  {
    time: "2:50 – 3:10 PM",
    title: "Family Office Panel – Allocators Taking Control for Better DPIs",
  },
  {
    time: "3:20 – 3:50 PM",
    title: "Feedback from Morning Roundtable Session and Day Conclusions",
  },
  {
    time: "4:00 – 5:00 PM",
    title:
      "Deal Room Session: 30 attendees at a time participate in a roundtable where each gets 2 minutes to share needs while others share how they can support with leads",
  },
  { time: "5:00 – 5:30 PM", title: "Networking" },
  { time: "5:30 – 8:00 PM", title: "Cocktail Party" },
];

export type Speaker = {
  name: string;
  title: string;
  company: string;
  bio?: string;
  linkedin?: string;
  image: string;
  confirmed: boolean;
};

export const confirmedSpeakers: Speaker[] = [
  {
    name: "Dave Harden",
    title: "Founder & Managing Partner",
    company: "Outpost Ventures",
    linkedin: "https://www.linkedin.com/in/daveharden/",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    confirmed: true,
  },
  {
    name: "Nacho De Marco",
    title: "CEO at BairesDev · GP, BDev Ventures",
    company: "BDev Ventures",
    bio: "Bootstrapped to 4,000+ Engineers | YPO & WEF",
    linkedin: "https://www.linkedin.com/in/nachodemarco/",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    confirmed: true,
  },
];

export const ticketTiers = [
  {
    id: "allocators",
    badge: "Free for Approved Allocators",
    label: "Approved Allocators",
    price: "Free",
    title: "LP, Angels and Family Offices",
    description:
      "For approved LP investors. Attendance is curated and requires prior written approval.",
    audience:
      "LPs, family offices, angels, institutional investors, endowment funds & foundations.",
    benefits: [
      "All sessions & keynotes",
      "Roundtable workshops",
      "Networking lunch",
      "Cocktail party (Capital After Hours)",
    ],
    cta: "Apply Now",
    variant: "navy" as const,
  },
  {
    id: "gps",
    badge: "Verified Accredited",
    label: "$495",
    price: "$495",
    title: "GPs & VC Firms",
    description: "For verified accredited investors including VCs and GPs.",
    audience: "",
    benefits: [
      "All sessions & keynotes",
      "Roundtable workshops",
      "Networking lunch",
      "Cocktail party (Capital After Hours)",
    ],
    cta: "Apply Now",
    variant: "white" as const,
  },
  {
    id: "cocktail",
    badge: "Cocktail Party",
    label: "$85",
    price: "$85",
    title: "Capital After Hours",
    description:
      "Evening networking at the cocktail party — 5:30–8:00 PM. Rates increase after July 1.",
    audience: "Startups, tech professionals, VCs and corporate executives.",
    benefits: [
      "Cocktail party access (5:30–8:00 PM)",
      "Networking with LPs & family offices",
      "Open bar & canapés",
    ],
    cta: "Apply Now",
    variant: "white" as const,
  },
  {
    id: "marketing-partner",
    badge: "Complimentary",
    label: "Approved Marketing Partner",
    price: "Complimentary",
    title: "Approved Marketing Partner",
    subtitle: "Must get code first to register",
    description:
      "For approved marketing partners. Contact us for details and registration code.",
    audience:
      "Meetups, media outlets, trade organizations, and industry associations.",
    benefits: [
      "1 event access ticket",
      "Firm name listed on website",
      "Cross-promotional marketing via email, newsletters, website or social media (subject to approval & verification)",
    ],
    cta: "Contact Us for Details",
    ctaHref:
      "mailto:info@angellaunch.com?subject=Marketing%20Partner%20Registration",
    variant: "white" as const,
  },
];

export const sponsorshipTiers = [
  {
    badge: "Most Exclusive",
    price: "$14,995",
    title: "Platinum Title ",
    highlight: true,
    benefits: [
      "Category exclusivity (only one firm per category)",
      "Guaranteed 1:1 introductions with at least 6 allocators",
      '"Title Partner" designation across all materials',
      "Premium logo placement — website, emails, all materials",
      "Pre & post-event opt-in attendee list with contact info",
      "Remarks on stage for 15 minutes",
      "Moderate or speak on a session (subject to approval)",
      "Opportunity to raffle a prize & collect business cards",
      "8 tickets for staff or clients",
      "Facilitate two roundtable sessions on your topic",
      "4 curated onsite introductions to investors you choose",
      "Demo table at cocktail party",
      "Banner or signage on stage (subject to specifications)",
    ],
  },
  {
    badge: "Premier",
    price: "$9,995",
    title: "Gold ",
    benefits: [
      "Remarks on stage for 5 minutes",
      "5 curated introductions to key LPs/family offices",
      "Logo on website, invites & all materials",
      "Moderate or speak on a session (subject to approval)",
      "Post-event attendee list (opt-in) with contact info",
      "6 tickets for staff or clients",
      "Demo table at cocktail party",
      "Facilitate 1 roundtable session",
    ],
  },
  {
    badge: "Featured",
    price: "$4,995",
    title: "Silver ",
    benefits: [
      "Featured logo placement",
      "Verbal recognition during event",
      "4 curated introductions to key attendees",
      "VIP networking access",
      "Optional private roundtable hosting",
      "Post-event attendee list (opt-in) with contact info",
      "Demo table at cocktail party",
      "4 tickets for staff or clients",
    ],
  },
  {
    badge: "Standard",
    price: "$2,495",
    title: "Bronze ",
    benefits: [
      "Logo placement (website + materials)",
      "2 curated introductions",
      "Mention in closing remarks",
      "Facilitate one session at roundtable discussion",
      "Demo table at cocktail party",
      "Attendee list with names, company, titles",
      "3 tickets for staff or clients",
    ],
  },
  {
    badge: "Entry",
    price: "$995 - $1495",
    title: "Premium or Basic Community Partner ",
    benefits: [
      "2 tickets for staff or clients",
      "Firm name listed on website with link & description",
      "Logo included in event signage",
      "Demo table at cocktail party",
      "Additional benefits available for Premium Partner",
    ],
  },
  {
    badge: "Media & Networks",
    price: "Complimentary",
    title: "Marketing Partner",
    subtitle: "Must be approved to get code",
    benefits: [
      "1 event access ticket",
      "Firm name listed on website",
      "Cross-promotional marketing via email, newsletters, website or social media (subject to approval & verification)",
    ],
    note: "Contact us for details.",
  },
];

export const sponsorshipExtras = [
  {
    title: "Lunch or Cocktail Party Sponsor",
    price: "$2,995–$4,995",
    description:
      "Host at your office (if nearby) or a premium restaurant. You provide branded materials/banners during the meal and bring your staff. Additional food costs apply.",
  },
  {
    title: "Badge Sponsor",
    price: "$995",
    description: "Your logo on the event badge, subject to approval.",
  },
  {
    title: "Lanyard Sponsor",
    price: "$995",
    description: "Your logo on the event lanyard, subject to approval.",
  },
  {
    title: "Badge + Lanyard Bundle",
    price: "$1,495",
    description: "Both badge and lanyard sponsorship at a combined rate.",
  },
];

export const partnerBenefits = [
  "Your logo will be included on pre-event promotion, including direct mail, advertising, website, and HTML news blasts to our proprietary database with each blast containing 30,000 corporate, tech, advertising, government, academic, entertainment, media, and environmental executives.",
  "1 free comp ticket",
  "Distribution of literature on shared tables at event.",
  "Opportunity to moderate or speak on panel, subject entirely to our discretion.",
  "We send out emails to our database to promote your future events.",
];

export const partnerRequests = [
  "Post our logo(s) on your home page until the event concludes and list the event in any calendars you publish.",
  "Send at least 2 dedicated email blasts or highlighted newsletter alerts notifying your members about the summit with tracking code",
  "Print ads in your magazines or websites or rotate banner ads in electronic newsletters and publications.",
  "Listing on calendars or social network pages (Facebook, LinkedIn, Twitter).",
  "Mention on your personal social media pages.",
];

export const formatSessions = [
  {
    number: "01",
    title: "First-Principles Keynote",
    description:
      "A deep examination of where venture capital broke — and the structural principles required to rebuild it for allocators.",
  },
  {
    number: "02",
    title: "Structural Design Lab",
    description:
      "Closed-door working sessions where allocators collaborate on new fund structures, fee models, and governance frameworks.",
  },
  {
    number: "03",
    title: "Allocator Roundtables",
    description:
      "Intimate peer-to-peer discussions among family offices, LPs, and institutional allocators sharing real performance data.",
  },
  {
    number: "04",
    title: "Strategy & Deployment",
    description:
      "Performance-focused sessions on portfolio construction, co-investment mechanics, and capital deployment discipline.",
  },
];

export const credibilityStats = [
  { value: "266", label: "Companies Backed" },
  { value: "38%", label: "Average Annual Growth" },
  { value: "Proprietary", label: "Capital Model" },
];
