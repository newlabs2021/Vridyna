import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { INDUSTRIES as INDUSTRIES_LIST, type Industry } from "@/lib/industries";
import { cn } from "@/lib/utils";

export function IndustryCard({
  industry,
  compact = false,
}: {
  industry: Industry;
  compact?: boolean;
}) {
  const Icon = industry.icon;
  return (
    <article
      className={cn(
        "surface-card group relative flex h-full min-w-0 flex-col p-6 transition-transform duration-300 focus-within:-translate-y-1 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none",
        compact ? "p-5" : "p-6",
      )}
    >
      <Icon className="size-6 shrink-0 text-primary" aria-hidden="true" />

      <h3 className="mt-4 text-base font-bold leading-snug text-foreground sm:text-lg">
        <Link
          to="/industries/$slug"
          params={{ slug: industry.slug }}
          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          {industry.name}
        </Link>
      </h3>

      <p className="mt-2 min-h-5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
        {industry.badge ?? ""}
      </p>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {compact ? industry.cardDescription : industry.description}
      </p>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        Explore Services
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
          aria-hidden="true"
        />
      </span>
    </article>
  );
}

export function IndustriesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 [&>*]:min-w-0">
      {INDUSTRIES_LIST.map((industry) => (
        <IndustryCard key={industry.slug} industry={industry} compact={compact} />
      ))}
    </div>
  );
}

export function IndustryCta({ industry }: { industry: Industry }) {
  return (
    <Button asChild size="lg">
      <Link to="/contact" search={{ industry: industry.slug }} hash="contact">
        Talk to Vridyna
        <ArrowRight className="size-4" />
      </Link>
    </Button>
  );
}
