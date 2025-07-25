'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion'
import { useMemo } from 'react';
import { useGithub } from '../providers/GithubProvider';
import type { GitHubAsset } from '../providers/GithubProvider';
import SplitText from '../components/ui/SplitText';
import { useRouter } from 'next/navigation';
import { useModal } from '../providers/MacModalProvider';

const DownloadIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z" opacity="0.2"></path><path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path></svg>
)

function parseAssets(assets: GitHubAsset[]) {
    return {
        winFiles: assets
            .filter(asset => asset.name.endsWith('.exe'))
            .map(asset => ({
                name: asset.name,
                url: asset.browser_download_url,
                sizeMB: (asset.size / (1024 * 1024)).toFixed(2),
            })),
        linuxFiles: assets
            .filter(asset => asset.name.endsWith('.deb') || asset.name.endsWith('.AppImage'))
            .map(asset => ({
                name: asset.name,
                url: asset.browser_download_url,
                sizeMB: (asset.size / (1024 * 1024)).toFixed(2),
            })),
        macFiles: assets
            .filter(asset => asset.name.endsWith('.dmg'))
            .map(asset => ({
                name: asset.name,
                url: asset.browser_download_url,
                sizeMB: (asset.size / (1024 * 1024)).toFixed(2),
            })),
    };
}

const DownloadContent = () => {
    const router = useRouter();
    const t = useTranslations();
    const { releases, error, setTempDownloadLink } = useGithub();
    const { openMacModal } = useModal();

    const titleFrom = useMemo(() => ({ opacity: 0, y: -10 }), []);
    const titleTo = useMemo(() => ({ opacity: 1, y: 0 }), []);
    const descFrom = useMemo(() => ({ opacity: 0, y: -6 }), []);
    const descTo = useMemo(() => ({ opacity: 1, y: 0 }), []);

    if (error) return <p>Error: {error}</p>;
    if (!releases || releases.length === 0) return null;

    const latestRelease = releases.reduce((latest, current) =>
        new Date(current.published_at) > new Date(latest.published_at) ? current : latest
    );
    const { winFiles, linuxFiles, macFiles } = parseAssets(latestRelease.assets);

    return (
        <>
            <div className='section_details'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.90 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Image
                        className='logo'
                        src={"/images/other/logo.png"}
                        alt='Logo'
                        width={80}
                        height={80}
                        sizes="(max-width: 1024px) 180px, 540px"
                        priority
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.6,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01],
                        },
                    }}
                    className='section_header_box'
                >
                    <SplitText
                        splitType='chars'
                        from={titleFrom}
                        to={titleTo}
                        duration={2}
                        delay={30}
                        text={t('download_page.header')}
                        className='section_header'
                    />
                    <SplitText
                        splitType='words'
                        from={descFrom}
                        to={descTo}
                        duration={3}
                        delay={60}
                        text={t("download_page.info")}
                        className='section_info'
                    />
                </motion.div>
            </div>
            <div className='content'>
                <div className='download_boxes'>
                    <motion.div
                        initial={{ opacity: 0, y: 14, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className='box'
                    >
                        <p className='os_name'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M104,144v51.64a8,8,0,0,1-8,8,8.54,8.54,0,0,1-1.43-.13l-64-11.64A8,8,0,0,1,24,184V144a8,8,0,0,1,8-8H96A8,8,0,0,1,104,144Zm-2.87-89.78a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,24,72v40a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V60.36A8,8,0,0,0,101.13,54.22ZM208,136H128a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,208,224a8,8,0,0,0,8-8V144A8,8,0,0,0,208,136Zm5.13-102.14a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,120,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,213.13,33.86Z"></path></svg>
                            Windows</p>
                        {
                            winFiles.length > 0 ? (
                                winFiles.map((file, idx) => (
                                    <a
                                        key={idx}
                                        href={file.url}
                                        rel="noopener noreferrer"
                                        className='download_btn'
                                        onClick={() => {
                                            setTempDownloadLink(file.url);
                                            router.push('/thanks');
                                        }}
                                    >
                                        <div className='details'>
                                            <span className='icon'>{DownloadIcon}</span>
                                            <span>{file.name}</span>
                                        </div>
                                        <span className='small_info'>{file.sizeMB} MB</span>
                                    </a>
                                ))
                            ) : (
                                <p className="not_available">
                                    {t('windows_unavailable')}
                                </p>
                            )
                        }
                        <p className='info'>{t("windows_download_support")}</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 14, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className='box'
                    >
                        <p className='os_name'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M161.22,209.74a4,4,0,0,1-3.31,6.26H98.1a4,4,0,0,1-3.31-6.26,40,40,0,0,1,66.43,0Zm68.93,3.37a8.29,8.29,0,0,1-6.43,2.89H184.56a4,4,0,0,1-3.76-2.65,56,56,0,0,0-105.59,0A4,4,0,0,1,71.45,216H32.23a8.2,8.2,0,0,1-6.42-2.93A8,8,0,0,1,25.75,203c.06-.07,7.64-9.78,15.12-28.72C47.77,156.8,56,127.64,56,88a72,72,0,0,1,144,0c0,39.64,8.23,68.8,15.13,86.28,7.48,18.94,15.06,28.65,15.13,28.74A8,8,0,0,1,230.15,213.11ZM88,100a12,12,0,1,0,12-12A12,12,0,0,0,88,100Zm79.16,32.42a8,8,0,0,0-10.73-3.58L128,143.06,99.58,128.84a8,8,0,0,0-7.15,14.32l32,16a8,8,0,0,0,7.15,0l32-16A8,8,0,0,0,167.16,132.42ZM168,100a12,12,0,1,0-12,12A12,12,0,0,0,168,100Z"></path></svg>
                            Linux</p>
                        {
                            linuxFiles.length > 0 ? (
                                linuxFiles.map((file, idx) => (
                                    <a
                                        key={idx}
                                        href={file.url}
                                        rel="noopener noreferrer"
                                        className='download_btn'
                                        onClick={() => {
                                            setTempDownloadLink(file.url);
                                            router.push('/thanks');
                                        }}
                                    >
                                        <div className='details'>
                                            <span className='icon'>{DownloadIcon}</span>
                                            <span>{file.name}</span>
                                        </div>
                                        <span className='small_info'>{file.sizeMB} MB</span>
                                    </a>
                                ))
                            ) : (
                                <p className="not_available">
                                    {t('linux_unavailable')}
                                </p>
                            )
                        }
                        <p className='info'>{t("linux_download_support")}</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 14, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className='box'
                    >
                        <p className='os_name'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4ZM223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.23,72.23,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127,127,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Z"></path></svg>
                            macOS
                        </p>
                        {
                            macFiles.length > 0 ? (
                                macFiles.map((file, idx) => (
                                    <button
                                        key={idx}
                                        rel="noopener noreferrer"
                                        onClick={() => openMacModal(file.url)}
                                        className='download_btn'
                                    >
                                        <div className='details'>
                                            <span className='icon'>{DownloadIcon}</span>
                                            <span>{file.name}</span>
                                        </div>
                                        <span className='small_info'>{file.sizeMB} MB</span>
                                    </button>
                                ))
                            ) : (
                                <p className="not_available">
                                    {t('mac_unavailable')}
                                </p>
                            )
                        }
                        <p className='info'>{t("mac_download_support")}</p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default DownloadContent
