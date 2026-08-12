import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICE_CATEGORIES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Growth, Search, Websites, CRM & AI — Vridyna Technologies" },
      {
        name: "description",
        content:
          "Growth marketing, SEO/AEO/GEO, websites and e-commerce, CRM and technology, AI automation, creative and media, and analytics — the full Vridyna capability set.",
      },
      { property: "og:title", content: "Services — Vridyna Technologies" },
      {
        property: "og:description",
        content:
          "Eight connected capabilities: growth marketing, search & AI discovery, websites, e-commerce, technology & CRM, AI & automation, creative & media, data & analytics.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="Services"
          title="Everything You Need to Grow."
          subtitle="From brand and customer acquisition to technology, AI and automation, Vridyna brings complementary capabilities together under one growth partner."
        />

        <Reveal delay={80}>
          <nav aria-label="Service categories" className="mt-10 flex flex-wrap gap-2.5">
            {SERVICE_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {category.number} · {category.title}
              </a>
            ))}
          </nav>
        </Reveal>

        <div className="mt-14 space-y-6">
          {SERVICE_CATEGORIES.map((category, index) => (
            <Reveal key={category.id} delay={(index % 3) * 70}>
              <article
                id={category.id}
                className="surface-card scroll-mt-28 p-7 sm:p-9"
                data-highlight={category.highlight ? "true" : undefined}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm font-bold tracking-[0.2em] text-primary">
                    {category.number}
                  </span>
                  {category.highlight ? (
                    <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary">
                      Strategic capability
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                  {category.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {category.description}
                </p>

                <Accordion type="single" collapsible className="mt-6">
                  <AccordionItem value="items" className="border-border">
                    <AccordionTrigger className="text-sm font-semibold text-foreground hover:text-primary">
                      What&apos;s included ({category.items.length})
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-3">
                        {category.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {category.groups?.map((group) => (
                        <div key={group.label} className="mt-6">
                          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            {group.label}
                          </h3>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-14">
          <div className="surface-card flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <p className="max-w-xl text-lg font-semibold text-foreground">
              Not sure which capabilities your business needs first?
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Discuss Your Business
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
