import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
    macModal: boolean;
    macDownloadLink: string;
    openMacModal: (link: string) => void;
    closeMacModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error('useModal must be used within a ModalProvider');
    return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [macModal, setMacModal] = useState(false);
    const [macDownloadLink, setMacDownloadLink] = useState('');

    const openMacModal = (link: string) => {
        setMacDownloadLink(link);
        setMacModal(true);
    };

    const closeMacModal = () => setMacModal(false);

    return (
        <ModalContext.Provider value={{ macModal, macDownloadLink, openMacModal, closeMacModal }}>
            {children}
        </ModalContext.Provider>
    );
};