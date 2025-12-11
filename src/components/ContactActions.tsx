import React, { useState } from 'react';
import { LawyerProfile } from '../data/Data';
import { downloadVCard } from '../utils/VcfGenerator';
import styles from './ContactActions.module.css';
import { Share2 } from 'lucide-react';
import { ShareModal } from './ShareModal';

// SVG Components
const WhatsappIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382C17.112 14.022 15.202 13.082 14.842 12.962C14.482 12.842 14.212 12.962 13.942 13.322C13.672 13.682 12.922 14.552 12.682 14.822C12.442 15.092 12.202 15.122 11.842 14.942C11.482 14.762 10.322 14.382 8.942 13.152C7.862 12.192 7.142 11.002 6.932 10.642C6.722 10.282 6.912 10.092 7.092 9.912C7.252 9.752 7.452 9.492 7.632 9.282C7.812 9.072 7.872 8.922 7.992 8.682C8.112 8.442 8.052 8.232 7.962 8.052C7.872 7.872 7.152 6.092 6.852 5.372C6.552 4.672 6.252 4.762 6.022 4.762H5.482C5.242 4.762 4.852 4.852 4.522 5.212C4.192 5.572 3.262 6.442 3.262 8.212C3.262 9.982 4.552 11.692 4.732 11.932C4.912 12.172 7.302 15.862 10.962 17.442C13.482 18.532 13.982 18.312 14.522 18.262C15.062 18.212 16.262 17.572 16.512 16.872C16.762 16.172 16.762 15.582 16.692 15.462C16.622 15.342 16.432 15.262 16.072 15.082M12 21.75C10.272 21.75 8.662 21.312 7.232 20.532L7.122 20.462L3.5 21.412L4.472 17.882L4.402 17.762C3.542 16.212 3.052 14.442 3.052 12.572C3.052 7.632 7.072 3.612 12.012 3.612C14.402 3.612 16.652 4.542 18.342 6.232C20.032 7.922 20.962 10.162 20.962 12.562C20.962 17.502 16.942 21.75 12 21.75Z" />
    </svg>
);

const DownloadIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);


interface ContactActionsProps {
    data: LawyerProfile;
}

export const ContactActions: React.FC<ContactActionsProps> = ({ data }) => {
    const [showShare, setShowShare] = useState(false);

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Olá Dr. Rian! Vim através do seu Cartão Digital e gostaria de saber mais sobre aposentadorias.");
        window.open(`https://wa.me/${data.contact.whatsapp}?text=${message}`, '_blank');
    };

    const handleMaps = () => {
        window.open(data.address.mapsLink, '_blank');
    };

    const handleSaveContact = () => {
        downloadVCard(data);
    };

    return (
        <div className={styles.container}>
            {/* WhatsApp - Falar agora */}
            <button onClick={handleWhatsApp} className={`${styles.button} ${styles.whatsapp} animate-fade-in delay-100`}>
                <div className={styles.whatsappContent}>
                    <span className={styles.iconWrapper}><WhatsappIcon /></span>
                    <div className={styles.whatsappText}>
                        <span className={styles.whatsappLabel}>WhatsApp</span>
                        <span className={styles.whatsappSub}>Falar agora</span>
                    </div>
                </div>
                <span className={styles.arrow}>→</span>
            </button>

            {/* Endereço */}
            <button onClick={handleMaps} className={`${styles.button} ${styles.goldButton} animate-fade-in delay-200`}>
                <span className={styles.labelDark}>Endereço</span>
            </button>

            {/* Salvar Contato */}
            <button onClick={handleSaveContact} className={`${styles.button} ${styles.goldButton} animate-fade-in delay-300`}>
                <span className={styles.iconDark}><DownloadIcon /></span>
                <span className={styles.labelDark}>Salvar Contato</span>
            </button>

            {/* Compartilhar */}
            <button onClick={() => setShowShare(true)} className={`${styles.button} ${styles.goldButton} animate-fade-in delay-400`}>
                <span className={styles.iconDark}><Share2 size={24} /></span>
                <span className={styles.labelDark}>Compartilhar</span>
            </button>

            <ShareModal
                isOpen={showShare}
                onClose={() => setShowShare(false)}
                url={window.location.href}
            />
        </div>
    );
};
