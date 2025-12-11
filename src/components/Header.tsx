import React, { useEffect, useState } from 'react';
import { LawyerProfile } from '../data/Data';
import styles from './Header.module.css';

interface HeaderProps {
    data: LawyerProfile;
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            {/* Logo added at top */}
            <div className={styles.logoContainer}>
                <img src="/logo2.jpg" alt="RN Advocacia" className={styles.logo} />
            </div>

            <div className={styles.profileWrapper}>
                <div className={styles.avatarContainer}>
                    <img src="/perfil.jpg" alt={data.name} className={styles.avatar} />
                    <div className={styles.badge}>15 Anos+</div>
                </div>
                <h1 className={styles.name}>{data.name}</h1>
                <p className={styles.role}>{data.role}</p>
                <p className={styles.slogan}>"{data.slogan}"</p>
            </div>
        </header>
    );
};
