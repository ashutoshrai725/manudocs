import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './Problem.module.css';
import { FaExclamationTriangle, FaUserTie, FaMoneyBillWave, FaEyeSlash } from 'react-icons/fa';

const Problem = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    const problems = [
        {
            icon: <FaUserTie />,
            title: "Agent-Controlled System",
            description: "MSMEs rely on customs brokers and intermediaries who control market access and paperwork"
        },
        {
            icon: <FaMoneyBillWave />,
            title: "Hidden Costs",
            description: "Uneven commission structures and hidden service charges eat into profits"
        },
        {
            icon: <FaEyeSlash />,
            title: "Zero Transparency",
            description: "No visibility on shipment status, compliance, or government incentives"
        }
    ];

    return (
        <section className={styles.problem} id="problem" ref={ref}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <div className={styles.badge}>
                        <FaExclamationTriangle />
                        <span>The Problem</span>
                    </div>
                    <h2 className={styles.title}>
                        Why Indian MSMEs Struggle to Export
                    </h2>
                    <p className={styles.subtitle}>
                        India's MSME sector contributes <strong>30% of GDP</strong> and <strong>half of exports</strong> —
                        yet most remain trapped in domestic markets
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.mainText}
                >
                    <p>
                        For most Indian manufacturers, the questions are familiar:
                        <em>"Who will buy my products? Where do I sell internationally? How do I even start?"</em>
                    </p>
                    <p>
                        Exporting in India is <strong>complex, opaque, and intimidating</strong>.
                        The system forces MSMEs to rely on agents who control everything — creating a dependence loop where:
                    </p>
                </motion.div>

                <div className={styles.problemCards}>
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            className={styles.card}
                        >
                            <div className={styles.cardIcon}>{problem.icon}</div>
                            <h3 className={styles.cardTitle}>{problem.title}</h3>
                            <p className={styles.cardDesc}>{problem.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className={styles.conclusion}
                >
                    <div className={styles.conclusionBox}>
                        <p className={styles.conclusionText}>
                            <strong>The result?</strong> Exporting becomes <span className={styles.highlight}>agent-controlled</span> instead of
                            <span className={styles.highlight}> exporter-controlled</span>.
                        </p>
                        <p className={styles.conclusionSubtext}>
                            Many MSMEs choose to stay in local markets because exporting feels risky, complicated, and unpredictable.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className={styles.quote}
                >
                    <p>
                        "India doesn't lack entrepreneurs or products.
                        What it lacks is a <strong>simple, transparent, empowered path</strong> to international trade."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Problem;
