import { Metadata } from 'next';
import ReleaseContent from './Content';

export const metadata: Metadata = {
    title: 'AroCrypt Releases | Latest Encryption Software Download',
    description: 'Download the latest version of AroCrypt, featuring top-notch encryption and security updates.',
    keywords: ['AroCrypt', 'encryption software', 'secure file transfer', 'latest release', 'download'],
    openGraph: {
        title: 'Download AroCrypt - Latest Version',
        description: 'Stay secure with AroCrypt. Download the newest release for advanced encryption and protection.',
        url: 'https://arocrypt.vercel.app/releases',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Page() {
    return (
        <div className='releases_section'>
            <ReleaseContent />
        </div>
    );
};