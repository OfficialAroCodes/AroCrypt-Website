import en from '@/i18n/messages/en.json';
import ru from '@/i18n/messages/ru.json';
import type { Metadata } from "next";
import ReleaseContent from './Content';

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
    };
    metadataBase: URL;
}

const meta: Record<string, MetaData> = {
    en: {
        title: en.metadata.releases.title,
        description: en.metadata.releases.desc,
        keywords: Object.values(en.metadata.releases.keywords),
        authors: [{ name: 'AroCodes', url: 'https://github.com/OfficialAroCodes' }],
        icons: {
            icon: [{ url: '/images/other/logo.png', type: 'image/png' }],
        },
        openGraph: {
            title: en.metadata.releases.title,
            description: en.metadata.releases.desc,
            url: 'https://arocrypt.vercel.app/releases',
            siteName: 'AroCrypt',
            images: [
                {
                    url: '/images/other/og.png',
                    width: 1200,
                    height: 630,
                    alt: 'AroCrypt Releases',
                    type: 'image/png',
                },
            ],
            type: 'website',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: en.metadata.releases.title,
            description: en.metadata.releases.x_desc,
            creator: '@arocodes_dev',
            images: ['/images/other/og.png'],
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
        },
        metadataBase: new URL('https://arocrypt.vercel.app'),
    },
    ru: {
        title: ru.metadata.releases.title,
        description: ru.metadata.releases.desc,
        keywords: Object.values(ru.metadata.releases.keywords),
        authors: [{ name: 'AroCodes', url: 'https://github.com/OfficialAroCodes' }],
        icons: {
            icon: [{ url: '/images/other/logo.png', type: 'image/png' }],
        },
        openGraph: {
            title: ru.metadata.releases.title,
            description: ru.metadata.releases.desc,
            url: 'https://arocrypt.vercel.app/releases',
            siteName: 'AroCrypt',
            images: [
                {
                    url: '/images/other/og.png',
                    width: 1200,
                    height: 630,
                    alt: 'AroCrypt Releases',
                    type: 'image/png',
                },
            ],
            type: 'website',
            locale: 'ru_RU',
        },
        twitter: {
            card: 'summary_large_image',
            title: ru.metadata.releases.title,
            description: ru.metadata.releases.x_desc,
            creator: '@arocodes_dev',
            images: ['/images/other/og.png'],
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
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
        description: meta[selectedLocale]?.description,
        keywords: meta[selectedLocale].keywords,
        authors: meta[selectedLocale].authors,
        icons: meta[selectedLocale].icons,
        openGraph: meta[selectedLocale].openGraph,
        twitter: meta[selectedLocale].twitter,
        robots: meta[selectedLocale].robots,
        metadataBase: meta[selectedLocale].metadataBase,
    };
}

export default function Page() {
    return (
        <div className='releases_section'>
            <ReleaseContent />
        </div>
    );
};