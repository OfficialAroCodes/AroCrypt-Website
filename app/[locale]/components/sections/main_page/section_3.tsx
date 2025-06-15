'use client'

import React from 'react'
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const Section_3 = () => {
    const t = useTranslations();

    return (
        <div className='section'>
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
                >{t('features')}</motion.h1>
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
                    <p className='section_info'>{t('features_desc')}</p>
                </motion.div>
            </div>
            <div className='feature_boxes'>
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
                    className='feature_box'
                >
                    <span className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" viewBox="0 0 256 256"><path d="M224,168v40H152V168Z" opacity="0.2"></path><path d="M232,88v16a8,8,0,0,1-16,0V88H130.67a16.12,16.12,0,0,1-9.6-3.2L93.33,64H40V200h72a8,8,0,0,1,0,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216A16,16,0,0,1,232,88Zm0,80v40a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8h8v-4a28,28,0,0,1,56,0v4h8A8,8,0,0,1,232,168Zm-56-8h24v-4a12,12,0,0,0-24,0Zm40,16H160v24h56Z"></path></svg>
                    </span>
                    <div className='content'>
                        <p className='title'>{t('feature_boxes.box1.title')}</p>
                        <p className='info'>{t('feature_boxes.box1.desc')}</p>
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
                    className='feature_box'
                >
                    <span className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" viewBox="0 0 256 256"><path d="M232,104v96H80V168h48V104Z" opacity="0.2"></path><path d="M128,96H232a8,8,0,0,1,0,16H128a8,8,0,0,1,0-16Zm104,32H128a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm0,32H80a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM96,144a8,8,0,0,0,0-16H88V64h32v8a8,8,0,0,0,16,0V56a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V72a8,8,0,0,0,16,0V64H72v64H64a8,8,0,0,0,0,16Z"></path></svg>
                    </span>
                    <div className='content'>
                        <p className='title'>{t('feature_boxes.box2.title')}</p>
                        <p className='info'>{t('feature_boxes.box2.desc')}</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01],
                        },
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='feature_box'
                >
                    <span className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" viewBox="0 0 256 256"><path d="M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path></svg>
                    </span>
                    <div className='content'>
                        <p className='title'>{t('feature_boxes.box3.title')}</p>
                        <p className='info'>{t('feature_boxes.box3.desc')}</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            delay: 0.25,
                            ease: [0, 0.71, 0.2, 1.01],
                        },
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='feature_box'
                >
                    <span className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="currentColor" viewBox="0 0 256 256"><path d="M196.3,134.65,68.19,214.77A8,8,0,0,1,56,208.12V47.88a8,8,0,0,1,12.19-6.65L196.3,121.35A7.83,7.83,0,0,1,196.3,134.65Z" opacity="0.2"></path><path d="M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z"></path></svg>
                    </span>
                    <div className='content'>
                        <p className='title'>{t('feature_boxes.box4.title')}</p>
                        <p className='info'>{t('feature_boxes.box4.desc')}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Section_3
