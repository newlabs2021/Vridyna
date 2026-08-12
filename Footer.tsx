import { Link } from "@tanstack/react-router";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import {
  ADDRESS_LINES,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICE_CATEGORIES,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              Growth. Technology. AI. A modern growth company built in Chennai for ambitious
              businesses.
            </p>
            <Button asChild className="mt-6">
              <Link to="/contact">Talk to Us</Link>
            </Button>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold text-foreground">Navigation</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    to="/services"
                    hash={category.id}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Contact</h2>
            <address className="mt-4 space-y-3 text-sm not-italic text-muted-foreground">
              <a
                href={PHONE_TEL}
                className="block font-medium text-foreground transition-colors hover:text-primary"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="max-w-xs leading-relaxed">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          </div>
        </div>

        <div className="hairline mt-14" />
        <p className="mt-6 text-xs text-muted-foreground">
          © 2026 Vridyna Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
