"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Hello Shubh Property, I want help with property, construction materials or home decor in Dehradun."
);

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const isPrivateArea =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up") ||
    pathname.startsWith("/user-profile");

  if (isPrivateArea) {
    return null;
  }

  return (
    <a
      href={`https://wa.me/919900000001?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Shubh Property on WhatsApp"
      className="fixed bottom-24 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-900/20 transition-transform hover:scale-105 md:bottom-6 md:right-6 md:h-14 md:w-14"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
