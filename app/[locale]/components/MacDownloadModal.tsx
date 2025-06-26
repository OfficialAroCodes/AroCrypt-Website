import { useTranslations } from 'next-intl';
import React from 'react'

interface MacDownloadModalProps {
    downloadLink: string;
    isShown: boolean;
    onClose?: () => void;
}

const MacDownloadModal: React.FC<MacDownloadModalProps> = ({ downloadLink, isShown, onClose }) => {
    const t = useTranslations();
    if (!isShown) return null;

    const handleClose = () => {
        if (onClose) onClose();
    };

    return (
        <div className='modal_box'>
            <p className='header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256"><path d="M224,56V90.06h0a44,44,0,1,0-56,67.88h0V192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M128,136a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h48A8,8,0,0,1,128,136Zm-8-40H72a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Zm112,65.47V224A8,8,0,0,1,220,231l-24-13.74L172,231A8,8,0,0,1,160,224V200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16V86.53a51.88,51.88,0,0,1,0,74.94ZM160,184V161.47A52,52,0,0,1,216,76V56H40V184Zm56-12a51.88,51.88,0,0,1-40,0v38.22l16-9.16a8,8,0,0,1,7.94,0l16,9.16Zm16-48a36,36,0,1,0-36,36A36,36,0,0,0,232,124Z"></path></svg>
                {t("unsigned_app.header")}
            </p>
            <div className='content'>
                <p>{t("unsigned_app.info")}</p>
                <span className='line' />
                <p>{t("unsigned_app.how_to")} <a
                    href="https://github.com/OfficialAroCodes/AroCrypt?tab=readme-ov-file#%EF%B8%8F-how-to-install-on-macos-unsigned-app-warning"
                    target='_blink'
                >Github Readme</a></p>
            </div>
            <div className='modal_buttons'>
                <button className="modal_button cancel" onClick={handleClose}>{t("unsigned_app.cancel")}</button>
                <a
                    href={downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal_button download"
                >
                    {t("unsigned_app.download")}
                </a>
            </div>
        </div>
    );
};

export default MacDownloadModal;