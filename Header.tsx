import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, PHONE_TEL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header

      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ "data-active": "true" }}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="lg:hidden" aria-label="Call Vridyna">
            <a href={PHONE_TEL}>
              <Phone className="size-4" />
            </a>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">Talk to Us</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background/97 backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ "data-active": "true" }}
                className="rounded-md px-2 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-3 w-full">
              <Link to="/contact">Talk to Us</Link>
            </Button>
          </nav>
        </div>
      ) : null}


<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QBJJNCR73Y"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QBJJNCR73Y');
</script>

      
    
    </header>   
  );
}
