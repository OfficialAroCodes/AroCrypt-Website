import type { Metadata } from "next";
import "./main.css";

/* info: Component and Provider Imports */
import { ThemeProvider } from "./providers/ThemeProvider";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

/* info: Language Imports */
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

/* info: Analytics */
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "AroCrypt ― Encrypt. Conceal. Stay Invisible.",
  description:
    "AroCrypt merges military-grade encryption with smart steganography to hide your data in plain sight — not just in images, but anywhere you need. Lock it. Mask it. Own your privacy.",
  applicationName: "AroCrypt",
  authors: [{ name: "AroCodes", url: "https://github.com/AroCodes" }],
  generator: "Next.js",
  keywords: [
    "AroCrypt",
    "encryption",
    "steganography",
    "data hiding",
    "secure communication",
    "cybersecurity",
    "data protection",
    "digital privacy",
    "file security",
    "invisible encryption",
  ],
  icons: {
    icon: [{ url: "/images/other/logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "AroCrypt ― Encrypt. Conceal. Stay Invisible.",
    description:
      "AroCrypt merges military-grade encryption with smart steganography to hide your data in plain sight — not just in images, but anywhere you need. Lock it. Mask it. Own your privacy.",
    url: "https://arocrypt.vercel.app",
    siteName: "AroCrypt",
    images: [
      {
        url: "/images/other/og.png",
        width: 1200,
        height: 630,
        alt: "AroCrypt OpenGraph Preview",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AroCrypt ― Encrypt. Conceal. Stay Invisible.",
    description:
      "Military-grade encryption meets stealth-mode data protection. AroCrypt hides your secrets in plain sight using advanced steganography.",
    creator: "@AroCodes",
    images: ["/images/other/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://arocrypt.vercel.app",
  },
  metadataBase: new URL("https://arocrypt.vercel.app"),
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    console.log('not found!');
  }

  return (
    <html lang={locale} data-theme="light">
      <body>
        <Analytics />
        <SpeedInsights />
        <NextIntlClientProvider>
          <ThemeProvider>
            <Topbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
