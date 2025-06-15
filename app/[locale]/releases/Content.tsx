'use client'

import DownloadBox from '@/[locale]/components/releases/DownloadBox';
import ReleaseNotes from '@/[locale]/components/releases/ReleaseNotes';
import BlurText from '@/[locale]/components/ui/BlurText';
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface GitHubAsset {
    id: number;
    name: string;
    browser_download_url: string;
    size: number;
}

interface GitHubRelease {
    id: number;
    tag_name: string;
    published_at: string;
    assets: GitHubAsset[];
    body: string;
}

const ReleaseContent = () => {
    const t = useTranslations();
    const [versions, setVersions] = useState<GitHubRelease[]>([]);
    const [selectedVersion, setSelectedVersion] = useState<GitHubRelease | null>(null);

    useEffect(() => {
        const fetchReleases = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/OfficialAroCodes/arocrypt/releases', {
                    headers: {
                        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
                    }
                });
                const data: GitHubRelease[] = await response.json();
                setVersions(data);
                setSelectedVersion(data[0]);
            } catch (error) {
                console.error('Error fetching releases:', error);
            }
        };

        fetchReleases();
    }, []);

    const handleVersionClick = (version: GitHubRelease) => {
        setSelectedVersion(version);
    };

    return (
        <>
            <div className='section_details'>
                <BlurText
                    text={`AroCrypt ${t('releases')}`}
                    delay={100}
                    animateBy="words"
                    direction="top"
                    className='section_header'
                />
                <motion.div
                    initial={{ opacity: 0, y: -2 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        },
                    }}
                >
                    <p className='section_info'>{t('releases_info')}</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.8,
                        delay: 0.8,
                        ease: [0, 0.71, 0.2, 1.01],
                    },
                }}
                className='releases_main_box'
            >
                <div className='versions_list'>
                    <p className='info'>{t('versions')}</p>
                    {versions.map(version => (
                        <button
                            key={version.id}
                            className={`version_button ${selectedVersion === version ? 'active' : ''}`}
                            onClick={() => handleVersionClick(version)}
                        >
                            {version.tag_name}
                        </button>
                    ))}
                </div>

                <div className='release_info'>
                    {selectedVersion && (
                        <>
                            <div className='releases_top'>
                                <p className='release_version'>{selectedVersion.tag_name}</p>
                                <p className='release_date'>{new Date(selectedVersion.published_at).toLocaleDateString()}</p>
                            </div>
                            <span className='line' />
                            <DownloadBox selectedVersion={selectedVersion} />
                            <span className='line' />
                            <ReleaseNotes markdownContent={selectedVersion.body} />
                        </>
                    )}
                </div>
            </motion.div>
        </>
    )
}

export default ReleaseContent
