import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

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

  useEffect(() => {
    const script = document.createElement("script");

    script.async = true;
    script.src =
      "https://www.googletagmanager.com/gtag/js?id=G-QBJJNCR73Y";

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];

    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", "G-QBJJNCR73Y");

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* =========================================================
            PRIMARY SEO
        ========================================================== */}

        <title>
          Vridyna Technologies | Web Development, SEO & Digital Marketing
        </title>

        <meta
          name="description"
          content="Vridyna Technologies provides professional web development, website design, SEO, digital marketing and technology solutions to help businesses increase online visibility, attract customers and grow."
        />

        <meta
          name="keywords"
          content="Vridyna Technologies, web development company, website development company, web design services, SEO services, SEO company India, digital marketing company, digital marketing services, software development, responsive web design, business website development, website design company, search engine optimization, local SEO, technical SEO, online marketing services, technology solutions, business technology solutions, website development India"
        />

        <meta
          name="author"
          content="Vridyna Technologies"
        />

        <meta
          name="publisher"
          content="Vridyna Technologies"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta
          name="bingbot"
          content="index, follow"
        />

        <meta
          name="language"
          content="English"
        />

        <meta
          httpEquiv="content-language"
          content="en-IN"
        />

        <meta
          name="revisit-after"
          content="7 days"
        />

        {/* =========================================================
            CANONICAL
        ========================================================== */}

        <link
          rel="canonical"
          href="https://www.vridyna.com/"
        />

        {/* =========================================================
            OPEN GRAPH / FACEBOOK / LINKEDIN
        ========================================================== */}

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Vridyna Technologies | Web Development, SEO & Digital Marketing"
        />

        <meta
          property="og:description"
          content="Build a stronger digital presence with Vridyna Technologies. Get professional web development, SEO, digital marketing and technology solutions designed to increase visibility, attract customers and grow your business."
        />

        <meta
          property="og:url"
          content="https://www.vridyna.com/"
        />

        <meta
          property="og:site_name"
          content="Vridyna Technologies"
        />

        <meta
          property="og:locale"
          content="en_IN"
        />

        <meta
          property="og:image"
          content="https://www.vridyna.com/og-image.jpg"
        />

        <meta
          property="og:image:alt"
          content="Vridyna Technologies - Web Development, SEO and Digital Marketing"
        />

        <meta
          property="og:image:type"
          content="image/jpeg"
        />

        <meta
          property="og:image:width"
          content="1200"
        />

        <meta
          property="og:image:height"
          content="630"
        />

        {/* =========================================================
            TWITTER / X
        ========================================================== */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Vridyna Technologies | Web Development, SEO & Digital Marketing"
        />

        <meta
          name="twitter:description"
          content="Professional web development, SEO, digital marketing and technology solutions to help businesses increase online visibility, attract customers and grow."
        />

        <meta
          name="twitter:image"
          content="https://www.vridyna.com/og-image.jpg"
        />

        <meta
          name="twitter:image:alt"
          content="Vridyna Technologies - Digital Solutions"
        />

        {/* =========================================================
            MOBILE / BROWSER
        ========================================================== */}

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          name="theme-color"
          content="#0EA5E9"
        />

        <meta
          name="format-detection"
          content="telephone=no"
        />

        {/* =========================================================
            WEBSITE SCHEMA
        ========================================================== */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.vridyna.com/#organization",
                name: "Vridyna Technologies",
                url: "https://www.vridyna.com/",
                logo: {
                  "@type": "ImageObject",
                  "@id": "https://www.vridyna.com/#logo",
                  url: "https://www.vridyna.com/logo.png",
                  contentUrl: "https://www.vridyna.com/logo.png",
                  caption: "Vridyna Technologies Logo",
                },
                description:
                  "Vridyna Technologies provides professional web development, website design, SEO, digital marketing and technology solutions for businesses.",
              },
              {
                "@type": "WebSite",
                "@id": "https://www.vridyna.com/#website",
                url: "https://www.vridyna.com/",
                name: "Vridyna Technologies",
                description:
                  "Professional web development, SEO, digital marketing and technology solutions for businesses.",
                publisher: {
                  "@id": "https://www.vridyna.com/#organization",
                },
                inLanguage: "en-IN",
              },
            ],
          })}
        </script>

        {/* =========================================================
            SERVICE / BUSINESS SCHEMA
        ========================================================== */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://www.vridyna.com/#business",
            name: "Vridyna Technologies",
            url: "https://www.vridyna.com/",
            description:
              "Vridyna Technologies offers web development, website design, SEO, digital marketing, software development and technology solutions for businesses.",
            provider: {
              "@id": "https://www.vridyna.com/#organization",
            },
            serviceType: [
              "Web Development",
              "Website Development",
              "Web Design",
              "SEO Services",
              "Digital Marketing",
              "Software Development",
              "Technology Solutions",
            ],
            areaServed: {
              "@type": "Country",
              name: "India",
            },
          })}
        </script>
      </Helmet>

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

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
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
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Call Vridyna"
            >
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
              {open ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-nav"
            className="border-t border-border bg-background/97 backdrop-blur-xl lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8"
            >
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
      </header>
    </>
  );
}
