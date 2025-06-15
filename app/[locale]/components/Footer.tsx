'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import { ArrowIcon } from './ui/SVGIcons';
import { useTranslations } from 'next-intl';

const github_link = "https://github.com/OfficialAroCodes/arocrypt";

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
            viewport={{ once: false, amount: 0.2 }}
            className='footer_box'
        >
            <footer>
                <div className='logo_box'>
                    <Image
                        src="/images/other/logo.png"
                        alt='logo'
                        width={50}
                        height={50}
                        sizes="(max-width: 600px) 50px, 150px"
                        priority
                    />
                    <p className='logo_name'>{t("footer.site_info")}</p>
                    <a href={github_link} target='_blank'>{t("footer.open_source")} <ArrowIcon width={18} height={18} /></a>
                </div>
                <div className='links'>
                    <div className='box'>
                        <p className='header'>{t("footer.product")}</p>
                        <Link href={"/download"}>{t("download")}</Link>
                        <Link href={"/releases"}>{t("releases")}</Link>
                        <a href={github_link} target='_blank'>Github <ArrowIcon width={16} height={16} /></a>
                    </div>
                    <div className='box'>
                        <p className='header'>{t("footer.developer")}</p>
                        <a href='https://arocodes.rf.gd' target='_blank'>{t("footer.website")} <ArrowIcon width={18} height={18} /></a>
                        <a href="https://github.com/OfficialAroCodes" target='_blank'>Github <ArrowIcon width={18} height={18} /></a>
                        <a href="https://youtube.com/@Official_AroCodes" target='_blank'>Youtube <ArrowIcon width={18} height={18} /></a>
                    </div>
                </div>
            </footer>
        </motion.div>
    )
}

export default Footer
