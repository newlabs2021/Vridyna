import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { IndustriesGrid } from "@/components/site/IndustryCard";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/lib/industries";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Vridyna" },
      {
        name: "description",
        content:
          "Growth marketing, technology, AI, creative and data solutions for hospitality, real estate, healthcare, e-commerce, retail, education, technology, manufacturing, professional services and the public sector.",
      },
      { property: "og:title", content: "Industries | Vridyna" },
      {
        property: "og:description",
        content:
          "Vridyna combines growth marketing, technology, AI, creative and data to help businesses across industries grow.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Industries served by Vridyna",
          itemListElement: INDUSTRIES.map((industry, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: industry.name,
            url: industry.route,
          })),
        }),
      },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">Industries</li>
            </ol>
          </nav>

          <p className="eyebrow">Industries</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl">
            Growth Solutions Built for Different Industries.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Vridyna combines growth marketing, technology, AI, creative and data to help businesses
            build stronger brands, reach customers and create sustainable growth.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Our capabilities are designed to adapt to the unique customer, commercial and digital
            challenges of different industries.
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
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <h2 className="sr-only">All industries</h2>
          <IndustriesGrid />
        </Reveal>
      </section>
    </div>
  );
}
