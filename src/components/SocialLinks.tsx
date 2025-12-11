import React from 'react';
import { LawyerProfile } from '../data/Data';
import styles from './SocialLinks.module.css';
import { Instagram, Facebook } from 'lucide-react';

// Custom TikTok icon since Lucide's might vary or we want specific styling
const TiktokIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
);

interface SocialLinksProps {
    data: LawyerProfile;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ data }) => {

    const getIcon = (platform: string) => {
        const p = platform.toLowerCase();
        if (p.includes('instagram')) return <Instagram size={24} />;
        if (p.includes('facebook')) return <Facebook size={24} />;
        if (p.includes('tiktok')) return <TiktokIcon />;
        return <span style={{ fontSize: '1.2rem' }}>{platform[0]}</span>;
    };

    return (
        <div className={`${styles.container} animate-fade-in delay-300`}>
            <div className={styles.grid}>
                {data.social.map((link) => (
                    <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconButton}
                        aria-label={link.platform}
                    >
                        {getIcon(link.platform)}
                    </a>
                ))}
            </div>
        </div>
    );
};
