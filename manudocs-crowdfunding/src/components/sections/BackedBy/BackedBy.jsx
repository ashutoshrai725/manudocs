import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './BackedBy.module.css';
import { FaChevronLeft, FaChevronRight, FaAward, FaStar, FaRocket } from 'react-icons/fa';

const BackedBy = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [loadedImages, setLoadedImages] = useState({});

    const partners = [
        {
            name: 'IIT MADRAS',
            logo: 'https://i.postimg.cc/CZmcV5vk/iitm.png',
            description: 'NIRF 1 Ranked Institute',
            type: 'Premier Institute',
            achievements: ['NIRF Rank #1', 'Established 1959', '300+ Patents', '1500+ Research Papers'],
            color: '#d68d3bff'
        },
        {
            name: 'BITS Pilani',
            logo: 'https://i.postimg.cc/bG3mjr6t/BITS-Pilani-Logo.png',
            description: 'Premier Engineering Institute',
            type: 'Deemed University',
            achievements: ['NAAC A++', '4 Campuses', '50K+ Alumni', 'Top Recruiters'],
            color: '#eaebeeff'
        },
        {
            name: 'IIT PATNA',
            logo: 'https://i.postimg.cc/qtj1dqmC/IIT-PATNA.jpg',
            description: 'Top National Institute',
            type: 'TOP IIT',
            achievements: ['Established 2008', '120+ Faculty', 'Research Focus', 'Global Collaborations'],
            color: '#ffffffff'
        },
        {
            name: 'PIEDS',
            logo: 'https://i.postimg.cc/CB5mM0tz/pieds-logo.jpg',
            description: 'Incubation Program',
            type: 'Incubator',
            achievements: ['Startup Support', 'Mentorship', 'Guidance', 'Networking'],
            color: '#f4f3f6ff'
        },
        {
            name: 'RKIC',
            logo: 'https://i.postimg.cc/N9FpGtVy/rkic.jpg',
            description: 'Rakesh Kapoor Innovation Centre',
            type: 'Innovation Hub',
            achievements: ['Industry Connect', 'Prototyping', 'Networking', 'Workshops'],
            color: '#070605ff'
        },
        {
            name: 'PW IOI',
            logo: 'https://i.postimg.cc/phrqVv7T/IOI-B.jpg',
            description: 'PW Innovation Centre Bengaluru',
            type: 'Tech Hub',
            achievements: ['Bengaluru Base', 'Tech Innovation', 'Startup Ecosystem', 'Entrepreneurship'],
            color: '#ffffffff'
        }
    ];

    // Auto-rotate carousel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % partners.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [isAutoPlaying, partners.length]);

    // Preload images
    useEffect(() => {
        partners.forEach((partner) => {
            const img = new Image();
            img.src = partner.logo;
            img.onload = () => {
                setLoadedImages(prev => ({ ...prev, [partner.logo]: true }));
            };
        });
    }, []);

    const nextPartner = () => {
        setActiveIndex((current) => (current + 1) % partners.length);
        setIsAutoPlaying(false);
    };

    const prevPartner = () => {
        setActiveIndex((current) => (current - 1 + partners.length) % partners.length);
        setIsAutoPlaying(false);
    };

    const goToPartner = (index) => {
        setActiveIndex(index);
        setIsAutoPlaying(false);
    };

    return (
        <section className={styles.backedBy} id="backed-by">
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <div className={styles.badge}>
                        <FaAward />
                        <span>TRUSTED PARTNERSHIPS</span>
                    </div>

                    <h2 className={styles.title}>
                        Backed By <span className={styles.highlight}>Excellence</span>
                    </h2>

                    <p className={styles.subtitle}>
                        Supported by India's premier institutions and innovation ecosystems driving
                        cutting-edge research and entrepreneurial growth
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className={styles.mainContent}>
                    {/* Left - Partner Grid (Desktop) */}
                    <div className={styles.partnersGrid}>
                        {partners.map((partner, index) => (
                            <motion.button
                                key={partner.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => goToPartner(index)}
                                className={`${styles.partnerCard} ${activeIndex === index ? styles.active : ''}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className={styles.partnerLogo} style={{ background: partner.color }}>
                                    <img src={partner.logo} alt={partner.name} />
                                </div>
                                <span className={styles.partnerName}>{partner.name}</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right - Active Partner Details */}
                    <div className={styles.detailsContainer}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className={styles.detailsCard}
                            >
                                <div className={styles.detailsContent}>
                                    {/* Logo */}
                                    <div className={styles.detailsLogo} style={{ background: partners[activeIndex].color }}>
                                        <img src={partners[activeIndex].logo} alt={partners[activeIndex].name} />
                                    </div>

                                    {/* Type Badge */}
                                    <div className={styles.typeBadge}>
                                        <FaStar />
                                        <span>{partners[activeIndex].type}</span>
                                    </div>

                                    {/* Info */}
                                    <div className={styles.detailsInfo}>
                                        <h3 className={styles.detailsTitle}>{partners[activeIndex].name}</h3>
                                        <p className={styles.detailsDesc}>{partners[activeIndex].description}</p>

                                        {/* Achievements */}
                                        <div className={styles.achievements}>
                                            <div className={styles.achievementsHeader}>
                                                <FaRocket />
                                                <span>Key Achievements</span>
                                            </div>
                                            <div className={styles.achievementsList}>
                                                {partners[activeIndex].achievements.map((achievement, idx) => (
                                                    <div key={idx} className={styles.achievementItem}>
                                                        <div className={styles.achievementDot}></div>
                                                        <span>{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation Controls */}
                                <div className={styles.controls}>
                                    <button onClick={prevPartner} className={styles.controlBtn}>
                                        <FaChevronLeft />
                                    </button>

                                    <div className={styles.dots}>
                                        {partners.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToPartner(index)}
                                                className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                                            />
                                        ))}
                                    </div>

                                    <button onClick={nextPartner} className={styles.controlBtn}>
                                        <FaChevronRight />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BackedBy;
