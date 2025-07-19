import en from '@/i18n/messages/en.json';
import ru from '@/i18n/messages/ru.json';

import { ReactNode } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "./main.css";

/* info: Language Imports */
import { NextIntlClientProvider, useMessages } from 'next-intl';
import LocaleLayoutInner from "./LocaleLayoutInner";


interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  authors: { name: string; url?: string }[];
  icons: { icon: { url: string; type: string }[] };
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: { url: string; width: number; height: number; alt: string; type: string }[];
    type: string;
    locale: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    creator: string;
    images: string[];
  };
  robots: {
    index: boolean;
    follow: boolean;
    nocache: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      noimageindex: boolean;
    };
  };
  alternates: {
    canonical: string;
  };
  metadataBase: URL;
}

const meta: Record<string, MetaData> = {
  en: {
    title: en.metadata.index.title,
    description: en.metadata.index.desc,
    keywords: Object.values(en.metadata.index.keywords),
    authors: [{ name: 'AroCodes', url: 'https://github.com/OfficialAroCodes' }],
    icons: {
      icon: [{ url: '/images/other/logo.png', type: 'image/png' }],
    },
    openGraph: {
      title: en.metadata.index.title,
      description: en.metadata.index.desc,
      url: 'https://arocrypt.vercel.app',
      siteName: 'AroCrypt',
      images: [
        {
          url: '/images/other/og.png',
          width: 1200,
          height: 630,
          alt: 'AroCrypt OpenGraph Preview',
          type: 'image/png',
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: en.metadata.index.title,
      description: en.metadata.index.x_desc,
      creator: '@arocodes_dev',
      images: ['/images/other/og.png'],
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
      canonical: 'https://arocrypt.vercel.app',
    },
    metadataBase: new URL('https://arocrypt.vercel.app'),
  },
  ru: {
    title: ru.metadata.index.title,
    description: ru.metadata.index.desc,
    keywords: Object.values(ru.metadata.index.keywords),
    authors: [{ name: 'AroCodes', url: 'https://github.com/OfficialAroCodes' }],
    icons: {
      icon: [{ url: '/images/other/logo.png', type: 'image/png' }],
    },
    openGraph: {
      title: ru.metadata.index.title,
      description: ru.metadata.index.desc,
      url: 'https://arocrypt.vercel.app',
      siteName: 'AroCrypt',
      images: [
        {
          url: '/images/other/og.png',
          width: 1200,
          height: 630,
          alt: 'AroCrypt OpenGraph Preview',
          type: 'image/png',
        },
      ],
      type: 'website',
      locale: 'ru_RU',
    },
    twitter: {
      card: 'summary_large_image',
      title: ru.metadata.index.title,
      description: ru.metadata.index.x_desc,
      creator: '@arocodes_dev',
      images: ['/images/other/og.png'],
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
      canonical: 'https://arocrypt.vercel.app',
    },
    metadataBase: new URL('https://arocrypt.vercel.app'),
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const selectedLocale = locale === 'ru' ? 'ru' : 'en';

  return {
    title: meta[selectedLocale].title,
    description: meta[selectedLocale].description,
    keywords: meta[selectedLocale].keywords,
    authors: meta[selectedLocale].authors,
    icons: meta[selectedLocale].icons,
    openGraph: meta[selectedLocale].openGraph,
    twitter: meta[selectedLocale].twitter,
    robots: meta[selectedLocale].robots,
    alternates: meta[selectedLocale].alternates,
    metadataBase: meta[selectedLocale].metadataBase,
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  if (!['en', 'ru'].includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} data-theme="light">
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleLayoutInner>{children}</LocaleLayoutInner>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
