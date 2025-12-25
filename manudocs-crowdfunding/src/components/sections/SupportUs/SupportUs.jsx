import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './SupportUs.module.css';
import { FaHeart, FaLinkedin, FaWhatsapp, FaEnvelope, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const SupportUs = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    // Team members
    const teamMembers = [
        {
            name: 'Sumit Singh',
            role: 'CEO & Product Lead',
            photo: 'https://i.postimg.cc/pXhCNfyr/image.png',
            linkedin: 'https://www.linkedin.com/in/sumit-singh-rahar/',
            whatsapp: 'https://wa.me/8949522947',
            email: 'rahar1919sumit@gmail.com'
        },
        {
            name: 'Mohit Jangir',
            role: 'CMO',
            photo: 'https://i.postimg.cc/BbZzcXCb/image.png',
            linkedin: 'https://www.linkedin.com/in/mohitjangirworks/',
            whatsapp: 'https://wa.me/6376400524',
            email: 'mohitjangidworks@gmail.com'
        },
        {
            name: 'Ashutosh Rai',
            role: 'CTO',
            photo: 'https://i.postimg.cc/HnWwPMKq/image.png',
            linkedin: 'https://www.linkedin.com/in/ashutoshrai725/',
            whatsapp: 'https://wa.me/7697546063',
            email: 'ashutoshrai7205@gmail.com'
        },
        {
            name: 'Rudra Purohit',
            role: 'COO',
            photo: 'https://i.postimg.cc/DZv6RR4R/image.png',
            linkedin: 'https://www.linkedin.com/in/rudrra-purohit-4a59a1312/',
            whatsapp: 'https://wa.me/9958889387',
            email: 'rudrapurohit72@gmail.com'
        }
    ];

    // Social media links
    const socialLinks = [
        { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/company/manudocs/', color: '#0A66C2' },
        { name: 'Twitter/X', icon: FaTwitter, url: 'https://x.com/ManuDocs', color: '#1DA1F2' },
        { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/manudocs.ai?igsh=MTBuYnhhc3Rnamhw', color: '#E4405F' },
        { name: 'YouTube', icon: FaYoutube, url: 'https://www.youtube.com/@yourManudocs', color: '#FF0000' }
    ];

    return (
        <section className={styles.supportUs} id="support-us" ref={ref}>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <div className={styles.badge}>
                        <FaHeart />
                        <span>JOIN OUR MISSION</span>
                    </div>
                    <h1 className={styles.title}>Support Us / Invest In Us</h1>
                    <p className={styles.tagline}>
                        Help us transform Indian exports and empower MSMEs to compete globally
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className={styles.mainGrid}>
                    {/* Left Side - Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={styles.leftSection}
                    >
                        <h3 className={styles.sectionTitle}>Contact Us</h3>
                        <div className={styles.teamGrid}>
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                    className={styles.teamCard}
                                >
                                    <div className={styles.photoWrapper}>
                                        <img src={member.photo} alt={member.name} className={styles.photo} />
                                    </div>
                                    <h4 className={styles.memberName}>{member.name}</h4>
                                    <p className={styles.memberRole}>{member.role}</p>

                                    <div className={styles.contactIcons}>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
                                            <FaLinkedin />
                                        </a>
                                        <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.contactIcon}>
                                            <FaWhatsapp />
                                        </a>
                                        <a href={`mailto:${member.email}`} className={styles.contactIcon}>
                                            <FaEnvelope />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - QR Code */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={styles.rightSection}
                    >
                        <div className={styles.qrContainer}>
                            <h3 className={styles.qrTitle}>Scan to Invest/Support</h3>
                            <div className={styles.qrWrapper}>
                                <img
                                    src="https://i.postimg.cc/5yRMXBMM/image.png"
                                    alt="Investment QR Code"
                                    className={styles.qrImage}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Social Media Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className={styles.socialSection}
                >
                    <h3 className={styles.socialTitle}>Follow Us</h3>
                    <div className={styles.socialLinks}>
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className={styles.socialLink}
                                style={{ '--social-color': social.color }}
                            >
                                <social.icon className={styles.socialIcon} />
                                <span>{social.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SupportUs;
