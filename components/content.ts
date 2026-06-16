// Central content + configuration for the English (global) version of uzaygokcek.com
// Edit values here to update the whole site. Prices are in USD, adapted for an
// international audience; tweak them to taste.

export const SITE = {
  name: "Uzay Gökçek",
  email: "vibeflowai@uzaygokcek.com",
  phoneDisplay: "+90 531 291 89 75",
  phoneHref: "tel:+905312918975",
  whatsapp: "https://wa.me/905312918975",
  // TODO: replace with your real Calendly link
  calendly: "https://calendly.com/uzaygokcek/30min",
  hours: "Mon–Fri, 09:00–19:00 (GMT+3)",
};

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Scenarios", href: "#scenarios" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  badge: "Open to new projects",
  titleLead: "AI and automation that runs your business",
  titleAccent: "— from idea to first customer.",
  subtitle:
    "From real estate to clinics, restaurants to logistics — I build n8n automation, AI agents, and websites for small and mid-sized businesses across 15 industries. Delivered in 1–2 days. You pay after you see it live.",
  proofPoints: [
    "Vibe-coder approach — AI-assisted development: days, not the weeks a traditional agency takes",
    "Fixed price, fixed timeline",
    "One point of contact: me, directly",
    "Code and systems handed over to you",
  ],
  toolsLabel: "Industry-standard · open-source, no lock-in",
  tools: ["Claude", "OpenAI GPT", "n8n", "Next.js", "Supabase", "Google Workspace"],
};

export type Service = {
  icon: string;
  title: string;
  description: string;
  price: string;
  tags: string[];
  adaptable?: boolean;
};

export const SERVICES_HEADING = {
  lead: "Let's solve the friction in your business",
  accent: "with software.",
  intro:
    "Six core services — the first three (n8n automation, AI agent, website) are tailored to each of 15 industries. The technical detail and delivery are on me; you just describe the problem.",
};

export const SERVICES: Service[] = [
  {
    icon: "Workflow",
    title: "Automate the Repetitive Work",
    description:
      "Run manual steps — invoicing, orders, email, reporting — in the background with n8n. Most SMBs save 20+ hours a month, so you can focus on the business.",
    price: "$1,500–$3,000",
    tags: [
      "setup",
      "negotiable",
      "monthly maintenance plan",
      "first month free",
      "delivered in 1–2 days",
    ],
    adaptable: true,
  },
  {
    icon: "Bot",
    title: "An AI Agent That Answers Customers 24/7",
    description:
      "A Claude/ChatGPT-based assistant trained on your own data. It answers customer questions instantly on WhatsApp, your website, or email — no working hours required.",
    price: "$1,500–$3,000",
    tags: [
      "setup",
      "negotiable",
      "monthly maintenance plan",
      "first month free",
      "delivered in 1–2 days",
    ],
    adaptable: true,
  },
  {
    icon: "Globe",
    title: "A Corporate Website That Wins Customers",
    description:
      "A fast-loading, Google-findable site that works flawlessly on mobile. Forms, booking, and WhatsApp integration included — first customers within 2–3 weeks.",
    price: "$1,200",
    tags: [
      "setup",
      "design + domain + hosting + build included",
      "one-time",
      "delivered in 1–2 days",
    ],
    adaptable: true,
  },
  {
    icon: "LayoutDashboard",
    title: "A Custom SaaS / Admin Dashboard for Your Business Model",
    description:
      "Inventory, customers, appointments, subscriptions — drop the spreadsheets for a dashboard built around you. Logins, payments, and reports included. Handover in 4–8 weeks.",
    price: "MVP delivered in 1–2 weeks · negotiable · written quote based on scope",
    tags: [],
  },
  {
    icon: "Smartphone",
    title: "A Mobile App in Your Customer's Pocket",
    description:
      "A loyalty app for iOS and Android: ordering, loyalty, notifications, payments. I handle the whole process through to App Store and Google Play release.",
    price: "MVP delivered in 1–2 weeks · negotiable · written quote based on scope",
    tags: [],
  },
  {
    icon: "Gamepad2",
    title: "A Branded or Educational Game",
    description:
      "Mobile/web games that boost engagement. A gift/loyalty game for your brand, or an interactive learning experience for an education provider.",
    price: "MVP delivered in 1–2 weeks · negotiable · written quote based on scope",
    tags: [],
  },
];

export const PRICING_NOTE = {
  badge: "No upfront payment",
  text: "I build it first; you see it live, approve, then pay.",
};

