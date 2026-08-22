import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import heroImage from "@/assets/hero-abstract.jpg";
import { IndustriesGrid } from "@/components/site/IndustryCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, PHONE_TEL, SERVICE_CATEGORIES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({ 

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BYGZ44GG53"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BYGZ44GG53');
</script>
  
    
    meta: [
      { title: "Vridyna | Growth, Technology & AI" },
      {
        name: "description",
        content:
          "Vridyna helps hotels, restaurants and ambitious businesses grow through digital marketing, AI, technology, creative and data-driven solutions.",
      },
      { property: "og:title", content: "Vridyna | Growth, Technology & AI" },
      {
        property: "og:description",
        content:
          "Growth marketing, search & AI discovery, websites, e-commerce, CRM, AI automation, creative and analytics — built for hotels, restaurants and ambitious businesses.",
      },

      {
        name: "keywords",
        content:
          "digital marketing, AI solutions, web development, SEO services, business automation, technology solutions, Vridyna",
      },

      
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],F
  }),
  component: HomePage,
});

const CAPABILITIES = ["Growth", "Technology", "AI", "Creative", "Data"];

const GROWTH_SYSTEM = [
  "Visibility",
  "Discovery",
  "Engagement",
  "Lead / Booking",
  "Conversion",
  "Customer",
  "Retention",
  "Referral",
];

const REVENUE_FUNNEL = [
  "Discover",
  "Engage",
  "Enquire",
  "Qualify",
  "Book",
  "Buy",
  "Return",
  "Refer",
];

const ENABLEMENT = [
  "Lead Generation",
  "Prospect Research",
  "Lead Qualification",
  "Sales Funnels",
  "CRM",
  "Lead Scoring",
  "Sales Follow-up",
  "Proposal Systems",
  "Customer Reactivation",
  "Upselling",
  "Cross-selling",
  "Referral Systems",
  "Revenue Analytics",
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Business First",
    body: "We start with the business objective, not the marketing channel.",
  },
  {
    n: "02",
    title: "Customer First",
    body: "We build around how customers actually discover, evaluate and choose.",
  },
  {
    n: "03",
    title: "Measurement First",
    body: "We connect activity to measurable outcomes wherever possible.",
  },
  {
    n: "04",
    title: "Technology Enabled",
    body: "We combine marketing with technology, CRM, automation and AI.",
  },
  {
    n: "05",
    title: "Continuous Improvement",
    body: "Test. Measure. Learn. Improve. Scale.",
  },
];

const PROCESS = [
  { n: "01", title: "Discover", body: "Understand the business, customer and market." },
  { n: "02", title: "Diagnose", body: "Identify opportunities, gaps and growth constraints." },
  {
    n: "03",
    title: "Design",
    body: "Build the strategy, offer, digital experience and acquisition system.",
  },
  { n: "04", title: "Deploy", body: "Launch campaigns, technology and customer journeys." },
  {
    n: "05",
    title: "Measure",
    body: "Track traffic, leads, bookings, customers and revenue signals.",
  },
  { n: "06", title: "Optimize", body: "Continuously improve what works." },
];




