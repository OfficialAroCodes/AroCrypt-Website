import { Metadata } from "next";
import DownloadContent from "./Content"

export const metadata: Metadata = {
    title: 'AroCrypt Download for Windows, Linux and macOS',
    description: 'Download AroCrypt for secure, fast encryption. Keep your data safe with the latest release.',
    keywords: ['AroCrypt', 'secure encryption download', 'file protection', 'cryptography software'],
    openGraph: {
        title: 'AroCrypt Download for Windows, Linux and macOS',
        description: 'Get the latest AroCrypt version for ultimate data encryption and protection with steganography.',
        url: 'https://arocrypt.vercel.app/download',
    },
    robots: {
        index: true,
        follow: true,
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
