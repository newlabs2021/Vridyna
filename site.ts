export const PHONE_DISPLAY = "+91 97915 35649";
export const PHONE_TEL = "tel:+919791535649";
export const WHATSAPP_URL = "https://wa.me/919791535649";
export const ADDRESS_LINES = [
  "#18, Bhattad Towers,",
  "West Cott Road,",
  "Royapettah,",
  "Chennai, Tamil Nadu – 600014, India",
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export type ServiceCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
  items: string[];
  groups?: { label: string; items: string[] }[];
  highlight?: boolean;
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "growth-marketing",
    number: "01",
    title: "Growth Marketing",
    description:
      "Build awareness, attract the right customers and turn digital visibility into measurable business opportunities.",
    items: [
      "Brand Marketing",
      "Digital Marketing",
      "SEO",
      "AEO",
      "GEO",
      "Local SEO",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "Content Marketing",
      "YouTube Marketing",
      "Influencer Marketing",
      "Email Marketing",
      "WhatsApp Marketing",
      "Reputation Marketing",
      "Loyalty & Retention",
      "Referral Marketing",
      "Affiliate Marketing",
      "Event Marketing",
      "Partnership Marketing",
      "Corporate Marketing",
    ],
  },
  {
    id: "search-ai-discovery",
    number: "02",
    title: "Search & AI Discovery",
    highlight: true,
    description:
      "Help your business become discoverable across traditional search, answer engines and emerging AI-powered discovery experiences.",
    items: [
      "SEO — Search Engine Optimization",
      "AEO — Answer Engine Optimization",
      "GEO — Generative Engine Optimization",
      "Local SEO",
      "Google Maps Optimization",
      "Structured Data / Schema",
      "Entity & Knowledge Optimization",
      "Search Content Strategy",
      "AI Search Visibility",
      "Reputation & Authority Signals",
    ],
  },
  {
    id: "websites",
    number: "03",
    title: "Websites & Digital Experience",
    description:
      "Turn your digital presence into a high-performing customer acquisition and conversion experience.",
    items: [
      "Corporate Websites",
      "Hotel Websites",
      "Restaurant Websites",
      "Landing Pages",
      "Booking Websites",
      "Reservation Systems",
      "Website Redesign",
      "Conversion Rate Optimization",
      "Lead Forms",
      "Booking Funnels",
      "CTA Optimization",
      "A/B Testing",
      "Website Maintenance",
    ],
  },
  {
    id: "ecommerce",
    number: "04",
    title: "E-commerce & Online Commerce",
    description:
      "Sell, book and take orders online with commerce systems built around how your customers actually buy.",
    items: [
      "E-commerce Strategy",
      "E-commerce Website Development",
      "Shopify",
      "WooCommerce",
      "Custom E-commerce",
      "Product Catalogues",
      "Payment Gateway Integration",
      "Order Management",
      "Subscription Commerce",
      "Marketplace Integration",
      "E-commerce SEO",
      "E-commerce Advertising",
      "Retargeting",
      "Abandoned Cart Recovery",
    ],
    groups: [
      {
        label: "Hospitality examples",
        items: [
          "Hotel Direct Booking",
          "Restaurant Online Ordering",
          "Table Reservation",
          "Experience Booking",
          "Event Booking",
        ],
      },
    ],
  },
  {
    id: "technology-crm",
    number: "05",
    title: "Technology & CRM",
    description:
      "Connect your customer, sales and operational systems into one smarter digital ecosystem.",
    items: [
      "CRM Setup",
      "CRM Customization",
      "Lead Management",
      "Sales Pipeline",
      "Customer Database",
      "Customer Segmentation",
      "CRM Automation",
      "Sales Dashboards",
      "Customer Portals",
      "Booking Systems",
      "Reservation Systems",
      "Custom Web Applications",
      "Mobile Applications",
      "API Integrations",
      "Payment Integrations",
      "Business System Integration",
    ],
  },
  {
    id: "ai-automation",
    number: "06",
    title: "AI & Automation",
    highlight: true,
    description:
      "Use AI and automation to reduce repetitive work, respond faster and create scalable customer experiences.",
    items: [
      "AI Marketing",
      "AI Content Systems",
      "AI Customer Research",
      "AI SEO",
      "AI Campaign Analysis",
      "AI Personalization",
      "AI Lead Scoring",
      "AI Marketing Analytics",
      "AI Agents",
      "Lead Qualification Agents",
      "Customer Support Agents",
      "Booking Enquiry Agents",
      "Sales Follow-up Agents",
      "WhatsApp AI Agents",
      "Review Response Agents",
      "Marketing Reporting Agents",
      "Workflow Automation",
      "CRM Automation",
      "Reporting Automation",
    ],
  },
  {
    id: "creative-media",
    number: "07",
    title: "Creative & Media",
    description:
      "Create a brand people remember and visual experiences people want to engage with.",
    items: [
      "Logo Design",
      "Brand Identity",
      "Brand Guidelines",
      "Brand Story",
      "Brochures",
      "Flyers",
      "Posters",
      "Presentations",
      "Packaging",
      "Menu Design",
      "Digital Creatives",
      "Hotel Photography",
      "Food Photography",
      "Product Photography",
      "Event Photography",
      "Corporate Photography",
      "Reels",
      "Promotional Videos",
      "Hotel Videos",
      "Restaurant Videos",
      "Corporate Videos",
      "YouTube Videos",
      "Event Videos",
      "Drone Photography / Video",
    ],
  },
  {
    id: "data-analytics",
    number: "08",
    title: "Data, Analytics & Revenue",
    description:
      "Turn customer and marketing data into decisions, insights and measurable growth.",
    items: [
      "Google Analytics",
      "Marketing Analytics",
      "Conversion Analytics",
      "Funnel Analytics",
      "Campaign Analytics",
      "Marketing Dashboards",
      "Sales Dashboards",
      "Revenue Dashboards",
      "Customer Analytics",
      "Customer Segmentation",
      "Customer Lifetime Value",
      "Churn Analysis",
      "Cohort Analysis",
      "Business Intelligence",
    ],
    groups: [
      {
        label: "Hotel analytics",
        items: [
          "Occupancy",
          "Direct vs OTA performance",
          "Booking source",
          "Revenue per customer",
        ],
      },
      {
        label: "Restaurant analytics",
        items: [
          "Average order value",
          "Customer acquisition cost",
          "Repeat customer rate",
          "Campaign-to-revenue analysis",
        ],
      },
    ],
  },
];

