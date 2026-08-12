import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { IndustryCta } from "@/components/site/IndustryCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getIndustry, INDUSTRIES, type Industry, type ServiceGroup } from "@/lib/industries";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) throw notFound();
    return { slug: industry.slug };
  },
  head: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) {
      return { meta: [{ title: "Industry not found | Vridyna Technologies" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${industry.name} Growth & Digital Solutions | Vridyna Technologies`;
    return {
      meta: [
        { title },
        { name: "description", content: industry.description },
        { property: "og:title", content: title },
        { property: "og:description", content: industry.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: industry.route },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: industry.route }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Industries", item: "/industries" },
              { "@type": "ListItem", position: 3, name: industry.name, item: industry.route },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: `${industry.name} growth, technology and AI solutions`,
            provider: { "@type": "Organization", name: "Vridyna Technologies" },
            description: industry.description,
            areaServed: "IN",
          }),
        },
        ...(industry.faqs
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: industry.faqs.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: { "@type": "Answer", text: item.a },
                  })),
                }),
              },
            ]
          : []),
      ],
    };
  },
  component: IndustryDetailPage,
  errorComponent: IndustryError,
  notFoundComponent: IndustryNotFound,
});

function ServiceGroupCard({ group }: { group: ServiceGroup }) {
  return (
    <article className="surface-card flex h-full min-w-0 flex-col p-6">
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {group.label}
      </h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border bg-surface-elevated/60 px-3 py-1.5 text-xs text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function IndustryDetailPage() {
  const { slug } = Route.useLoaderData();
  const industry = getIndustry(slug) as Industry;
  const Icon = industry.icon;

  return (
    <div className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/industries" className="transition-colors hover:text-primary">
                  Industries
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">{industry.name}</li>
            </ol>
          </nav>

          <div className="flex items-center gap-3">
            <Icon className="size-7 text-primary" aria-hidden="true" />
            <p className="eyebrow">{industry.name}</p>
            {industry.badge ? (
              <span className="rounded-full border border-primary/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">
                {industry.badge}
              </span>
            ) : null}
          </div>

          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.1] text-foreground sm:text-5xl">
            {industry.headline}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {industry.description}
          </p>

          {industry.subcategories ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {industry.subcategories.map((sub) => (
                <li
                  key={sub}
                  className="rounded-full border border-border bg-surface-elevated/60 px-3.5 py-1.5 text-sm text-foreground"
                >
                  {sub}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            <IndustryCta industry={industry} />
            <Button asChild size="lg" variant="outline">
              <Link to="/industries">
                Back to Industries
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="Capabilities"
            title={`Services for ${industry.name}`}
            subtitle="Organised into the capability areas that matter most for this industry."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [&>*]:min-w-0">
            {industry.serviceGroups.map((group, index) => (
              <Reveal key={group.label} delay={(index % 3) * 90}>
                <ServiceGroupCard group={group} />
              </Reveal>
            ))}
          </div>

          {industry.segments ? (
            <div className="mt-14">
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Services by segment
              </h3>
              <Accordion type="single" collapsible className="mt-6">
                {industry.segments.map((segment) => (
                  <AccordionItem key={segment.id} value={segment.id} id={segment.id}>
                    <AccordionTrigger className="text-left text-base font-semibold">
                      {segment.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {segment.intro}
                      </p>
                      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [&>*]:min-w-0">
                        {segment.groups.map((group) => (
                          <ServiceGroupCard key={group.label} group={group} />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : null}

          {industry.businessTypes ? (
            <div className="mt-14 grid gap-5 sm:grid-cols-2 [&>*]:min-w-0">
              {industry.businessTypes.map((group) => (
                <article key={group.label} className="surface-card p-6 sm:p-8">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {group.label}
                  </h3>
                  <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="How Vridyna Helps"
          title={`Connecting capabilities to ${industry.shortName.toLowerCase()} business needs.`}
          subtitle="Each capability supports a stage of the customer journey, connected into one system."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [&>*]:min-w-0">
          {industry.journey.map((step, index) => (
            <Reveal key={step} delay={(index % 4) * 80}>
              <li className="surface-card flex h-full items-center gap-4 p-5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-primary/40 text-xs font-semibold text-primary">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-foreground">{step}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {industry.faqs ? (
        <section className="mx-auto max-w-3xl px-5 pb-8 sm:px-8">
          <h2 className="text-2xl font-bold text-foreground">Questions</h2>
          <Accordion type="single" collapsible className="mt-4">
            {industry.faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="surface-card flex flex-col items-start gap-6 p-8 sm:p-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Let&apos;s Discuss Your Business.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            Tell us about your {industry.shortName.toLowerCase()} business, your challenge and what
            you want to achieve.
          </p>
          <IndustryCta industry={industry} />
        </div>

        <nav aria-label="Other industries" className="mt-14">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Other Industries
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {INDUSTRIES.filter((item) => item.slug !== industry.slug).map((item) => (
              <li key={item.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: item.slug }}
                  className="inline-flex rounded-full border border-border bg-surface-elevated/60 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </div>
  );
}

function IndustryNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-40 text-center sm:px-8">
      <h1 className="text-3xl font-extrabold text-foreground">Industry not found</h1>
      <p className="mt-4 text-muted-foreground">
        That industry page doesn&apos;t exist. Browse all industries we work with.
      </p>
      <Button asChild className="mt-8">
        <Link to="/industries">
          View All Industries
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}

function IndustryError() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-40 text-center sm:px-8">
      <h1 className="text-3xl font-extrabold text-foreground">Something went wrong</h1>
      <p className="mt-4 text-muted-foreground">Please try again or browse all industries.</p>
      <Button asChild className="mt-8">
        <Link to="/industries">View All Industries</Link>
      </Button>
    </div>
  );
}
