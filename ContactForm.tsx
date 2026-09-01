import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getIndustry, INDUSTRIES } from "@/lib/industries";
import { WHATSAPP_URL } from "@/lib/site";

const BUSINESS_TYPES = [
  ...INDUSTRIES.map((industry) => industry.name),
  "Other Business",
];

const SERVICES = [
  "Digital Marketing",
  "SEO / AEO / GEO",
  "Website",
  "E-commerce",
  "CRM",
  "AI & Automation",
  "Branding",
  "Creative & Media",
  "Analytics",
  "Other",
];

type Errors = Record<string, string>;

const fieldClass =
  "h-11 rounded-lg border-border bg-surface-elevated/70 text-foreground placeholder:text-muted-foreground";

export function ContactForm({
  industrySlug,
}: {
  industrySlug?: string | undefined;
}) {
  const preselected = industrySlug
    ? getIndustry(industrySlug)?.name
    : undefined;

  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const get = (key: string) =>
      String(data.get(key) ?? "").trim();

    const values = {
      name: get("name"),
      company: get("company"),
      businessType: get("businessType"),
      phone: get("phone"),
      email: get("email"),
      requirement: get("requirement"),
      message: get("message"),
    };

    const nextErrors: Errors = {};

    if (values.name.length < 2) {
      nextErrors["name"] = "Please enter your name.";
    }

    if (!/^[+\d][\d\s-]{7,}$/.test(values.phone)) {
      nextErrors["phone"] = "Please enter a valid phone number.";
    }

    if (
      values.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      nextErrors["email"] = "Please enter a valid email address.";
    }

    if (!values.businessType) {
      nextErrors["businessType"] =
        "Please select an industry.";
    }

    if (!values.requirement) {
      nextErrors["requirement"] =
        "Please select what you need help with.";
    }

    if (values.message.length < 10) {
      nextErrors["message"] =
        "Please add a little more detail (10+ characters).";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setPrepared(null);
      return;
    }

    const text = [
      "Hello Vridyna,",
      "",
      "I would like to discuss a requirement.",
      "",
      `Name: ${values.name}`,
      `Company: ${values.company || "-"}`,
      `Industry: ${values.businessType}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email || "-"}`,
      `Requirement: ${values.requirement}`,
      `Message: ${values.message}`,
    ].join("\n");

    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

    setPrepared(url);

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  }

  /* =========================================================
     SEO STRUCTURED DATA
     ========================================================= */

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vridyna Technologies",
    url: "https://www.vridyna.com/",
    description:
      "Vridyna Technologies provides digital marketing, SEO, AEO, GEO, website, e-commerce, CRM, AI automation, branding, creative media and analytics solutions for businesses.",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name:
      "Contact Vridyna Technologies | Digital Marketing, SEO & AI Solutions",
    url: "https://www.vridyna.com/contact",
    description:
      "Get in touch with Vridyna Technologies for digital marketing, SEO, AEO, GEO, website development, e-commerce, CRM, AI automation, branding and analytics solutions.",
    isPartOf: {
      "@type": "WebSite",
      name: "Vridyna Technologies",
      url: "https://www.vridyna.com/",
    },
    about: {
      "@type": "Organization",
      name: "Vridyna Technologies",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Vridyna Technologies provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Vridyna Technologies provides digital marketing, SEO, AEO, GEO, website development, e-commerce, CRM, AI and automation, branding, creative and media, and analytics solutions.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Vridyna Technologies?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You can contact Vridyna Technologies by submitting your business requirements through the contact form. Your enquiry details can be prepared for WhatsApp communication.",
        },
      },
      {
        "@type": "Question",
        name: "Does Vridyna Technologies provide SEO services?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Vridyna Technologies provides SEO services along with AEO and GEO strategies to help businesses improve online visibility and reach relevant customers.",
        },
      },
      {
        "@type": "Question",
        name: "Does Vridyna provide AI automation solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Vridyna Technologies provides AI and automation solutions designed to help businesses improve workflows, efficiency and digital operations.",
        },
      },
      {
        "@type": "Question",
        name: "Can Vridyna create a customized digital marketing strategy?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Vridyna Technologies can develop digital strategies based on a business's industry, goals, challenges, target audience and requirements.",
        },
      },
    ],
  };

  return (
    <>
      {/* =====================================================
          SEO META TAGS
          ===================================================== */}

      <Helmet>
        {/* Primary SEO */}
        <title>
          Contact Vridyna Technologies | Digital Marketing, SEO & AI Solutions
        </title>

        <meta
          name="description"
          content="Get in touch with Vridyna Technologies for digital marketing, SEO, AEO, GEO, website, e-commerce, CRM, AI automation, branding, creative media and analytics solutions tailored to your business."
        />

        <meta
          name="keywords"
          content="digital marketing company, digital marketing services, SEO services, SEO company, AEO services, GEO services, website development, website development company, e-commerce solutions, CRM solutions, 
          AI automation services, business automation, branding services, creative media services, digital analytics services, digital transformation services, business growth solutions, Digital Marketing Agency, 
          Digital Marketing Company, AI Digital Marketing Agency, Digital Growth Agency, AI Marketing Services, Digital Growth Solutions, AI & Digital Marketing, 
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
          E-commerce SEO, D2C Marketing Agency, E-commerce Growth Marketing, SaaS Digital Marketing, SaaS SEO, Technology Marketing Agency, B2B SaaS Lead Generation,"
        />

        <meta
          name="author"
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
          name="language"
          content="English"
        />

        <meta
          name="revisit-after"
          content="7 days"
        />

        <meta
          name="theme-color"
          content="#ffffff"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.vridyna.com/contact"
        />

        {/* =====================================================
            OPEN GRAPH / FACEBOOK / LINKEDIN
            ===================================================== */}

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Contact Vridyna Technologies | Digital Growth Solutions"
        />

        <meta
          property="og:description"
          content="Connect with Vridyna Technologies for digital marketing, SEO, AEO, GEO, websites, e-commerce, CRM, AI automation, branding and analytics solutions."
        />

        <meta
          property="og:url"
          content="https://www.vridyna.com/contact"
        />

        <meta
          property="og:site_name"
          content="Vridyna Technologies"
        />

        <meta
          property="og:locale"
          content="en_IN"
        />

        {/* Add your actual social sharing image here */}
        <meta
          property="og:image"
          content="https://www.vridyna.com/og-image.jpg"
        />

        <meta
          property="og:image:alt"
          content="Vridyna Technologies - Digital Growth Solutions"
        />

        {/* =====================================================
            TWITTER / X
            ===================================================== */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Contact Vridyna Technologies | Digital Growth Solutions"
        />

        <meta
          name="twitter:description"
          content="Talk to Vridyna Technologies about digital marketing, SEO, AEO, GEO, websites, e-commerce, CRM, AI automation, branding and analytics."
        />

        <meta
          name="twitter:image"
          content="https://www.vridyna.com/og-image.jpg"
        />

        <meta
          name="twitter:image:alt"
          content="Vridyna Technologies Digital Growth Solutions"
        />

        {/* =====================================================
            STRUCTURED DATA
            ===================================================== */}

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* =====================================================
          CONTACT FORM
          ===================================================== */}

      <section
        aria-labelledby="contact-heading"
        className="space-y-6"
      >
        <div>
          <h1
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Let&apos;s Grow Your Business with Smarter Digital Solutions
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Looking to grow your business online? Connect with
            Vridyna Technologies for result-driven digital
            marketing, SEO, AEO, GEO, website development,
            e-commerce, CRM, AI automation, branding, creative
            media and analytics solutions. Tell us about your
            business and requirements, and our team will help
            you find the right digital strategy.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="surface-card p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="name"
              label="Name"
              error={errors["name"]}
              required
            >
              <Input
                id="name"
                name="name"
                autoComplete="name"
                className={fieldClass}
                required
              />
            </Field>

            <Field
              id="company"
              label="Company"
            >
              <Input
                id="company"
                name="company"
                autoComplete="organization"
                className={fieldClass}
              />
            </Field>

            <Field
              id="businessType"
              label="Industry"
              error={errors["businessType"]}
              required
            >
              <select
                id="businessType"
                name="businessType"
                key={preselected ?? "none"}
                required
                defaultValue={preselected ?? ""}
                className={`${fieldClass} w-full border px-3 text-sm`}
              >
                <option
                  value=""
                  disabled
                >
                  Select your industry
                </option>

                {BUSINESS_TYPES.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="bg-surface-elevated"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              id="phone"
              label="Phone"
              error={errors["phone"]}
              required
            >
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className={fieldClass}
                required
              />
            </Field>

            <Field
              id="email"
              label="Email"
              error={errors["email"]}
            >
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={fieldClass}
              />
            </Field>

            <Field
              id="requirement"
              label="What do you need help with?"
              error={errors["requirement"]}
              required
            >
              <select
                id="requirement"
                name="requirement"
                required
                defaultValue=""
                className={`${fieldClass} w-full border px-3 text-sm`}
              >
                <option
                  value=""
                  disabled
                >
                  Select a service
                </option>

                {SERVICES.map((option) => (
                  <option
                    key={option}
                    value={option}
                    className="bg-surface-elevated"
                  >
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              id="message"
              label="Message"
              error={errors["message"]}
              className="sm:col-span-2"
              required
            >
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your business, your challenge and what you want to achieve."
                className="rounded-lg border-border bg-surface-elevated/70 text-foreground placeholder:text-muted-foreground"
              />
            </Field>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-7 w-full sm:w-auto"
          >
            <MessageCircle className="size-4" />
            Send Enquiry
          </Button>

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Submitting opens WhatsApp with your enquiry details
            pre-filled so you can send it to us directly.
          </p>

          <div
            aria-live="polite"
            className="mt-3"
          >
            {prepared ? (
              <p className="text-sm text-primary">
                Your enquiry is ready.{" "}
                <a
                  href={prepared}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Open WhatsApp to send it
                </a>{" "}
                if it didn&apos;t open automatically.
              </p>
            ) : null}
          </div>
        </form>
      </section>
    </>
  );
}

/* =========================================================
   FIELD COMPONENT
   ========================================================= */

function Field({
  id,
  label,
  error,
  required,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  required?: boolean | undefined;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}

        {required ? (
          <span className="ml-1 text-primary">
            *
          </span>
        ) : null}
      </Label>

      {children}

      {error ? (
        <p
          role="alert"
          className="mt-1.5 text-xs text-destructive"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
