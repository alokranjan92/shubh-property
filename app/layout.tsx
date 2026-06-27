import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";
import { JsonLd } from "@/components/seo/json-ld";
import { hasValidClerkKeys } from "@/lib/auth/clerk";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhproperty.in"),
  title: {
    default: "Shubh Property | Property + Construction Marketplace in Dehradun",
    template: "%s | Shubh Property"
  },
  description:
    "Shubh Property is a Dehradun-first property, construction materials and home decor marketplace built to expand across Indian states and cities.",
  keywords: [
    "Shubh Property",
    "Dehradun property",
    "property in Dehradun",
    "real estate marketplace India",
    "construction materials Dehradun",
    "home decor Dehradun"
  ],
  openGraph: {
    title: "Shubh Property",
    description:
      "India-ready property, construction materials and home decor marketplace starting from Dehradun.",
    url: "https://shubhproperty.in",
    siteName: "Shubh Property",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubh Property",
    description:
      "A trusted property and construction marketplace starting from Dehradun."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shubh Property",
    slogan: "Find Property. Build Better. Live Better.",
    url: "https://shubhproperty.in",
    areaServed: {
      "@type": "City",
      name: "Dehradun",
      containedInPlace: {
        "@type": "State",
        name: "Uttarakhand"
      }
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      addressCountry: "IN"
    },
    sameAs: []
  };

  const page = (
    <html lang="en-IN" suppressHydrationWarning>
      <body>
        <JsonLd data={localBusinessSchema} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingWhatsApp />
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );

  if (!hasValidClerkKeys()) {
    return page;
  }

  return <ClerkProvider>{page}</ClerkProvider>;
}
