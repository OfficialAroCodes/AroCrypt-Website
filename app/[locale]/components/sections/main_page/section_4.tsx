'use client'

import React from 'react'
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const Section_4 = () => {
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
                    >{t('encryption_power')}</motion.h1>
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
                        <p className='section_info'>
                            {t('encryption_power_desc')}
                        </p>
                    </motion.div>
                </div>
                <div className='algo_boxes'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
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
                        className='algo_box a1'
                    >
                        <span className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" fill="currentColor" viewBox="0 0 256 256"><path d="M128,48v80H40.87A146.29,146.29,0,0,1,40,112V56a8,8,0,0,1,8-8Zm0,80V232s78.06-21.3,87.13-104Z" opacity="0.2"></path><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.27,47,25.53a8,8,0,0,0,4.2,0c1-.26,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40ZM120,220.55a130.85,130.85,0,0,1-30.93-18.74c-21.15-17.3-34.2-39.37-39-65.81H120ZM120,120H48.23c-.15-2.63-.23-5.29-.23-8l0-56h72Zm47.4,81.42A131.31,131.31,0,0,1,136,220.53V136h69.91C201.16,162.24,188.27,184.18,167.4,201.42ZM208,112c0,2.71-.08,5.37-.23,8H136V56h72Z"></path></svg>
                        </span>
                        <div className='content'>
                            <p className='title'>{t('ep_boxes.box1.title')}</p>
                            <p className='info'>{t('ep_boxes.box1.desc')}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 0.8,
                                delay: 0.15,
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='algo_box a2'
                    >
                        <span className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" fill="currentColor" viewBox="0 0 256 256"><path d="M188.82,82,128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82ZM64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128,67.2,173.6A8,8,0,0,0,64,180Z" opacity="0.2"></path><path d="M200,75.64V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.59A16.09,16.09,0,0,0,200,75.64ZM184,216H72V180l56-42,56,42.35Zm0-140.36L128,118,72,76V40H184Z"></path></svg>
                        </span>
                        <div className='content'>
                            <p className='title'>{t('ep_boxes.box2.title')}</p>
                            <p className='info'>{t('ep_boxes.box2.desc')}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='algo_box a3 full-width'
                    >
                        <span className='icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" fill="currentColor" viewBox="0 0 256 256"><path d="M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Z" opacity="0.2"></path><path d="M200,152a31.84,31.84,0,0,0-19.53,6.68l-23.11-18A31.65,31.65,0,0,0,160,128c0-.74,0-1.48-.08-2.21l13.23-4.41A32,32,0,1,0,168,104c0,.74,0,1.48.08,2.21l-13.23,4.41A32,32,0,0,0,128,96a32.59,32.59,0,0,0-5.27.44L115.89,81A32,32,0,1,0,96,88a32.59,32.59,0,0,0,5.27-.44l6.84,15.4a31.92,31.92,0,0,0-8.57,39.64L73.83,165.44a32.06,32.06,0,1,0,10.63,12l25.71-22.84a31.91,31.91,0,0,0,37.36-1.24l23.11,18A31.65,31.65,0,0,0,168,184a32,32,0,1,0,32-32Zm0-64a16,16,0,1,1-16,16A16,16,0,0,1,200,88ZM80,56A16,16,0,1,1,96,72,16,16,0,0,1,80,56ZM56,208a16,16,0,1,1,16-16A16,16,0,0,1,56,208Zm56-80a16,16,0,1,1,16,16A16,16,0,0,1,112,128Zm88,72a16,16,0,1,1,16-16A16,16,0,0,1,200,200Z"></path></svg>
                        </span>
                        <div className='content'>
                            <p className='title'>{t('ep_boxes.box3.title')}</p>
                            <p className='info'>{t('ep_boxes.box3.desc')}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Section_4
