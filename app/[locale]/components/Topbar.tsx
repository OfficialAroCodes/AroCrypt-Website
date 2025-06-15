"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import Image from "next/image";
import { motion } from "framer-motion";
import { useClickOutside } from "react-haiku";
import Link from "next/link";
import { ArrowIcon } from "./ui/SVGIcons";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { useChangeLanguage } from "./useChangeLanguage";

const Topbar: React.FC = () => {
    const changeLanguage = useChangeLanguage();

    const locale = useLocale();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);
    const t = useTranslations();

    const menuRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const [langMenuState, setLangMenuState] = useState(false);
    const [mobileMenuState, setMobileMenuState] = useState(false);

    const handleClickOutside = () => setLangMenuState(false);
    useClickOutside(menuRef, handleClickOutside);

    const handleClickOutsideMobile = () => setMobileMenuState(false);
    useClickOutside(mobileMenuRef, handleClickOutsideMobile);

    useEffect(() => {
        setMounted(true);
    }, []);

    const path_name = usePathname();

    if (!mounted) {
        return <div className="navbar_position"></div>;
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className="navbar_position"
            >
                <nav>
                    <div className="logo_section">
                        <Link href="/" className={`logo_box ${path_name === "/" ? 'active' : ''}`}>
                            <Image
                                src="/images/other/logo.png"
                                alt="logo"
                                width="38"
                                height="38"
                                sizes="(max-width: 600px) 38px, 114px"
                                priority
                            />
                        </Link>
                        <div className="links">
                            <Link
                                href="/releases"
                                className={`${path_name === "/releases" ? 'active' : ''}`}
                            >
                                <p>{t('releases')}</p>
                            </Link>
                            <a href="https://github.com/OfficialAroCodes/arocrypt/" target="_blank">
                                <p>
                                    {t('source_code')}
                                    <ArrowIcon width={20} height={20} />
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="right_buttons">
                        <button
                            className="topbar_btn"
                            onClick={toggleTheme}
                            aria-label="Theme Changer"
                        >
                            {theme === "light" ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                                </svg>
                            )}
                        </button>
                        <div className="lang_content" ref={menuRef}>
                            <button
                                aria-label="Language Change Button"
                                className={`topbar_btn ${langMenuState ? 'active' : ''}`}
                                onClick={() => setLangMenuState(!langMenuState)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path></svg>
                            </button>
                            <div className={`topbar_dropdown ${langMenuState ? 'show' : ''}`}>
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className={`dropdown_btn ${locale === "en" ? 'active' : ''}`}
                                >
                                    <Image
                                        src="/images/icons/en.png"
                                        alt="icon"
                                        width={24}
                                        height={24}
                                        sizes="(max-width: 600px) 24px, 72px"
                                    />
                                    <p>English</p>
                                </button>
                                <button
                                    onClick={() => changeLanguage('ru')}
                                    className={`dropdown_btn ${locale === "ru" ? 'active' : ''}`}
                                >
                                    <Image
                                        src="/images/icons/ru.png"
                                        alt="icon"
                                        width={24}
                                        height={24}
                                        sizes="(max-width: 600px) 24px, 72px"
                                    />
                                    <p>Русский</p>
                                </button>
                            </div>
                        </div>
                        <Link href={"/download"} className="main_btn primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path></svg>
                            {t('download')}
                        </Link>
                        <div ref={mobileMenuRef}>
                            <button onClick={() => {
                                setMobileMenuState(!mobileMenuState)
                            }}
                                className="main_btn primary mobile_btn"
                                aria-label="Mobile Menu BTN"
                            >
                                {
                                    mobileMenuState ? (
                                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>

                                    ) : (
                                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                        </svg>
                                    )
                                }
                            </button>
                            <div className={`mobile_menu_position ${mobileMenuState ? "show" : ''}`}>
                                <div className="mobile_menu">
                                    <Link
                                        className={`mm_button ${path_name === "/releases" ? 'active' : ''}`}
                                        href="/releases"
                                    >
                                        {t('releases')}
                                    </Link>
                                    <a
                                        className="mm_button"
                                        href="https://github.com/OfficialAroCodes/arocrypt/"
                                        target="_blank"
                                    >
                                        {t('source_code')}
                                        <ArrowIcon width={20} height={20} />
                                    </a>
                                    <Link href={"/download"} className="main_btn primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path></svg>
                                        {t('download')}
                                    </Link>
                                    <div className='announcement_block'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M200,72H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48,48,0,0,0,200,72ZM179,207.89l0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z"></path></svg>
                                        <p>{t('beta_warning')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className="announcement_block_position"
            >
                <div className='announcement_block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M200,72H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48,48,0,0,0,200,72ZM179,207.89l0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z"></path></svg>
                    <p>{t('beta_warning')}</p>
                </div>
            </motion.div>
        </>
    );
};

export default Topbar;
