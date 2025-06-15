import { Metadata } from "next";
import DownloadContent from "./Content"

export const metadata: Metadata = {
    title: 'AroCrypt Download | Secure Encryption Software',
    description: 'Download AroCrypt for secure, fast encryption. Keep your data safe with the latest release.',
    keywords: ['AroCrypt', 'secure encryption download', 'file protection', 'cryptography software'],
    openGraph: {
        title: 'Download AroCrypt - Secure Your Files',
        description: 'Get the latest AroCrypt version for ultimate data encryption and protection.',
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
