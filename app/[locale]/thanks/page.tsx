'use client'

import React, { useEffect, useRef } from 'react'
import SplitText from '../components/ui/SplitText'
import confetti from 'canvas-confetti'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useGithub } from '../providers/GithubProvider'

const Page = () => {
    const t = useTranslations();
    const end = Date.now() + 120 * 1000;
    const colors = [
        "#ff6b35",
        "#ff9248",
        "#ffb84c",
        "#ffd56b",
        "#ff8fa3",
        "#ffc09f"
    ];

    const animationFrameId = useRef<number | null>(null);

    const frame = () => {
        if (Date.now() > end) return;

        confetti({
            particleCount: 2,
            angle: 60,
            spread: 80,
            startVelocity: 80,
            origin: { x: -0.05, y: 0.5 },
            colors: colors,
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 80,
            startVelocity: 80,
            origin: { x: 1.05, y: 0.5 },
            colors: colors,
        });

        animationFrameId.current = requestAnimationFrame(frame);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            frame();
        }, 300);

        return () => {
            clearTimeout(timeoutId);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    const router = useRouter();
    const DownloadLink = useGithub().tempDownloadLink;

    const handleDownloadAgain = () => {
        if (DownloadLink !== null) {
            window.location.href = DownloadLink;
        } else {
            router.push('/download');
        }
    }

    return (
        <>
            <div className='thanks_page'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Image
                        className='logo'
                        src={"/images/other/logo.png"}
                        alt='Logo'
                        width={100}
                        height={100}
                        sizes="(max-width: 1024px) 180px, 540px"
                        priority
                    />
                </motion.div>
                <div className='thanks_texts'>
                    <SplitText
                        splitType='words'
                        duration={3}
                        delay={140}
                        text={t('thanks.title')}
                        className='section_header'
                    />
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                        }}
                    >
                        <p className='thanks_info'>
                            {
                                t.rich('thanks.desc', {
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
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01],
                        },
                    }}
                    className='thanks_btns'
                >
                    <button
                        onClick={handleDownloadAgain}
                        className='main_btn primary'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M232,136v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H224A8,8,0,0,1,232,136Z" opacity="0.2"></path><path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H72a8,8,0,0,1,0,16H32v64H224V136H184a8,8,0,0,1,0-16h40A16,16,0,0,1,240,136Zm-117.66-2.34a8,8,0,0,0,11.32,0l48-48a8,8,0,0,0-11.32-11.32L136,108.69V24a8,8,0,0,0-16,0v84.69L85.66,74.34A8,8,0,0,0,74.34,85.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"></path></svg>
                        {t('thanks.download_again')}
                    </button>
                    <a
                        href='https://github.com/OfficialAroCodes/AroCrypt'
                        target="_blank"
                        className='main_btn borderbtn'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z" opacity="0.2"></path><path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path></svg>
                        {t('source_code')}
                    </a>
                </motion.div>
            </div>
        </>
    )
}

export default Page