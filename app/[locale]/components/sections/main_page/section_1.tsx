'use client'

import React, { useMemo } from 'react'

import { motion } from "framer-motion";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import SplitText from '../../ui/SplitText';

const Section_1 = () => {
    const t = useTranslations();

    const titleFrom = useMemo(() => ({ opacity: 0, y: -16 }), []);
    const titleTo = useMemo(() => ({ opacity: 1, y: -8 }), []);
    const descFrom = useMemo(() => ({ opacity: 0, y: -6 }), []);
    const descTo = useMemo(() => ({ opacity: 1, y: 0 }), []);

    return (
        <>
            <div className="main_section">
                <div className="main_box">
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
                            splitType='words'
                            from={titleFrom}
                            to={titleTo}
                            duration={2.5}
                            delay={80}
                            text={t('main_section_header')}
                            className='section_header main'
                        />
                        <SplitText
                            splitType='words'
                            from={descFrom}
                            to={descTo}
                            duration={3}
                            delay={60}
                            text={t('main_section_description')}
                            className='text_info'
                        />
                    </motion.div>
                </div>
                <div className="main_download_box">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.7,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="main_btns"
                    >
                        <Link href={"/download"} className="main_btn primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path></svg>
                            {t('download_now')}
                        </Link>
                        <a href="https://github.com/OfficialAroCodes/arocrypt" target="_blank" className="main_btn borderbtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
                            {t('source_code')}</a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.9,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="download_info"
                    >
                        <p className="download_info">

                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M104,144v51.64a8,8,0,0,1-8,8,8.54,8.54,0,0,1-1.43-.13l-64-11.64A8,8,0,0,1,24,184V144a8,8,0,0,1,8-8H96A8,8,0,0,1,104,144Zm-2.87-89.78a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,24,72v40a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V60.36A8,8,0,0,0,101.13,54.22ZM208,136H128a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,208,224a8,8,0,0,0,8-8V144A8,8,0,0,0,208,136Zm5.13-102.14a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,120,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,213.13,33.86Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M161.22,209.74a4,4,0,0,1-3.31,6.26H98.1a4,4,0,0,1-3.31-6.26,40,40,0,0,1,66.43,0Zm68.93,3.37a8.29,8.29,0,0,1-6.43,2.89H184.56a4,4,0,0,1-3.76-2.65,56,56,0,0,0-105.59,0A4,4,0,0,1,71.45,216H32.23a8.2,8.2,0,0,1-6.42-2.93A8,8,0,0,1,25.75,203c.06-.07,7.64-9.78,15.12-28.72C47.77,156.8,56,127.64,56,88a72,72,0,0,1,144,0c0,39.64,8.23,68.8,15.13,86.28,7.48,18.94,15.06,28.65,15.13,28.74A8,8,0,0,1,230.15,213.11ZM88,100a12,12,0,1,0,12-12A12,12,0,0,0,88,100Zm79.16,32.42a8,8,0,0,0-10.73-3.58L128,143.06,99.58,128.84a8,8,0,0,0-7.15,14.32l32,16a8,8,0,0,0,7.15,0l32-16A8,8,0,0,0,167.16,132.42ZM168,100a12,12,0,1,0-12,12A12,12,0,0,0,168,100Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><path d="M128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4ZM223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.23,72.23,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127,127,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Z"></path></svg>
                            {t('available_for')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Section_1
