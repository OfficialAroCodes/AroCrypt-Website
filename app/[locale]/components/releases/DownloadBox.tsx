import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

interface ReleaseAsset {
    name: string;
    browser_download_url: string;
    size: number,
}

interface SelectedVersion {
    assets: ReleaseAsset[];
    tag_name: string;
}

interface DownloadBoxProps {
    selectedVersion: SelectedVersion | null;
}

const DownloadBox: FC<DownloadBoxProps> = ({ selectedVersion }) => {
    const [isCopied, setIsCopied] = useState(false);

    const t = useTranslations();
    if (!selectedVersion) return null;

    const windowsAssets = selectedVersion.assets.filter(a =>
        a.name.toLowerCase().endsWith('.exe')
    );

    const linuxAssets = selectedVersion.assets.filter(a =>
        a.name.toLowerCase().endsWith('.appimage') ||
        a.name.toLowerCase().endsWith('.deb') ||
        a.name.toLowerCase().endsWith('.tar.gz')
    );

    const bytesToMB = (bytes: number): string => {
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const copyCommand = async (text: string) => {
        try {
            setIsCopied(true);
            await navigator.clipboard.writeText(text);
            setTimeout(() => {
                setIsCopied(false);
            }, 1200);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="download_box">
            <div className='os_box'>
                <p className='info'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M104,144v51.64a8,8,0,0,1-8,8,8.54,8.54,0,0,1-1.43-.13l-64-11.64A8,8,0,0,1,24,184V144a8,8,0,0,1,8-8H96A8,8,0,0,1,104,144Zm-2.87-89.78a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,24,72v40a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V60.36A8,8,0,0,0,101.13,54.22ZM208,136H128a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,208,224a8,8,0,0,0,8-8V144A8,8,0,0,0,208,136Zm5.13-102.14a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,120,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,213.13,33.86Z"></path></svg>
                    <span>Windows (x64)</span>
                </p>
                <div className='download_buttons'>
                    {windowsAssets.length > 0 ? (
                        windowsAssets.map(asset => (
                            <a
                                key={asset.name}
                                href={asset.browser_download_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='download_button'
                            >
                                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z"></path></svg>
                                    {asset.name}
                                </span>
                                <span className='mb'>{bytesToMB(asset.size)}</span>
                            </a>
                        ))
                    ) : (
                        <p className="not_available">
                            {t("windows_unavailable")}
                            <a
                                href={`https://github.com/OfficialAroCodes/arocrypt/releases/${selectedVersion.tag_name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub Releases
                            </a>
                        </p>
                    )}
                </div>
                <div className='d_info'>
                    {t("rel_winget_info")}
                    <div className='code_block'>
                        <code>winget install arocrypt</code>
                        <button onClick={() => copyCommand("winget install arocrypt")} className='copy_btn'>
                            {
                                isCopied ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>

                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                                )
                            }

                        </button>
                    </div>
                </div>
            </div>

            <div className='os_box'>
                <p className='info'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M161.22,209.74a4,4,0,0,1-3.31,6.26H98.1a4,4,0,0,1-3.31-6.26,40,40,0,0,1,66.43,0Zm68.93,3.37a8.29,8.29,0,0,1-6.43,2.89H184.56a4,4,0,0,1-3.76-2.65,56,56,0,0,0-105.59,0A4,4,0,0,1,71.45,216H32.23a8.2,8.2,0,0,1-6.42-2.93A8,8,0,0,1,25.75,203c.06-.07,7.64-9.78,15.12-28.72C47.77,156.8,56,127.64,56,88a72,72,0,0,1,144,0c0,39.64,8.23,68.8,15.13,86.28,7.48,18.94,15.06,28.65,15.13,28.74A8,8,0,0,1,230.15,213.11ZM88,100a12,12,0,1,0,12-12A12,12,0,0,0,88,100Zm79.16,32.42a8,8,0,0,0-10.73-3.58L128,143.06,99.58,128.84a8,8,0,0,0-7.15,14.32l32,16a8,8,0,0,0,7.15,0l32-16A8,8,0,0,0,167.16,132.42ZM168,100a12,12,0,1,0-12,12A12,12,0,0,0,168,100Z"></path></svg>
                    <span>Linux</span>
                </p>
                <div className='download_buttons'>
                    {linuxAssets.length > 0 ? (
                        linuxAssets.map(asset => (
                            <a
                                key={asset.name}
                                href={asset.browser_download_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='download_button'
                            >
                                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z"></path></svg>
                                    {asset.name}
                                </span>
                                <span className='mb'>{bytesToMB(asset.size)}</span>
                            </a>
                        ))
                    ) : (
                        <p className="not_available">
                            {t("linux_unavailable")}
                            <a
                                href={`https://github.com/OfficialAroCodes/arocrypt/releases/${selectedVersion.tag_name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >GitHub Releases
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DownloadBox;