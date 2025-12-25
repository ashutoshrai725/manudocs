import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { FaPlay, FaRocket, FaShieldAlt } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.heroContent}>
                {/* Left Side - Tagline */}
                <motion.div
                    className={styles.leftContent}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >


                    <div className={styles.taglineBox}>
                        <h1 className={styles.mainHeading}>
                            <span className={styles.gradientText}>AI-Powered</span>
                            <br />
                            <span className={styles.whiteText}>Export Documentation</span>
                        </h1>
                        <p className={styles.subHeading}>
                            for <span className={styles.highlight}>Global Trade</span>
                        </p>
                    </div>

                    <p className={styles.description}>
                        Streamline your export process with intelligent automation.
                        Generate compliant documents in seconds, not hours.
                    </p>



                    {/* Trust Badge - Clickable Button */}
                    <a
                        href="https://drive.google.com/drive/folders/1zec_uRrVMDZWoBkTxMszzbyYQ_8ixJXd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.trustBadge}
                    >
                        <FaShieldAlt className={styles.trustIcon} />
                        <span className={styles.trustText}>
                            10+ MOU'S officially signed with Exporters
                        </span>
                    </a>

                </motion.div>

                {/* Right Side - Video */}
                <motion.div
                    className={styles.rightContent}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.videoWrapper}>
                        <div className={styles.videoRing}></div>
                        <iframe
                            className={styles.video}
                            src="https://www.youtube.com/embed/AKcC0XKgtPM?controls=1&modestbranding=1&rel=0&showinfo=0"
                            title="ManuDocs Platform Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className={styles.decorCircle1}></div>
            <div className={styles.decorCircle2}></div>
        </section>
    );
};

export default Hero;
