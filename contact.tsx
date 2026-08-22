import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { getIndustry } from "@/lib/industries";
import { ADDRESS_LINES, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    industry: typeof search["industry"] === "string" ? (search["industry"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact Vridyna | Chennai Growth & AI Company" },
      {
        name: "description",
        content:
          "Talk to Vridyna about growth marketing, websites, CRM, AI automation and analytics. Based in Royapettah, Chennai. Call +91 97915 35649.",
      },
      { property: "og:title", content: "Contact Vridyna " },
      {
        property: "og:description",
        content:
          "Tell us about your business, your challenge and what you want to achieve. Chennai-based growth, technology and AI company.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Vridyna",
          telephone: "+91 97915 35649",
          address: {
            "@type": "PostalAddress",
            streetAddress: "#18, Bhattad Towers, West Cott Road, Royapettah",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600014",
            addressCountry: "IN",
          },
          areaServed: "IN",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { industry } = Route.useSearch();
  const selected = industry ? getIndustry(industry) : undefined;
  return (
    <div className="pt-28">
      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Your Growth Engine."
          subtitle="Tell us about your business, your challenge and what you want to achieve."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.25fr]">
          <Reveal className="space-y-6">
            <div className="surface-card p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Phone
              </h3>
              <a
                href={PHONE_TEL}
                className="mt-3 block text-2xl font-bold text-foreground transition-colors hover:text-primary"
              >
                {PHONE_DISPLAY}
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={PHONE_TEL}>
                    <Phone className="size-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Office
              </h3>
              <address className="mt-3 text-base not-italic leading-relaxed text-muted-foreground">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">Not sure where to start?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Start with our services overview, or find the growth solutions built for your
                industry.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/industries">Explore Industries</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {selected ? (
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-secondary/50 px-4 py-2 text-sm text-primary">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                Enquiry for {selected.name}
              </p>
            ) : null}
            <ContactForm industrySlug={selected?.slug} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
