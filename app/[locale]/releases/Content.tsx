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
    const [isError, setErrorState] = useState(false);
    const [userIp, setUserIp] = useState("");

    useEffect(() => {
        const fetchReleases = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/OfficialAroCodes/arocrypt/releases');
                const data: GitHubRelease[] = await response.json();
                setVersions(data);
                setSelectedVersion(data[0]);
                setErrorState(response.status === 403);
            } catch (error) {
                setErrorState(true);
                console.error('Error fetching releases:', error);
            }
        };

        fetchReleases();

        fetch('https://api.ipquery.io/?format=json').then(
            response => response.json()
        ).then(data => {
            setUserIp(data.ip);
        });
    }, []);

    const handleVersionClick = (version: GitHubRelease) => {
        setSelectedVersion(version);
    };

    const latestVersion = versions.length > 0
        ? versions.reduce((latest, current) =>
            new Date(current.published_at) > new Date(latest.published_at) ? current : latest
        )
        : null;

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

            {
                isError ? (
                    <p className='fetch_info_fail'>
                        Failed to load AroCrypt info from GitHub. API responded with status 403 – rate limit exceeded for IP {userIp}.
                    </p>
                ) : (
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
                            <div className='content'>
                                <p className='info'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192Z"></path></svg>
                                    {t('versions')}
                                </p>
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
                                    <span className='line h3' />
                                    <ReleaseNotes markdownContent={selectedVersion.body} />
                                </>
                            )}
                        </div>

                        <div className='pin_board'>
                            <div className='content'>
                                <p className='info'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M224,176a8,8,0,0,1-8,8H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.29L70.46,48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16h-6.46l21.17,120H216A8,8,0,0,1,224,176Z"></path></svg>
                                    {t("pin_board.header")}
                                </p>
                                <div className='pin_content'>
                                    {t("pin_board.pin_1")}
                                </div>
                                <span className='line'></span>
                                <div className='pin_content'>
                                    {t("pin_board.pin_2")}
                                    <code>winget install arocrypt</code>
                                </div>
                                <span className='line'></span>
                                <div className='pin_content'>
                                    {t("pin_board.pin_3")} {latestVersion && latestVersion.tag_name}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )
            }
        </>
    )
}

export default ReleaseContent
