```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { ADDRESS_LINES } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vridyna | Building a Modern Growth Company" },
      {
        name: "description",
        content:
          "Vridyna brings growth marketing, technology, AI, creative and data together under one roof. Built in Chennai, starting with hotels and restaurants.",
      },

      // SEO Keywords
      {
        name: "keywords",
        content:
          "Vridyna, Vridyna Technologies, Vridyna Chennai, digital marketing company Chennai, AI company Chennai, technology company Chennai, SEO company Chennai, web development Chennai, 
          AI automation Chennai, growth marketing Chennai, hotel marketing, restaurant marketing, hospitality marketing, Digital Marketing Agency, Digital Marketing Company, AI Digital Marketing Agency, 
          Digital Growth Agency, AI Marketing Services, Digital Growth Solutions, AI & Digital Marketing, 
          Digital Marketing Services, Growth Marketing Agency, Digital Transformation Services, AI Automation Services, AI Solutions for Business, Business AI Automation, AI Marketing Automation,
          AI Customer Experience, AI Business Solutions, AI-Powered Marketing, AI Lead Generation, Business Process Automation, AEO Services, Answer Engine Optimization, GEO Services,
          Generative Engine Optimization, AI Search Optimization, AI Search Visibility, AI SEO Services, ChatGPT SEO, Google AI Overview Optimization, Perplexity SEO, AI Discovery Optimization,
          Search & AI Discovery, Hotel Digital Marketing, Hotel Digital Marketing Agency, Hotel SEO Services, Hotel Marketing Agency, Hotel Online Marketing, 
          Hotel Booking Marketing, Direct Hotel Booking Marketing, Hotel Social Media Marketing, Hotel Website Development, Hotel AI Solutions, Restaurant Digital Marketing,
          Restaurant Marketing Agency, Restaurant SEO Services, Restaurant Social Media Marketing, Restaurant Online Marketing, Hospitality Digital Marketing, Hospitality Marketing Agency, 
          Hospitality AI Solutions, Education Digital Marketing, Education Marketing Agency, Digital Marketing for Educational Institutions, Education SEO Services, Education Lead Generation, 
          College Digital Marketing, School Digital Marketing, Training Institute Digital Marketing, Education Social Media Marketing, Education Website Development, AI for Education Marketing, 
          Student Lead Generation, Education Admission Marketing, Education CRM Automation, Healthcare Digital Marketing, Healthcare Marketing Agency, Hospital Digital Marketing, 
          Hospital SEO Services, Healthcare SEO, Clinic Digital Marketing, Doctor Digital Marketing, Healthcare Lead Generation, Hospital Website Development, Healthcare AI Solutions, 
          Patient Lead Generation, Healthcare Social Media Marketing, Real Estate Digital Marketing, Real Estate SEO, Property Lead Generation, Real Estate Marketing Agency, E-commerce Digital Marketing,
          E-commerce SEO, D2C Marketing Agency, E-commerce Growth Marketing, SaaS Digital Marketing, SaaS SEO, Technology Marketing Agency, B2B SaaS Lead Generation.",
      },

      // SEO Author
      {
        name: "author",
        content: "Vridyna Technologies",
      },

      // Robots
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },

      // Open Graph
      { property: "og:title", content: "About — Vridyna" },
      {
        property: "og:description",
        content:
          "A modern growth company built in Chennai, designed for ambitious businesses, starting with hospitality.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://www.vridyna.com/about",
      },
      {
        property: "og:site_name",
        content: "Vridyna Technologies",
      },
      {
        property: "og:locale",
        content: "en_IN",
      },

      // Twitter / X
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "About Vridyna | Modern Growth Company",
      },
      {
        name: "twitter:description",
        content:
          "Vridyna brings growth marketing, technology, AI, creative and data together to help ambitious businesses grow.",
      },

      // Additional SEO
      {
        name: "theme-color",
        content: "#0B1220",
      },
    ],

    // Canonical URL
    links: [
      {
        rel: "canonical",
        href: "https://www.vridyna.com/about",
      },
    ],

    // Structured Data / Schema
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Vridyna",
          url: "https://www.vridyna.com/about",
          description:
            "Vridyna brings growth marketing, technology, AI, creative and data together under one roof. Built in Chennai, starting with hotels and restaurants.",
          isPartOf: {
            "@type": "WebSite",
            name: "Vridyna",
            url: "https://www.vridyna.com/",
          },
          about: {
            "@type": "Organization",
            name: "Vridyna",
            url: "https://www.vridyna.com/",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  { title: "Growth", body: "Brand, demand and customer acquisition." },
  { title: "Technology", body: "Websites, commerce, CRM and integrations." },
  { title: "AI", body: "Automation, agents and AI-assisted marketing." },
  { title: "Creative", body: "Identity, photography, video and design." },
  { title: "Data", body: "Analytics, dashboards and decision support." },
];

function AboutPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="About"
          title="Building a Modern Growth Company."
          subtitle="Vridyna is being built to bring growth marketing, technology, AI, creative and data together under one roof."
        />

        <Reveal delay={80} className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            Starting with Hotels and Restaurants, Vridyna is focused on helping businesses become
            more discoverable, more compelling and more connected to their customers.
          </p>
          <p className="text-lg font-semibold text-foreground">
            Built in Chennai. Designed for ambitious businesses.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={(index % 5) * 80}>
              <article className="surface-card h-full p-6">
                <h2 className="text-base font-bold uppercase tracking-[0.14em] text-primary">
                  {pillar.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-14">
          <article className="surface-card p-8 sm:p-12">
            <p className="eyebrow">The People Behind Vridyna</p>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Built With an Entrepreneurial Mindset
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Vridyna is being built from the ground up with a long-term ambition: to become a
              technology-enabled growth partner for businesses.
            </p>
            <div className="mt-8 rounded-xl border border-dashed border-border p-6">
              <p className="text-sm text-muted-foreground">
                A founder profile will be published here.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <div className="surface-card flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <address className="text-sm not-italic leading-relaxed text-muted-foreground">
              <span className="mb-2 block text-base font-semibold text-foreground">
                Vridyna
              </span>
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <Button asChild size="lg">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
```
