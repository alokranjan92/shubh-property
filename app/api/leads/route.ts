import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma/client";

export const runtime = "nodejs";

const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(/^\+?[0-9\s-]{10,16}$/),
  email: z.string().trim().email().max(160).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional(),
  preferredDate: z.string().date().optional().or(z.literal("")),
  propertySlug: z.string().trim().max(180).optional(),
  propertyTitle: z.string().trim().max(200).optional(),
  website: z.string().max(200).optional()
});

const attempts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || entry.resetAt < now) {
    attempts.set(key, { count: 1, resetAt: now + 10 * 60 * 1000 });
    return false;
  }
  entry.count += 1;
  return entry.count > 5;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const parsed = leadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form details." }, { status: 400 });
  }
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { propertySlug, propertyTitle, preferredDate, email, ...lead } = parsed.data;
  delete lead.website;

  try {
    const property = propertySlug
      ? await prisma.property.findUnique({ where: { slug: propertySlug }, select: { id: true } })
      : null;
    const context = propertyTitle ? `Property: ${propertyTitle}${propertySlug ? ` (${propertySlug})` : ""}` : null;

    await prisma.lead.create({
      data: {
        ...lead,
        email: email || null,
        propertyId: property?.id,
        preferredDate: preferredDate ? new Date(`${preferredDate}T09:00:00+05:30`) : null,
        message: [context, lead.message].filter(Boolean).join("\n") || null,
        source: "WEBSITE",
        status: preferredDate ? "SITE_VISIT_SCHEDULED" : "NEW"
      }
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Lead creation failed", error);
    return NextResponse.json(
      { error: "We could not save your request. Please call or WhatsApp us." },
      { status: 503 }
    );
  }
}
