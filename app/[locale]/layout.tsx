export const dynamic = 'force-static';

import { ReactNode } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "./main.css";

/* info: Language Imports */
import { NextIntlClientProvider } from 'next-intl';
import LocaleLayoutInner from "./LocaleLayoutInner";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const { locale } = resolvedParams;

  let t;
  try {
    t = await getTranslations({ locale, namespace: 'metadata.index' });
  } catch (error) {
    console.error('Translation fetch failed:', error);
    t = await getTranslations({ locale: 'en', namespace: 'metadata.index' });
  }

  return {
    title: t('title'),
    description: t('desc'),
    keywords: [
      t('keywords.0'),
      t('keywords.1'),
      t('keywords.2'),
      t('keywords.3'),
      t('keywords.4'),
      t('keywords.5'),
      t('keywords.6'),
      t('keywords.7'),
      t('keywords.8'),
      t('keywords.9'),
    ],
    authors: [{ name: 'AroCodes', url: 'https://github.com/OfficialAroCodes' }],
    icons: [
      { url: '/favicon.ico' },
      { url: '/images/other/logo.png', type: 'image/png' },
    ],
    openGraph: {
      title: t('title'),
      description: t('desc'),
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
      title: t('title'),
      description: t('desc'),
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
      canonical: `https://arocrypt.vercel.app/${locale}`,
      languages: {
        'en-US': 'https://arocrypt.vercel.app/en',
        'ru-RU': 'https://arocrypt.vercel.app/ru',
        'x-default': 'https://arocrypt.vercel.app/en',
      },
    },
    metadataBase: new URL('https://arocrypt.vercel.app'),
  };
}

async function LocaleLayoutContent({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  if (!['en', 'ru'].includes(locale)) {
    notFound();
  }

  const messages = (await import(`../i18n/messages/${locale}.json`)).default;

  return (
    <html lang={locale} data-theme="light">
      <head>
        <meta name="google-site-verification" content="4UI9oIy7W9_Ni-k0KRP-Qev8mJg3Gr0ncnzHit68mLI" />
        <meta name="yandex-verification" content="547d2f43a3f6c6ea" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LocaleLayoutInner>{children}</LocaleLayoutInner>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const { locale } = resolvedParams;

  return <LocaleLayoutContent locale={locale}>{children}</LocaleLayoutContent>;
}