export const PRICING = {
  overline: "What it costs",
  note: "Transparent pricing · no surprises",
  items: [
    {
      label: "Website",
      price: "$1,200",
      detail:
        "One-time setup · design + domain + hosting + build included · delivered in 1–2 days",
    },
    {
      label: "n8n Automation",
      price: "$1,500–$3,000",
      detail:
        "Setup range · negotiable · monthly maintenance · first month free · delivered in 1–2 days",
    },
    {
      label: "AI Agent",
      price: "$1,500–$3,000",
      detail:
        "Setup range · negotiable · monthly maintenance · first month free · delivered in 1–2 days",
    },
  ],
};

export const INDUSTRIES_HEADING = {
  lead: "I know your business —",
  accent: "a solution built for your industry.",
  intro:
    "I tailor my n8n automation, AI agent, and website services to SMBs across 15 industries. Everything is built around your sector's real workflow — never an off-the-shelf template.",
  deliverLabel: "What I deliver:",
  deliverChips: ["n8n Automation", "AI Agent", "Website"],
  closing:
    "For each sector I keep a library of multiple automation and AI-agent types, plus sector-specific website starters. Because I don't start from scratch, delivery is faster and your investment is lower — all adapted to your needs.",
};

export type Industry = { icon: string; title: string; description: string };

export const INDUSTRIES: Industry[] = [
  { icon: "Home", title: "Real Estate Agents", description: "Listing automation, an AI that matches buyers, a fast portfolio page." },
  { icon: "Stethoscope", title: "Clinics", description: "Online booking, automatic reminders, a patient-intake bot." },
  { icon: "Scale", title: "Law Firms", description: "Client tracking, AI petition drafts, a consultation intake page." },
  { icon: "Building2", title: "Property Developers", description: "Portfolio management, investor reporting, a corporate project site." },
  { icon: "UtensilsCrossed", title: "Restaurants", description: "WhatsApp ordering, an AI table-booking, online menu and orders." },
  { icon: "Apple", title: "Food & Beverage", description: "Stock-tracking automation, supplier integration, a B2B order portal." },
  { icon: "Dumbbell", title: "Gyms & Studios", description: "Membership tracking, payment reminders, a member portal and class booking." },
  { icon: "HardHat", title: "Construction Firms", description: "Site-progress tracking, quote automation, a project showcase site." },
  { icon: "Boxes", title: "Wholesalers", description: "An AI that takes WhatsApp orders, stock-price sync, a B2B catalog." },
  { icon: "BedDouble", title: "Hotels", description: "Reservation integration, a Q&A bot, a rooms-and-rates page." },
  { icon: "Calculator", title: "Accountants", description: "Document-classification AI, a client portal, a booking-and-documents page." },
  { icon: "Ticket", title: "Entertainment & Arts", description: "Event-ticketing automation, a follower bot, event micro-sites." },
  { icon: "ShoppingBag", title: "E-commerce", description: "Order tracking, a customer-service bot, a conversion-focused brand site." },
  { icon: "Scissors", title: "Textile Manufacturers", description: "Sample & production tracking, a B2B product catalog, order-taking AI." },
  { icon: "Truck", title: "Logistics Firms", description: "Shipment-tracking automation, a customer-update bot, an order portal." },
];

export const SCENARIOS_HEADING = {
  lead: "Which problem, solved how?",
  accent: "Here's the typical impact.",
};

export type Scenario = {
  persona: string;
  badges: string[];
  title: string;
  problem: string;
  solution: string;
  metric: string;
  metricLabel: string;
};

