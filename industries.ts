import {
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Factory,
  Briefcase,
  ShoppingBag,
  ShoppingCart,
  Cpu,
  type LucideIcon,
} from "lucide-react";

export type ServiceGroup = { label: string; items: string[] };
export type BusinessTypeGroup = { label: string; items: string[] };

export type Industry = {
  name: string;
  shortName: string;
  slug: string;
  route: string;
  icon: LucideIcon;
  badge?: string;
  cardDescription: string;
  description: string;
  headline: string;
  subcategories?: string[];
  businessTypes?: BusinessTypeGroup[];
  serviceGroups: ServiceGroup[];
  segments?: { id: string; label: string; intro: string; groups: ServiceGroup[] }[];
  journey: string[];
  faqs?: { q: string; a: string }[];
};

export const INDUSTRIES: Industry[] = [
  {
    name: "Hospitality",
    shortName: "Hospitality",
    slug: "hospitality",
    route: "/industries/hospitality",
    icon: Building2,
    badge: "First Vertical",
    cardDescription: "Hotels & Restaurants",
    description:
      "Helping Hotels and Restaurants build visibility, attract customers and strengthen digital growth.",
    headline: "Digital Growth Solutions for Hospitality Businesses",
    subcategories: ["Hotels", "Restaurants"],
    serviceGroups: [
      {
        label: "Growth Marketing",
        items: [
          "SEO",
          "AEO",
          "GEO",
          "Local SEO",
          "Google Maps Optimization",
          "Google Search Ads",
          "Meta Ads",
          "Social Media Marketing",
          "Content Marketing",
          "Influencer Marketing",
          "Direct Booking Marketing",
        ],
      },
      {
        label: "Digital Experience",
        items: [
          "Website Development",
          "Booking Websites",
          "Online Ordering",
          "Booking Funnel Optimization",
          "Reservation Campaigns",
        ],
      },
      {
        label: "Technology & AI",
        items: [
          "CRM",
          "WhatsApp Marketing",
          "Email Marketing",
          "AI Marketing",
          "AI Automation",
          "Customer Reactivation",
        ],
      },
      {
        label: "Creative & Media",
        items: [
          "Hotel & Restaurant Branding",
          "Brand Identity",
          "Logo Design",
          "Photography",
          "Food Photography",
          "Video & Reels",
        ],
      },
      {
        label: "Reputation & Data",
        items: [
          "Reputation Management",
          "Review Management",
          "Loyalty & Retention",
          "Analytics",
          "Revenue Intelligence",
        ],
      },
    ],
    segments: [
      {
        id: "hotels",
        label: "Hotels",
        intro:
          "Make your hotel easier to find, easier to trust and easier to book directly.",
        groups: [
          {
            label: "Brand & Creative",
            items: [
              "Hotel Branding",
              "Brand Positioning",
              "Brand Identity",
              "Brand Story",
              "Photography",
              "Video",
            ],
          },
          {
            label: "Search & Advertising",
            items: [
              "SEO",
              "AEO",
              "GEO",
              "Local SEO",
              "Google Maps Optimization",
              "Google Search Ads",
              "Meta Ads",
              "Social Media Marketing",
              "Content Marketing",
              "Influencer Marketing",
            ],
          },
          {
            label: "Website & Direct Bookings",
            items: [
              "Website Development",
              "Booking Websites",
              "Booking Funnel Optimization",
              "Direct Booking Marketing",
            ],
          },
          {
            label: "Technology, CRM & AI",
            items: [
              "CRM",
              "WhatsApp Marketing",
              "Email Marketing",
              "AI Marketing",
              "AI Automation",
              "Customer Reactivation",
            ],
          },
          {
            label: "Reputation, Demand & Data",
            items: [
              "Reputation Management",
              "Review Management",
              "Corporate Marketing",
              "Wedding & Event Marketing",
              "Loyalty & Retention",
              "Analytics",
              "Revenue Intelligence",
            ],
          },
        ],
      },
      {
        id: "restaurants",
        label: "Restaurants",
        intro:
          "Build local discovery, fill tables and turn first-time diners into regulars.",
        groups: [
          {
            label: "Brand & Creative",
            items: [
              "Restaurant Branding",
              "Brand Identity",
              "Logo Design",
              "Food Photography",
              "Food Video",
              "Reels",
            ],
          },
          {
            label: "Search & Advertising",
            items: [
              "SEO",
              "AEO",
              "GEO",
              "Local SEO",
              "Google Maps Optimization",
              "Google Ads",
              "Meta Ads",
              "Social Media Marketing",
              "Content Marketing",
              "Influencer Marketing",
            ],
          },
          {
            label: "Website & Orders",
            items: [
              "Website Development",
              "Online Ordering",
              "Reservation Campaigns",
            ],
          },
          {
            label: "Technology, CRM & AI",
            items: [
              "CRM",
              "WhatsApp Marketing",
              "AI Marketing",
              "AI Automation",
              "Customer Reactivation",
            ],
          },
          {
            label: "Reputation, Loyalty & Data",
            items: [
              "Reputation Management",
              "Review Management",
              "Loyalty Marketing",
              "Event Marketing",
              "Analytics",
            ],
          },
        ],
      },
    ],
    journey: [
      "Visibility",
      "Discovery",
      "Enquiry",
      "Booking / Reservation",
      "Guest Experience",
      "Review",
      "Retention",
      "Referral",
    ],
    faqs: [
      {
        q: "Does Vridyna work with hotels and restaurants?",
        a: "Yes. Hospitality is Vridyna's first vertical. We support hotels and restaurants with branding, search and AI discovery, advertising, websites and booking journeys, CRM, automation, reputation and analytics.",
      },
      {
        q: "Can Vridyna help increase direct bookings?",
        a: "We build the systems that support direct bookings — search visibility, Google Maps presence, advertising, booking websites, funnel optimisation, CRM and retention. We do not guarantee specific booking volumes.",
      },
    ],
  },
  {
    name: "Real Estate",
    shortName: "Real Estate",
    slug: "real-estate",
    route: "/industries/real-estate",
    icon: Home,
    cardDescription: "Developers, projects & property businesses",
    description:
      "Helping property businesses generate qualified opportunities, improve digital visibility and build stronger lead-to-sales systems.",
    headline: "Digital Growth Solutions for Real Estate Businesses",
    serviceGroups: [
      {
        label: "Growth Marketing",
        items: [
          "SEO",
          "AEO",
          "GEO",
          "Local SEO",
          "Google Maps Optimization",
          "Google Ads",
          "Meta Ads",
          "Performance Marketing",
          "Remarketing",
          "Content Marketing",
          "Social Media Marketing",
        ],
      },
      {
        label: "Digital Experience",
        items: ["Property Websites", "Project Websites", "Landing Pages", "Virtual Tours"],
      },
      {
        label: "Technology & AI",
        items: [
          "CRM",
          "Lead Generation",
          "Lead Qualification",
          "Lead Follow-up Automation",
          "WhatsApp Marketing",
          "AI Sales Agents",
        ],
      },
      {
        label: "Creative & Media",
        items: [
          "Real Estate Branding",
          "Brand Identity",
          "Property Photography",
          "Property Video",
        ],
      },
      { label: "Data", items: ["Analytics", "Revenue Analytics"] },
    ],
    journey: [
      "Visibility",
      "Enquiries",
      "Lead Qualification",
      "Site Visits",
      "Sales",
      "Follow-up",
      "Referral",
    ],
  },
  {
    name: "Healthcare",
    shortName: "Healthcare",
    slug: "healthcare",
    route: "/industries/healthcare",
    icon: HeartPulse,
    cardDescription: "Clinics, practices & healthcare businesses",
    description:
      "Helping healthcare businesses improve digital visibility, discovery, reputation and customer engagement.",
    headline: "Digital Growth Solutions for Healthcare Businesses",
    serviceGroups: [
      {
        label: "Growth Marketing",
        items: [
          "SEO",
          "AEO",
          "GEO",
          "Local SEO",
          "Google Maps Optimization",
          "Google Ads",
          "Meta Ads",
          "Social Media Marketing",
          "Content Marketing",
          "Digital Campaigns",
        ],
      },
      {
        label: "Digital Experience",
        items: ["Website Development", "Appointment Systems", "Lead Generation"],
      },
      {
        label: "Technology & AI",
        items: [
          "CRM",
          "WhatsApp",
          "Customer Communication",
          "Email Marketing",
          "AI Chat Assistants",
          "AI Automation",
        ],
      },
      { label: "Brand & Reputation", items: ["Healthcare Branding", "Reputation Management", "Review Management"] },
      { label: "Data", items: ["Analytics"] },
    ],
    journey: [
      "Visibility",
      "Discovery",
      "Enquiry",
      "Appointment",
      "Communication",
      "Reputation",
      "Retention",
    ],
    faqs: [
      {
        q: "Does Vridyna make medical claims in healthcare marketing?",
        a: "No. We work on digital visibility, discovery, communication, reputation and enquiry systems. We do not make medical claims or promise patient outcomes.",
      },
    ],
  },
  {
    name: "E-commerce & D2C",
    shortName: "E-commerce",
    slug: "ecommerce",
    route: "/industries/ecommerce",
    icon: ShoppingCart,
    cardDescription: "Online stores & consumer brands",
    description:
      "Helping consumer brands build digital commerce experiences, acquire customers and improve conversion and retention.",
    headline: "Digital Growth Solutions for E-commerce & D2C Brands",
    serviceGroups: [
      {
        label: "Commerce Platform",
        items: [
          "E-commerce Strategy",
          "E-commerce Website",
          "Shopify",
          "WooCommerce",
          "Custom E-commerce",
          "Product Catalogue",
          "Payment Integration",
          "Order Management",
        ],
      },
      {
        label: "Growth Marketing",
        items: [
          "SEO",
          "AEO",
          "GEO",
          "Google Ads",
          "Meta Ads",
          "Performance Marketing",
          "Retargeting",
          "Influencer Marketing",
        ],
      },
      {
        label: "Conversion & Experience",
        items: ["Conversion Rate Optimization", "Landing Pages", "Abandoned Cart Recovery"],
      },
      {
        label: "Technology & AI",
        items: ["CRM", "Email Marketing", "WhatsApp Marketing", "Loyalty", "AI Personalization"],
      },
      { label: "Creative & Data", items: ["Product Photography", "Product Video", "Analytics"] },
    ],
    journey: [
      "Traffic",
      "Product Discovery",
      "Add to Cart",
      "Checkout",
      "Delivery",
      "Repeat Purchase",
      "Loyalty",
    ],
  },
  {
    name: "Retail & Local Businesses",
    shortName: "Retail",
    slug: "retail",
    route: "/industries/retail",
    icon: ShoppingBag,
    cardDescription: "Shops, showrooms, automotive & local services",
    description:
      "Helping shops, showrooms and local businesses become easier to discover, easier to choose and easier to revisit.",
    headline: "Digital Growth Solutions for Retail & Local Businesses",
    subcategories: ["Retail", "Automotive & Mobility", "Local Businesses"],
    businessTypes: [
      {
        label: "Retail",
        items: [
          "Retail Shops",
          "Showrooms",
          "Supermarkets",
          "Specialty Stores",
          "Fashion Stores",
          "Electronics Stores",
          "Furniture Stores",
          "Jewellery Stores",
          "Beauty Stores",
        ],
      },
      {
        label: "Automotive & Mobility",
        items: [
          "Car Dealerships",
          "Used-Car Dealers",
          "Auto Showrooms",
          "Automobile Service Centres",
          "Repair Garages",
          "Tyre Shops",
          "Car Accessories",
          "Car Detailing",
          "EV Dealerships",
          "EV Service Businesses",
        ],
      },
    ],
    serviceGroups: [
      {
        label: "Local Discovery",
        items: [
          "Google Business Profile",
          "Google Maps Optimization",
          "Local SEO",
          "SEO",
          "AEO",
          "GEO",
        ],
      },
      {
        label: "Growth Marketing",
        items: [
          "Google Ads",
          "Meta Ads",
          "Social Media Marketing",
          "WhatsApp Marketing",
          "Influencer Marketing",
        ],
      },
      { label: "Digital Experience", items: ["Website Development", "E-commerce"] },
      {
        label: "Technology & AI",
        items: [
          "CRM",
          "Loyalty Programs",
          "Customer Reactivation",
          "AI Marketing",
          "AI Automation",
        ],
      },
      {
        label: "Creative & Data",
        items: [
          "Retail Branding",
          "Logo Design",
          "Brand Identity",
          "Brand Guidelines",
          "Photography",
          "Video",
          "Reputation Management",
          "Review Management",
          "Analytics",
        ],
      },
    ],
    journey: [
      "Local Search",
      "Maps & Profile",
      "Store Visit / Enquiry",
      "Purchase",
      "Review",
      "Reactivation",
      "Loyalty",
    ],
  },
  {
    name: "Education & Training",
    shortName: "Education",
    slug: "education",
    route: "/industries/education",
    icon: GraduationCap,
    cardDescription: "Institutions, academies & training providers",
    description:
      "Helping education and training businesses attract prospective students and build stronger enquiry-to-enrolment journeys.",
    headline: "Digital Growth Solutions for Education & Training",
    serviceGroups: [
      {
        label: "Growth Marketing",
        items: [
          "SEO",
          "AEO",
          "GEO",
          "Google Ads",
          "Meta Ads",
          "Social Media Marketing",
          "Content Marketing",
          "Remarketing",
        ],
      },
      { label: "Digital Experience", items: ["Website Development", "Landing Pages"] },
      {
        label: "Enquiry & Admissions",
        items: [
          "Lead Generation",
          "Lead Qualification",
          "Counselling Funnels",
          "Enquiry Management",
        ],
      },
      {
        label: "Technology & AI",
        items: [
          "CRM",
          "WhatsApp Marketing",
          "Email Marketing",
          "AI Lead Qualification",
          "Automation",
        ],
      },
      { label: "Creative & Data", items: ["Education Branding", "Analytics"] },
    ],
    journey: [
      "Awareness",
      "Enquiry",
      "Counselling",
      "Application",
      "Enrolment",
      "Engagement",
      "Referral",
    ],
  },
  {
    name: "Technology & SaaS",
    shortName: "Technology",
    slug: "technology",
    route: "/industries/technology",
    icon: Cpu,
    cardDescription: "Software, product & SaaS companies",
    description:
      "Helping technology companies build demand, communicate value and create scalable customer acquisition systems.",
    headline: "Digital Growth Solutions for Technology & SaaS Companies",
    serviceGroups: [
      {
        label: "Demand Generation",
        items: [
          "SEO",
          "AEO",
          "GEO",
          "Content Marketing",
          "B2B Lead Generation",
          "Demand Generation",
          "LinkedIn Marketing",
          "Search Marketing",
          "Performance Marketing",
          "Account-Based Marketing",
        ],
      },
      {
        label: "Digital Experience",
        items: [
          "Website Development",
          "Product Websites",
          "Landing Pages",
          "Conversion Optimization",
        ],
      },
      { label: "Technology & AI", items: ["CRM", "Marketing Automation", "AI Marketing", "AI Agents"] },
      { label: "Brand & Product", items: ["Brand Strategy", "Product Marketing"] },
      { label: "Data", items: ["Analytics"] },
    ],
    journey: [
      "Awareness",
      "Content & Search",
      "Demo / Trial",
      "Qualification",
      "Sales",
      "Onboarding",
      "Expansion",
    ],
  },
  {
    name: "Manufacturing & Industrial",
    shortName: "Manufacturing",
    slug: "manufacturing",
    route: "/industries/manufacturing",
    icon: Factory,
    cardDescription: "Manufacturers, suppliers & industrial businesses",
    description:
      "Helping industrial businesses strengthen digital presence, generate B2B opportunities and build modern customer acquisition systems.",
    headline: "Digital Growth Solutions for Manufacturing & Industrial Businesses",
    serviceGroups: [
      {
        label: "B2B Growth",
        items: [
          "SEO",
          "AEO",
          "GEO",
          "Google Ads",
          "LinkedIn Marketing",
          "B2B Lead Generation",
          "Export Lead Generation",
          "Account-Based Marketing",
          "Content Marketing",
        ],
      },
      { label: "Digital Experience", items: ["Corporate Website", "Product Website"] },
      {
        label: "Technology & AI",
        items: ["CRM", "Lead Management", "AI Prospecting", "Marketing Automation", "Email Marketing"],
      },
      { label: "Creative", items: ["Industrial Branding", "Product Photography", "Product Video"] },
      { label: "Data", items: ["Analytics"] },
    ],
    journey: [
      "Visibility",
      "Enquiry",
      "Qualification",
      "Quotation",
      "Order",
      "Account Growth",
      "Repeat Business",
    ],
  },
  {
    name: "Professional Services",
    shortName: "Professional Services",
    slug: "professional-services",
    route: "/industries/professional-services",
    icon: Briefcase,
    cardDescription: "Legal, accounting, consulting & advisory firms",
    description:
      "Helping professional firms build authority, improve digital discoverability and generate qualified business opportunities.",
    headline: "Digital Growth Solutions for Professional Services Firms",
    subcategories: [
      "Legal",
      "Accounting",
      "Consulting",
      "Architecture",
      "Engineering",
      "Recruitment",
      "Business Advisory",
    ],
    serviceGroups: [
      {
        label: "Authority & Discovery",
        items: [
          "SEO",
          "AEO",
          "GEO",
          "Local SEO",
          "Google Maps Optimization",
          "Content Marketing",
          "Thought Leadership",
        ],
      },
      { label: "Digital Experience", items: ["Website Development", "Brand Strategy"] },
      {
        label: "Business Development",
        items: ["Lead Generation", "Google Ads", "LinkedIn Marketing"],
      },
      {
        label: "Technology & AI",
        items: ["CRM", "WhatsApp Marketing", "Email Marketing", "AI Automation"],
      },
      { label: "Reputation & Data", items: ["Reputation Management", "Analytics"] },
    ],
    journey: [
      "Authority",
      "Discovery",
      "Enquiry",
      "Consultation",
      "Engagement",
      "Retention",
      "Referral",
    ],
  },
  {
    name: "Government & Public Sector",
    shortName: "Government",
    slug: "government",
    route: "/industries/government",
    icon: Landmark,
    cardDescription: "Public-sector digital, communication & data needs",
    description:
      "Applying technology, AI, digital experiences, communication and data capabilities to public-sector requirements.",
    headline: "Technology, AI & Digital Capabilities for the Public Sector",
    serviceGroups: [
      {
        label: "Digital Platforms",
        items: [
          "Government Websites",
          "Digital Platforms",
          "Citizen Portals",
          "Digital Applications",
        ],
      },
      {
        label: "Communication",
        items: [
          "Citizen Communication",
          "Awareness Campaigns",
          "Programme Communication",
          "Public Engagement",
          "Content & Communication",
        ],
      },
      {
        label: "Technology & AI",
        items: ["AI Assistants", "CRM", "Workflow Automation", "Digital Transformation"],
      },
      { label: "Data", items: ["Data Dashboards", "Analytics"] },
    ],
    journey: [
      "Requirement",
      "Digital Platform",
      "Citizen Access",
      "Communication",
      "Service Delivery",
      "Data & Reporting",
      "Improvement",
    ],
  },
];

export const INDUSTRY_SLUGS = INDUSTRIES.map((industry) => industry.slug);

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((industry) => industry.slug === slug);
}
