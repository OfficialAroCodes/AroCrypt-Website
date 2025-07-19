import { Metadata } from "next";
import DownloadContent from "./Content"
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;

    let t;
    try {
        t = await getTranslations({ locale, namespace: 'metadata.download' });
    } catch (error) {
        console.error('Translation fetch failed:', error);
        t = await getTranslations({ locale: 'en', namespace: 'metadata.download' });
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

const page = () => {
    return (
        <div className='download_section'>
            <div className='download_main_box'>
                <DownloadContent />
            </div>
        </div>
    )
}

export default page
