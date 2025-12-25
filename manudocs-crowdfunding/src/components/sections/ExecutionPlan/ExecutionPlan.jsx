import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './ExecutionPlan.module.css';
import { FaRocket, FaChartLine, FaGlobe, FaCheckCircle } from 'react-icons/fa';

const ExecutionPlan = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const phases = [
        {
            phase: "Phase 1",
            title: "Launch",
            duration: "Months 1-6",
            subtitle: "Deendayal Port Pilot & MVP",
            icon: FaRocket,
            color: "#3b82f6",
            goals: [
                "Platform foundation & core infrastructure",
                "Pilot with 20-30 exporters at Deendayal Port",
                "Basic document automation & HS classification",
                "Initial customs & logistics integration",
                "Validate product-market fit"
            ]
        },
        {
            phase: "Phase 2",
            title: "Growth",
            duration: "Months 7-12",
            subtitle: "Commercial Rollout",
            icon: FaChartLine,
            color: "#10b981",
            goals: [
                "Onboard 200-300 high-volume exporters",
                "Multi-port expansion (Mumbai, Chennai, Mundra)",
                "Advanced AI features & compliance engine",
                "Bank & finance integrations",
                "Revenue generation & customer feedback loop"
            ]
        },
        {
            phase: "Phase 3",
            title: "Scale",
            duration: "Months 13-18",
            subtitle: "PAN-India Rollout",
            icon: FaGlobe,
            color: "#f59e0b",
            goals: [
                "Scale to 1000+ exporters nationwide",
                "All major Indian ports & ICDs coverage",
                "Blockchain e-BL & advanced analytics",
                "Mobile app & enterprise features",
                "Become India's default export platform"
            ]
        }
    ];

    return (
        <section className={styles.executionPlan} id="execution-plan" ref={ref}>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.mainTitle}>EXECUTION ROADMAP</h2>
                    <p className={styles.subtitle}>18-Month Journey to Transform Indian Exports</p>
                </motion.div>

                {/* Roadmap Timeline */}
                <div className={styles.roadmap}>
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
                            className={styles.phaseCard}
                            style={{ '--phase-color': phase.color }}
                        >
                            {/* Phase Number Circle */}
                            <div className={styles.phaseCircle} style={{ background: phase.color }}>
                                <phase.icon className={styles.phaseIcon} />
                            </div>

                            {/* Connecting Line */}
                            {index < phases.length - 1 && (
                                <div className={styles.connectingLine}></div>
                            )}

                            {/* Phase Content */}
                            <div className={styles.phaseContent}>
                                {/* Header */}
                                <div className={styles.phaseHeader}>
                                    <span className={styles.phaseLabel} style={{ color: phase.color }}>
                                        {phase.phase}
                                    </span>
                                    <h3 className={styles.phaseTitle}>{phase.title}</h3>
                                    <p className={styles.phaseDuration}>{phase.duration}</p>
                                    <p className={styles.phaseSubtitle}>{phase.subtitle}</p>
                                </div>

                                {/* Goals List */}
                                <div className={styles.goalsContainer}>
                                    <h4 className={styles.goalsTitle}>Key Milestones:</h4>
                                    <ul className={styles.goalsList}>
                                        {phase.goals.map((goal, goalIndex) => (
                                            <motion.li
                                                key={goalIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 0.4 + (index * 0.2) + (goalIndex * 0.1)
                                                }}
                                                className={styles.goalItem}
                                            >
                                                <FaCheckCircle className={styles.checkIcon} style={{ color: phase.color }} />
                                                <span>{goal}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className={styles.statsBar}
                >
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>18</span>
                        <span className={styles.statLabel}>Months</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>1000+</span>
                        <span className={styles.statLabel}>Target Exporters</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>15+</span>
                        <span className={styles.statLabel}>Ports & ICDs</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>PAN-India</span>
                        <span className={styles.statLabel}>Coverage</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExecutionPlan;