export const SCENARIOS: Scenario[] = [
  {
    persona: "Accountant",
    badges: ["n8n Automation", "AI Agent"],
    title: "The monthly pile of receipts and invoices is entered by hand",
    problem:
      "As the client roster grows, hundreds of receipts and invoices have to be keyed into the accounting software by hand. Overtime becomes the norm, error rates climb, and tax season turns into a nightmare.",
    solution:
      "Documents arriving by WhatsApp or email are automatically classified with n8n + AI, posted to the right account, and reported per client. A human only steps in for the exceptions.",
    metric: "30+ hrs",
    metricLabel: "Saved per month — from eliminating manual data entry",
  },
  {
    persona: "E-commerce",
    badges: ["AI Agent"],
    title: "Customer-service messages eat up working hours",
    problem:
      "Questions about orders, returns, and shipping pile up across WhatsApp and chat. Replies lag, and sales slip away.",
    solution:
      "An AI agent answers 24/7, tied to your order and stock data, and escalates only the complex cases to a human.",
    metric: "70%",
    metricLabel: "Typical drop in customer-service cost",
  },
  {
    persona: "Restaurant",
    badges: ["AI Agent", "Website"],
    title: "Phone queues for orders during the rush",
    problem:
      "At peak hours the phone becomes a bottleneck; customers give up on the call and the order is lost.",
    solution:
      "WhatsApp ordering plus an online menu; orders flow straight to the kitchen display system.",
    metric: "+10–15",
    metricLabel: "Extra orders per evening in capacity",
  },
  {
    persona: "Clinic",
    badges: ["AI Agent"],
    title: "Appointment calls + no-show losses",
    problem:
      "Booking and reminders by phone strain the staff, and no-show rates stay high.",
    solution:
      "A WhatsApp bot takes appointments and sends automatic reminders 24 hours and 1 hour before.",
    metric: "40%",
    metricLabel: "Typical drop in no-show rate",
  },
  {
    persona: "Wholesaler",
    badges: ["AI Agent", "n8n Automation"],
    title: "Free-text orders coming in over WhatsApp",
    problem: "Free-text B2B orders over WhatsApp lead to manual-entry mistakes.",
    solution:
      "AI matches products, quantities, and pricing and creates a draft order for human approval only.",
    metric: "85%",
    metricLabel: "Typical drop in order-error rate",
  },
  {
    persona: "Real Estate",
    badges: ["n8n Automation", "Website"],
    title: "The same listing updated by hand across several channels",
    problem:
      "Listings across multiple platforms need manual updates; inconsistent pricing erodes trust.",
    solution:
      "A single panel auto-syncs every channel; a price change propagates instantly.",
    metric: "80%",
    metricLabel: "Typical drop in listing-update time",
  },
];

export const ABOUT = {
  lead: "My name is Uzay Gökçek.",
  accent: "Here's my story — and why you can trust me.",
  paragraphs: [
    "I started writing code at 14. By the time I reached university age I'd already been shipping projects for years — for me this isn't a profession, it's part of everyday life.",
    "2025 was my turning point: I moved into the world of AI agents and n8n automation. Because I saw these technologies solve in hours what companies had done with people for years. Big enterprises already use them — small and mid-sized businesses are only just starting. That's where the real gap is.",
    "A restaurant owner takes orders on WhatsApp but can't automate them. An accountant still keys in receipts. An agent posts the same listing to four places. This work can be handed to AI now — but someone has to turn to them and say, “here, I built it for you.” I'm trying to be that someone.",
  ],
};

export const PROCESS_HEADING = {
  lead: "Five clear steps.",
  accent: "No surprises, no scope creep.",
};

export type Step = { duration: string; title: string; description: string };

export const PROCESS: Step[] = [
  {
    duration: "30 min · free",
    title: "Discovery",
    description:
      "Over WhatsApp or a video call we talk through your business, your target customer, and the problem you want solved. No prep needed on your side — just tell me what you're dealing with.",
  },
  {
    duration: "within 24 hours",
    title: "Written Proposal",
    description:
      "What gets built, what it costs, when it ships — all in a written PDF. Nothing starts until you approve, and nothing surprises you later.",
  },
  {
    duration: "1–2 days / 1–2 weeks",
    title: "Development",
    description:
      "For a website / n8n / AI agent: Day 1 is template + content + design, Day 2 is integration + a live preview. For SaaS, mobile apps, and games I deliver a working MVP in 1–2 weeks; the timeline grows with scope. It's fast because I start from a ready template library, not from zero.",
  },
  {
    duration: "half a day",
    title: "Testing, Training & Handover",
    description:
      "We test together, make small fixes, and I train you on usage (recorded video + written docs). All code and accounts are transferred to you — no vendor lock-in.",
  },
  {
    duration: "30 days after delivery",
    title: "30 Days of Free Support",
    description:
      "All bug fixes and small improvements included. Flexible maintenance options are available afterward.",
  },
];

export const WHY_HEADING = {
  lead: "A technical partner who keeps their word and",
  accent: "keeps scope clear.",
};

export type Trust = { icon: string; title: string; body: string };

