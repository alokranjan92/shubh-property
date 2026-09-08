"use client";

import { FormEvent, useState } from "react";
import { CalendarCheck, CheckCircle2, Loader2, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { businessPhone, businessPhoneDisplay, whatsappNumber } from "@/lib/contact";

type PropertyInquiryCardProps = {
  propertySlug: string;
  propertyTitle: string;
  priceLabel: string;
};

export function PropertyInquiryCard({ propertySlug, propertyTitle, priceLabel }: PropertyInquiryCardProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const whatsappMessage = encodeURIComponent(
    `Hello Shubh Property, I am interested in ${propertyTitle} (${priceLabel}). Please share details.`
  );

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        phone: form.get("phone"),
        email: form.get("email"),
        preferredDate: form.get("preferredDate"),
        message: form.get("message"),
        website: form.get("website"),
        propertySlug,
        propertyTitle
      })
    });

    if (response.ok) {
      setStatus("success");
      event.currentTarget.reset();
      return;
    }
    const result = (await response.json().catch(() => null)) as { error?: string } | null;
    setError(result?.error || "Please try again or contact us directly.");
    setStatus("error");
  }

  return (
    <Card className="shadow-xl">
      <CardContent className="p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Inquiry</p>
        <h2 className="mt-3 text-2xl font-semibold">Book a site visit</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Share your details and our property team will confirm the visit.
        </p>

        {status === "success" ? (
          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900" role="status">
            <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            <p className="mt-2 font-semibold">Request received</p>
            <p className="mt-1 text-sm">Our team will contact you shortly.</p>
          </div>
        ) : (
          <form className="mt-5 grid gap-3" onSubmit={submit}>
            <Input name="name" aria-label="Your name" placeholder="Your name" minLength={2} maxLength={80} required />
            <Input name="phone" aria-label="Phone number" placeholder="10-digit phone number" inputMode="tel" pattern="[+0-9 -]{10,16}" required />
            <Input name="email" aria-label="Email address" placeholder="Email (optional)" type="email" />
            <Input name="preferredDate" aria-label="Preferred visit date" type="date" min={new Date().toISOString().slice(0, 10)} />
            <textarea name="message" aria-label="Message" placeholder="Questions or preferred time (optional)" maxLength={1000} className="min-h-20 rounded-md border border-input bg-background px-3 py-2 text-sm" />
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            {status === "error" ? <p className="text-sm text-destructive" role="alert">{error}</p> : null}
            <Button type="submit" size="lg" disabled={status === "sending"}>
              {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <CalendarCheck className="h-4 w-4" aria-hidden="true" />}
              {status === "sending" ? "Sending…" : "Request Site Visit"}
            </Button>
          </form>
        )}

        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-5">
          <Button asChild variant="outline">
            <a href={`tel:${businessPhone}`} aria-label={`Call Shubh Property at ${businessPhoneDisplay}`}>
              <PhoneCall className="h-4 w-4" aria-hidden="true" /> Call
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