function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 sm:pt-36">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Abstract gold data trajectory illustrating digital growth"
            width={1600}
            height={1200}
            className="size-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 sm:px-8 sm:pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Vridyna..</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Build Visibility.
              <br />
              Attract Customers.
              <br />
              <span className="text-gradient-gold">Grow.</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-muted-foreground sm:text-xl">
              Digital Growth, Technology &amp; AI for Modern Businesses.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Vridyna combines growth marketing, digital experiences, technology, AI
              and data to help businesses build stronger brands, reach more customers and create
              sustainable growth.
            </p>

            <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-secondary/50 px-4 py-2 text-xs font-medium text-primary sm:text-sm">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              Launching with a focus on Hotels &amp; Restaurants
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Talk to Us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={PHONE_TEL}>
                  <Phone className="size-4" />
                  +91 97915 35649
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={140} className="hidden lg:block">
            <div className="surface-card p-8">
              <p className="eyebrow">Growth System</p>
              <ul className="mt-6 space-y-4">
                {GROWTH_SYSTEM.slice(0, 5).map((step, index) => (
                  <li key={step} className="flex items-center gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-primary/40 text-xs font-semibold text-primary">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-foreground">{step}</span>
                    <span className="hairline flex-1" />
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Brand, discovery, marketing, technology, AI, data and customer experience — connected
                into one system.
              </p>
            </div>
          </Reveal>
        </div>

        {/* CAPABILITY STRIP */}
        <div className="border-y border-border bg-surface/50">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-5 sm:justify-between sm:px-8">
            {CAPABILITIES.map((capability, index) => (
              <div key={capability} className="flex items-center gap-6">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-primary sm:text-sm">
                  {capability}
                </span>
                {index < CAPABILITIES.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="hidden h-4 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent sm:block"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Industries"
          title="Built for Different Businesses."
          subtitle="Growth, technology and AI solutions adapted to the needs of different industries."
        />

        <Reveal className="mt-14">
          <IndustriesGrid compact />
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <Button asChild size="lg" variant="outline">
            <Link to="/industries">
              Explore All Industries
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>


      {/* SERVICES OVERVIEW */}
      <section id="services" className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything You Need to Grow."
            subtitle="From brand and customer acquisition to technology, AI and automation, Vridyna brings complementary capabilities together under one growth partner."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_CATEGORIES.map((category, index) => (
              <Reveal key={category.id} delay={(index % 4) * 90}>
                <Link
                  to="/services"
                  hash={category.id}
                  className="surface-card flex h-full flex-col p-6"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-primary">
                    {category.number}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-foreground">
                    {category.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    View capability
                    <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SALES & REVENUE ENABLEMENT */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Sales & Revenue Enablement"
              title="Marketing Should Lead to Business."
              subtitle="We don't believe marketing should stop at impressions, followers or clicks. The objective is to create qualified opportunities, customers and long-term revenue."
            />
            <Reveal delay={100}>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {ENABLEMENT.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <ol className="surface-card space-y-0 p-7 sm:p-9">
              {REVENUE_FUNNEL.map((step, index) => (
                <li key={step} className="relative flex items-center gap-4 py-3">
                  <span className="w-7 shrink-0 text-xs font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex-1 rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground"
                    style={{
                      marginRight: `${index * 6}px`,
                    }}
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* GROWTH SYSTEM */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="How We Think About Growth"
            title="Growth Is a System."
            subtitle="Vridyna connects brand, discovery, marketing, technology, AI, data and customer experience into one growth system — so each part reinforces the next instead of working in isolation."
            align="center"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GROWTH_SYSTEM.map((step, index) => (
              <Reveal key={step} delay={(index % 4) * 80}>
                <div className="surface-card h-full p-6">
                  <span className="text-xs font-semibold tracking-[0.2em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{step}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VRIDYNA */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="Why Vridyna" title="Principles We Build On." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle, index) => (
            <Reveal key={principle.n} delay={(index % 3) * 90}>
              <article className="surface-card h-full p-7">
                <span className="text-sm font-bold tracking-[0.2em] text-primary">
                  {principle.n}
                </span>
                <h3 className="mt-4 text-lg font-bold uppercase tracking-wide text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {principle.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading eyebrow="Process" title="How We Work." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((step, index) => (
              <Reveal key={step.n} delay={(index % 3) * 90}>
                <article className="surface-card h-full p-7">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-extrabold text-gradient-gold">{step.n}</span>
                    <h3 className="text-lg font-bold uppercase tracking-wide text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-12">
            <Button asChild size="lg">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="FAQ" title="Questions, Answered." align="center" />
        <Reveal delay={100} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((item, index) => (
              <AccordionItem key={item.q} value={`faq-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal className="surface-card flex flex-col items-start gap-6 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Let&apos;s Build Your Growth Engine.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Tell us about your business, your challenge and what you want to achieve.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Talk to Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={PHONE_TEL}>
                  <Phone className="size-4" />
                  Call Us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
