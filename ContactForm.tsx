import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getIndustry, INDUSTRIES } from "@/lib/industries";
import { WHATSAPP_URL } from "@/lib/site";

const BUSINESS_TYPES = [...INDUSTRIES.map((industry) => industry.name), "Other Business"];

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

export function ContactForm({ industrySlug }: { industrySlug?: string | undefined }) {
  const preselected = industrySlug ? getIndustry(industrySlug)?.name : undefined;
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();

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
    if (values.name.length < 2) nextErrors["name"] = "Please enter your name.";
    if (!/^[+\d][\d\s-]{7,}$/.test(values.phone))
      nextErrors["phone"] = "Please enter a valid phone number.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      nextErrors["email"] = "Please enter a valid email address.";
      if (!values.businessType) nextErrors["businessType"] = "Please select an industry.";
    if (!values.requirement) nextErrors["requirement"] = "Please select what you need help with.";
    if (values.message.length < 10)
      nextErrors["message"] = "Please add a little more detail (10+ characters).";

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
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="surface-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors["name"]} required>
          <Input id="name" name="name" autoComplete="name" className={fieldClass} required />
        </Field>
        <Field id="company" label="Company">
          <Input id="company" name="company" autoComplete="organization" className={fieldClass} />
        </Field>
        <Field id="businessType" label="Industry" error={errors["businessType"]} required>
          <select
            id="businessType"
            name="businessType"
            key={preselected ?? "none"}
            required
            defaultValue={preselected ?? ""}
            className={`${fieldClass} w-full border px-3 text-sm`}
          >
            <option value="" disabled>
              Select your industry
            </option>
            {BUSINESS_TYPES.map((option) => (
              <option key={option} value={option} className="bg-surface-elevated">
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field id="phone" label="Phone" error={errors["phone"]} required>
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
        <Field id="email" label="Email" error={errors["email"]}>
          <Input id="email" name="email" type="email" autoComplete="email" className={fieldClass} />
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
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((option) => (
              <option key={option} value={option} className="bg-surface-elevated">
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field id="message" label="Message" error={errors["message"]} className="sm:col-span-2" required>
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

      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto">
        <MessageCircle className="size-4" />
        Send Enquiry
      </Button>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Submitting opens WhatsApp with your enquiry details pre-filled so you can send it to us
        directly.
      </p>

      <div aria-live="polite" className="mt-3">
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
  );
}

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
      <Label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
        {required ? <span className="ml-1 text-primary">*</span> : null}
      </Label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
