import { Metadata } from 'next';
import ReleaseContent from './Content';

export const metadata: Metadata = {
    title: "AroCrypt Releases | View All Versions and Info",
    description:
        "Browse every AroCrypt release with detailed version info, change logs, and download links. Stay updated with the latest in encryption and steganography tech.",
    keywords: [
        "AroCrypt",
        "encryption software",
        "steganography tool",
        "secure file transfer",
        "latest release",
        "version history",
        "download encryption tool",
        "AroCrypt updates",
    ],
    openGraph: {
        title: "AroCrypt Releases | View All Versions and Info",
        description:
            "Browse every AroCrypt release with detailed version info, change logs, and download links. Stay updated with the latest in encryption and steganography tech.",
        url: "https://arocrypt.vercel.app/releases",
        siteName: "AroCrypt",
        images: [
            {
                url: "/images/other/og.png",
                width: 1200,
                height: 630,
                alt: "AroCrypt Releases Overview",
                type: "image/png",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "AroCrypt Releases | View All Versions and Info",
        description:
            "Browse every AroCrypt release with detailed info. Stay updated with the latest in encryption and steganography tech.",
        creator: "@AroCodes",
        images: ["/images/other/og.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};

export default function Page() {
    return (
        <div className='releases_section'>
            <ReleaseContent />
        </div>
    );
};