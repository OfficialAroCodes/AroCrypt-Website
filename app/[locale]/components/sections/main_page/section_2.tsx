'use client'

import React from 'react'
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const Section_2 = () => {
    const t = useTranslations();
    return (
        <div className='colored_section_box'>
            <div className='section colored'>
                <div className='section_details'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.8,
                                delay: 0.0,
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='section_header'
                    >AroCrypt</motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <p className='section_info'>{t("section2_boxes.section_info")}</p>
                    </motion.div>
                </div>
                <div className='section2_boxes'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.8,
                                delay: 0.0,
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='section2_box'
                    >
                        <span className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 256 256"><path d="M184,120v61.65a8,8,0,0,1-2.34,5.65l-34.35,34.35a8,8,0,0,1-13.57-4.53L128,176ZM136,72H74.35a8,8,0,0,0-5.65,2.34L34.35,108.69a8,8,0,0,0,4.53,13.57L80,128ZM40,216c37.65,0,50.69-19.69,54.56-28.18L68.18,161.44C59.69,165.31,40,178.35,40,216Z" opacity="0.2"></path><path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"></path></svg>
                        </span>
                        <div className='section2_box_content'>
                            <p className='title'>{t('section2_boxes.box1.title')}</p>
                            <p className='description'>{t('section2_boxes.box1.description')}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='section2_box'
                    >
                        <span className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 256 256"><path d="M104,104V208H40a8,8,0,0,1-8-8V104Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"></path></svg>
                        </span>
                        <div className='section2_box_content'>
                            <p className='title'>{t('section2_boxes.box2.title')}</p>
                            <p className='description'>{t('section2_boxes.box2.description')}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.8,
                                delay: 0.15,
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='section2_box'
                    >
                        <span className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 256 256"><path d="M224,80l-96,56L32,80l96-56Z" opacity="0.2"></path><path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path></svg>
                        </span>
                        <div className='section2_box_content'>
                            <p className='title'>{t('section2_boxes.box3.title')}</p>
                            <p className='description'>{t('section2_boxes.box3.description')}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Section_2
