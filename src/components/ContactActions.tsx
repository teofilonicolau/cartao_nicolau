import React, { useState } from 'react';
import { LawyerProfile } from '../data/Data';
import { downloadVCard } from '../utils/VcfGenerator';
import styles from './ContactActions.module.css';
import { Share2 } from 'lucide-react';
import { ShareModal } from './ShareModal';

// SVG Components

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


    const handleMaps = () => {
        window.open(data.address.mapsLink, '_blank');
    };

    const handleSaveContact = () => {
        downloadVCard(data);
    };

    return (
        <div className={styles.container}>

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