export const FAQS = [
  {
    q: "What does Vridyna Technologies do?",
    a: "Vridyna Technologies is a growth, technology and AI company. We combine growth marketing, search and AI discovery, websites and e-commerce, CRM and technology, AI automation, creative production and analytics to help businesses attract and retain customers.",
  },
  {
    q: "Does Vridyna work with hotels?",
    a: "Yes. Hotels are one of our two launch focus areas. We work on direct bookings, search and Google Maps visibility, digital advertising, website conversion, reputation, CRM and guest retention.",
  },
  {
    q: "Does Vridyna work with restaurants?",
    a: "Yes. We support restaurants with local discovery, Google Maps optimisation, social media, customer acquisition, reservations, reviews and reputation, WhatsApp engagement and loyalty programmes.",
  },
  {
    q: "What digital marketing services does Vridyna provide?",
    a: "SEO, AEO and GEO, local SEO, Google Ads, Meta Ads, social media, content, YouTube, influencer, email and WhatsApp marketing, reputation marketing, and loyalty, referral and partnership programmes.",
  },
  {
    q: "Does Vridyna build websites?",
    a: "Yes. We build corporate, hotel and restaurant websites, landing pages, booking and reservation experiences, and e-commerce stores, with conversion optimisation and ongoing maintenance.",
  },
  {
    q: "Does Vridyna provide CRM solutions?",
    a: "Yes. We set up and customise CRM systems, including lead management, sales pipelines, customer segmentation, dashboards, automation and integration with booking and payment systems.",
  },
  {
    q: "Does Vridyna provide AI automation?",
    a: "Yes. We build AI-assisted marketing systems and automation, including lead qualification, customer support, booking enquiry, sales follow-up, WhatsApp and review-response agents, plus workflow and reporting automation.",
  },
  {
    q: "Where is Vridyna Technologies located?",
    a: "Vridyna Technologies is based at #18, Bhattad Towers, West Cott Road, Royapettah, Chennai, Tamil Nadu – 600014, India.",
  },
];
