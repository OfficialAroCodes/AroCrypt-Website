import { Metadata } from "next";
import Content from "./Content"
import { getTranslations } from "next-intl/server";

export const dynamic = 'force-static';

export async function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'ru' },
    ];
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;

    let t;
    try {
        t = await getTranslations({ locale, namespace: 'metadata.thanks' });
    } catch (error) {
        console.error('Translation fetch failed:', error);
        t = await getTranslations({ locale: 'en', namespace: 'metadata.thanks' });
    }

    return {
        title: t('title'),
        description: t('desc'),
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
            index: false,
            follow: false,
            nocache: false,
            googleBot: {
                index: false,
                follow: false,
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

const Page = () => {
    return (
        <>
            <div className='thanks_page'>
                <Content />
            </div>
        </>
    )
}

export default Page