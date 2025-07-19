'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import { ArrowIcon } from './ui/SVGIcons';
import { useTranslations } from 'next-intl';
import Github_Repo_Link, { Discord_Link, Telegram_Link } from '../utils/socialLinks';

const Footer = () => {
    const t = useTranslations();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className='footer_box'
        >
            <footer>
                <div className='top'>
                    <div className='app'>
                        <Image
                            src="/images/other/logo.png"
                            alt='logo'
                            width={44}
                            height={44}
                            sizes="(max-width: 600px) 50px, 150px"
                            priority
                        />
                        <p className='app_name'>AroCrypt</p>
                    </div>
                    <div className='links'>
                        <Link href={"/releases"}>{t("releases")}</Link>
                        <Link href={"/download"}>{t("download")}</Link>
                        <a href={Github_Repo_Link} target='_blank'>Github <ArrowIcon width={16} height={16} /></a>
                    </div>
                </div>
                <span className='line' />
                <div className='social_links'>
                    <a href={Discord_Link} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path></svg>
                        Discord
                    </a>
                    <a href={Telegram_Link} target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M228.88,26.19a9,9,0,0,0-9.16-1.57L17.06,103.93a14.22,14.22,0,0,0,2.43,27.21L72,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L165,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L231.77,35A9,9,0,0,0,228.88,26.19ZM175.53,208,92.85,135.5l119-85.29Z"></path></svg>
                        Telegram
                    </a>
                    <a href='mailto:app.arocrypt@gmail.com' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg>
                        app.arocrypt@gmail.com
                    </a>
                </div>
                <p className='copyright_text'>© 2025 AroCrypt. {t('footer.rights')}.</p>
            </footer>
        </motion.div>
    )
}

export default Footer
