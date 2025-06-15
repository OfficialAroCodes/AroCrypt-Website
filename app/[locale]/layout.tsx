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
  title: "AroCrypt ― Defend Your Data. Protect Your Privacy.",
  description:
    "AroCrypt is your shield against digital threats. Simple yet powerful encryption keeps your data secure and your privacy intact. Stay protected, always.",
  icons: {
    icon: [{ url: "/images/other/logo.png", type: "image/png" }],
  },
  openGraph: {
    title: "AroCrypt ― Defend Your Data. Protect Your Privacy.",
    description:
      "AroCrypt is your trusted shield against digital threats. Simple yet powerful encryption keeps your data secure and privacy intact.",
    url: "https://arocrypt.vercel.app",
    siteName: "AroCrypt",
    images: [
      {
        url: "/images/other/logo.png",
        width: 1200,
        height: 630,
        alt: "AroCrypt Logo",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://arocrypt.vercel.app",
  },
  metadataBase: new URL("https://arocrypt.vercel.app"),
  applicationName: "AroCrypt",
  authors: [{ name: "AroCodes" }],
  generator: "Next.js",
  keywords: [
    "AroCrypt",
    "encryption",
    "privacy",
    "data protection",
    "secure communication",
    "cybersecurity",
  ],
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
