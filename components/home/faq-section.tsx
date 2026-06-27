import { ChevronDown } from "lucide-react";
import { SectionShell } from "@/components/home/section-shell";
import { faqs } from "@/lib/homepage/data";

export function FaqSection() {
  return (
    <SectionShell
      id="faq"
      eyebrow="Answers"
      title="Frequently asked questions"
      description="Clear answers for customers, agents, suppliers and future marketplace partners."
    >
      <div className="mx-auto max-w-4xl divide-y divide-border rounded-lg border border-border bg-card">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold">
              {faq.question}
              <ChevronDown
                className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{faq.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
