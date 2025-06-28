import { Metadata } from "next";
import DownloadContent from "./Content"

export const metadata: Metadata = {
    title: "AroCrypt Download for Windows, Linux, and macOS",
    description:
        "Download AroCrypt, the cross-platform encryption and steganography tool built for privacy-first users. Secure your files instantly on Windows, Linux, or macOS.",
    keywords: [
        "AroCrypt",
        "download encryption tool",
        "Windows file encryption",
        "Linux cryptography",
        "macOS privacy app",
        "secure file transfer",
        "AES encryption",
        "steganography software",
    ],
    openGraph: {
        title: "Download AroCrypt for Windows, Linux & macOS",
        description:
            "Get the latest AroCrypt release for your OS. Fast, secure encryption and advanced steganography packed into one tool.",
        url: "https://arocrypt.vercel.app/download",
        siteName: "AroCrypt",
        images: [
            {
                url: "/images/other/og.png",
                width: 1200,
                height: 630,
                alt: "Download AroCrypt for All Platforms",
                type: "image/png",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "AroCrypt – Download for All Platforms",
        description:
            "One tool. Three platforms. Encrypt and hide your data with AroCrypt on Windows, Linux, and macOS.",
        creator: "@AroCodes",
        images: ["/images/other/og.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};

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
