'use client'

import DownloadBox from '@/[locale]/components/releases/DownloadBox';
import ReleaseNotes from '@/[locale]/components/releases/ReleaseNotes';
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { useState, useEffect, useMemo } from 'react';
import { useGithub } from '@/[locale]/providers/GithubProvider';
import type { GitHubRelease } from '@/[locale]/providers/GithubProvider';
import SplitText from '../components/ui/SplitText';

const ReleaseContent = () => {
    const t = useTranslations();
    const { releases, loading, error } = useGithub();
    const [selectedVersion, setSelectedVersion] = useState<GitHubRelease | null>(releases[0] || null);

    useEffect(() => {
        if (releases.length > 0) {
            setSelectedVersion(releases[0]);
        }
    }, [releases]);

    const handleVersionClick = (version: GitHubRelease) => {
        setSelectedVersion(version);
    };

    const latestVersion = releases.length > 0
        ? releases.reduce((latest, current) =>
            new Date(current.published_at) > new Date(latest.published_at) ? current : latest
        )
        : null;

    const titleFrom = useMemo(() => ({ opacity: 0, y: -16 }), []);
    const titleTo = useMemo(() => ({ opacity: 1, y: -8 }), []);
    const descFrom = useMemo(() => ({ opacity: 0, y: -6 }), []);
    const descTo = useMemo(() => ({ opacity: 1, y: 0 }), []);

    return (
        <>
            <div className='section_details'>
                <SplitText
                    splitType='chars'
                    from={titleFrom}
                    to={titleTo}
                    duration={2}
                    delay={30}
                    text={`AroCrypt ${t('releases')}`}
                    className='section_header'
                />
                <SplitText
                    splitType='words'
                    from={descFrom}
                    to={descTo}
                    duration={3}
                    delay={60}
                    text={t('releases_info')}
                    className='section_info'
                />
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 0.4,
                            ease: [0, 0.71, 0.2, 1.01],
                        },
                    }}
                    className='texts'
                >
                    <p className='section_link_text'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"></path></svg>
                        {
                            t.rich('join_community', {
                                discord: (chunks) => (
                                    <a href="https://discord.gg/uwzRmTuH9n" target="_blank" rel="noopener noreferrer">
                                        {chunks}
                                    </a>
                                ),
                                telegram: (chunks) => (
                                    <a href="https://t.me/arocrypt_channel" target="_blank" rel="noopener noreferrer">
                                        {chunks}
                                    </a>
                                )
                            })
                        }
                    </p>
                </motion.div>
            </div>

            {
                !loading ? (
                    error ? (
                        <p className='fetch_info_fail'>
                            Oops! We couldn’t fetch AroCrypt info from GitHub right now. Looks like the API rate limit for your IP was hit. Please try again a bit later.
                        </p>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                    delay: 0.6,
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
                                    {releases.map(version => (
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
                ) : ('')
            }
        </>
    )
}

export default ReleaseContent