export const WHY: Trust[] = [
  {
    icon: "Tag",
    title: "Fixed Price, Fixed Scope",
    body:
      "A website is a flat $1,200 (everything included). For n8n automation and AI agents, setup runs $1,500–$3,000 (negotiable) plus a monthly maintenance plan — first month free, monthly maintenance from month two. Either way you get a written quote and no surprise invoices.",
  },
  {
    icon: "Zap",
    title: "Delivery in Days and Weeks",
    body:
      "How is that possible? I keep a library of ready templates and workflows for 15 industries — I don't start from scratch. Setup for a website, n8n automation, and AI agent takes 1–2 days; SaaS, mobile, and game MVPs take 1–2 weeks. Everything is negotiable and the timeline grows with scope.",
  },
  {
    icon: "MessageSquare",
    title: "One Point of Contact",
    body:
      "No agency account manager. I see your message directly and I answer it directly. Your decisions never slow down.",
  },
  {
    icon: "KeyRound",
    title: "The System Is Transferred to You",
    body:
      "Code, accounts, documentation, and passwords are all handed over. I don't create dependency — it keeps working even if someone else takes over.",
  },
  {
    icon: "ShieldCheck",
    title: "See It First, Pay Later",
    body:
      "No advance, no deposit. The product is ready, you see it live and approve, then I get paid. On top of that, the first 30 days of bug fixes and improvements are free — zero risk.",
  },
  {
    icon: "Puzzle",
    title: "Built for You, Not a Generic Template",
    body:
      "Not something layered on top of a ready-made theme — it's shaped around your workflow, your customer profile, and your decision logic.",
  },
];

export const FAQ_HEADING = "Frequently Asked Questions";

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How does payment work? Do you take an advance?",
    a: "No, I don't take an advance. I build the product first, you see it live and test it, and I only get paid after you confirm it meets your expectations. I don't push the risk onto you — which is exactly why surprises are off the table. A website is a one-time $1,200; automation and AI agents use a setup + monthly maintenance model (again, charged after setup).",
  },
  {
    q: "How much will it cost me? How do I know the prices?",
    a: "A website is a flat $1,200 — a one-time setup fee that includes the build, design, domain, and hosting. No other costs, delivered in 1–2 days. For n8n automation and AI agents, setup runs $1,500–$3,000 (negotiable, with a written quote after discovery) plus a monthly maintenance plan; the first month after delivery is free, and monthly maintenance begins from month two. The figure moves within the range based on your sector, usage intensity, and feature count — setup is still 1–2 days. For SaaS, mobile apps, and games, an MVP can ship in 1–2 weeks; pricing is negotiable and I provide a written quote based on scope.",
  },
  {
    q: "How long does delivery take?",
    a: "Setup for a website, n8n automation, and AI agent is usually done in 1–2 days — because I have a sector-specific template library, I don't start from scratch. For SaaS, mobile apps, and games I deliver a working MVP in 1–2 weeks; the more scope (extra features, multiple user roles, complex logic) the longer it takes — always negotiable, and the timeline is pinned down during discovery.",
  },
  {
    q: "I'm not technical — will there be things I don't understand?",
    a: "No. Throughout the process I move forward without jargon, using screenshots and real examples. Each week you get a summary in the form of “here's what I did this week, here's what we need to decide.”",
  },
  {
    q: "Is my customer data safe? Do you work in a GDPR-compliant way?",
    a: "Yes. On every project that involves customer data, encryption, access control, and logging come as standard. If you like, I'll also prepare your privacy notice and consent forms. Your data is kept on EU (or Türkiye) servers.",
  },
  {
    q: "Can you improve my existing site/system instead of rebuilding from scratch?",
    a: "Usually, yes. First I review the existing system: if the foundation is solid, we build on top of it (cheaper, faster). If the foundation is problematic, I explain with numbers why a rebuild makes more sense.",
  },
  {
    q: "What happens if you disappear after the project is done?",
    a: "All code, accounts, and documentation are transferred. Another developer can pick it up and continue easily — I don't create dependency. If you'd like, we can also set up a post-delivery maintenance package.",
  },
  {
    q: "What do we do if a bug shows up after delivery?",
    a: "The first 30 days of bug fixes and small improvements are included. After that, I offer a monthly maintenance package (hourly or flat-rate).",
  },
];

export const CONTACT_HEADING = {
  lead: "Tell me your problem, and",
  accent: "let's map the solution together.",
};

export const FORM = {
  services: [
    "n8n Automation",
    "AI Agent",
    "Website",
    "SaaS / Dashboard",
    "Mobile App",
    "Game",
    "Not sure yet",
  ],
  budgets: [
    "Under $1,500",
    "$1,500–$3,000",
    "$3,000–$6,000",
    "$6,000+",
    "Not sure yet",
  ],
};

export const FOOTER = {
  tagline: "AI and automation solutions for businesses. With a vibe-coder approach.",
  copyright: "© 2026 Uzay Gökçek. All rights reserved.",
  links: [
    { label: "GDPR Privacy Notice", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
  ],
  builtWith: "Built with Next.js",
};
