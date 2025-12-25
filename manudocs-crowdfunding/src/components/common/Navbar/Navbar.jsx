import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FaHeart } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSupport = () => {
        const qrContainer = document.querySelector('[class*="qrContainer"]'); // QR code container
        const supportSection = document.getElementById('support-us');

        const targetElement = qrContainer || supportSection;

        if (targetElement) {
            const yOffset = -100; // Adjust according to preference
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    };


    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.hidden : ''}`}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <img
                        src="/logo-manudocs.png"
                        alt="ManuDocs Logo"
                        className={styles.logoImage}
                    />
                    <span className={styles.logoText}>ManuDocs</span>
                </div>

                <button
                    onClick={scrollToSupport}
                    className={styles.supportButton}
                >
                    <FaHeart className={styles.supportIcon} />
                    <span>Support Us</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
