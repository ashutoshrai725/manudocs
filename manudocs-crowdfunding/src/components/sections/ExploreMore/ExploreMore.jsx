import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './ExploreMore.module.css';
import { FaGlobe, FaFilePowerpoint, FaFileAlt } from 'react-icons/fa';

const ExploreMore = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [isPptVisible, setIsPptVisible] = useState(false);
    const pptRef = useRef(null);

    // LinkedIn Posts Embeds
    const linkedinPosts = [
        {
            embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7407106346858426368?compact=1',
        },
        {
            embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7409550276631859201?compact=1',
        },
        {
            embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7406725292301508608?compact=1',
        },
        {
            embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7402275358990942208?compact=1',
        }
    ];

    // PPT Intersection Observer - Autoplay when visible
    useEffect(() => {
        if (!pptRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsPptVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        observer.observe(pptRef.current);

        return () => {
            if (pptRef.current) {
                observer.unobserve(pptRef.current);
            }
        };
    }, []);

    return (
        <section className={styles.exploreMore} id="explore-more" ref={ref}>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <div className={styles.badge}>
                        <FaGlobe />
                        <span>EXPLORE MORE</span>
                    </div>
                    <h2 className={styles.title}>Explore ManuDocs</h2>
                </motion.div>

                {/* Content Grid */}
                <div className={styles.exploreContent}>
                    {/* Website Preview - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={styles.websitePreview}
                    >
                        <div className={styles.browserBar}>
                            <div className={styles.browserDots}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={styles.browserUrl}>ManuDocs AI</div>
                        </div>
                        <a href="https://manudocs-ai.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.websiteLink}>
                            <iframe
                                src="https://manudocs-ai.vercel.app/"
                                title="ManuDocs Website"
                                className={styles.websiteFrame}
                                sandbox="allow-scripts allow-same-origin"
                            />
                            <div className={styles.websiteOverlay}>
                                <span>Visit Website →</span>
                            </div>
                        </a>
                    </motion.div>

                    {/* LinkedIn Posts Grid - Right */}
                    <div className={styles.embedsGrid}>
                        {linkedinPosts.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                className={styles.embedCard}
                            >
                                <iframe
                                    src={post.embedUrl}
                                    title={`LinkedIn Post ${index + 1}`}
                                    className={styles.embedFrame}
                                    frameBorder="0"
                                    allowFullScreen
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Presentation Section */}
                <motion.div
                    ref={pptRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className={styles.presentationSection}
                >
                    <div className={styles.presentationHeader}>
                        <div className={styles.presentationBadge}>
                            <FaFileAlt />
                            <span>OUR PITCH</span>
                        </div>

                    </div>

                    <div className={styles.pptWrapper}>
                        {isPptVisible && (
                            <iframe
                                src="https://docs.google.com/presentation/d/e/2PACX-1vSD6F0Lhy0U29imeCv9zMthFFmhmp9eZLbjlRJ6_qk14awUtr5xxQPRXR67qNWlQgujWeuVdBFHF-Hk/embed?start=true&loop=true&delayms=3000"
                                frameBorder="0"
                                allowFullScreen
                                className={styles.pptFrame}
                                allow="autoplay"
                            ></iframe>
                        )}
                        {!isPptVisible && (
                            <div className={styles.pptPlaceholder}>
                                <FaFilePowerpoint className={styles.placeholderIcon} />
                                <p>Scroll down to start presentation</p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Thank You Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className={styles.thankYou}
                >
                    <p className={styles.thankYouText}>
                        Thank you for believing in our vision of transforming Indian exports.
                        Together, we can empower MSMEs and make India a global export powerhouse.
                    </p>
                    <div className={styles.heart}>❤️</div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className={styles.footer}
                >
                    <p>© 2025 ManuDocs. All rights reserved.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ExploreMore;
