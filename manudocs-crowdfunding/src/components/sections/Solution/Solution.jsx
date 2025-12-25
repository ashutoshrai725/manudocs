import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './Solution.module.css';
import { FaCheckCircle, FaRobot, FaLink, FaCubes, FaShieldAlt, FaRocket, FaFileAlt, FaTruck, FaShip, FaMoneyBillWave, FaChevronRight, FaIndustry } from 'react-icons/fa';

const Solution = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const features = [
        {
            icon: <FaCheckCircle />,
            title: "Buyer Discovery",
            description: "AI-assisted global buyer discovery and market intelligence"
        },
        {
            icon: <FaRobot />,
            title: "Pre-Shipment Automation",
            description: "Automated invoicing, compliance validation, and document readiness"
        },
        {
            icon: <FaLink />,
            title: "Customs Execution",
            description: "Seamless shipping bill filing and customs clearance coordination"
        },
        {
            icon: <FaCubes />,
            title: "Logistics Integration",
            description: "End-to-end cargo execution with real-time visibility"
        },
        {
            icon: <FaShieldAlt />,
            title: "Blockchain e-BL",
            description: "Secure electronic Bill of Lading with instant ownership transfer"
        },
        {
            icon: <FaRocket />,
            title: "Post-Shipment Finance",
            description: "Fast documentation for banks, buyers, and incentive claims"
        }
    ];

    const railSteps = [
        {
            icon: FaIndustry,
            label: 'Factory & Warehouse',
            sub: 'Orders, SKUs, inventory snapshots'
        },
        {
            icon: FaFileAlt,
            label: 'Documentation Hub',
            sub: 'Invoices, packing lists, shipping bills'
        },
        {
            icon: FaShieldAlt,
            label: 'Customs & Compliance',
            sub: 'DGFT, ICEGATE, duties, licences'
        },
        {
            icon: FaTruck,
            label: 'Logistics & Ports',
            sub: 'Transporters, CFS, terminals'
        },
        {
            icon: FaShip,
            label: 'Shipping Line & Bank',
            sub: 'BL, eBRC, remittances'
        },
        {
            icon: FaCubes,
            label: 'Buyer Delivery',
            sub: 'POD, claims, dispute-free closure'
        }
    ];

    const impacts = [
        { value: "30-50%", label: "Faster Execution" },
        { value: "40-60%", label: "Less Effort" },
        { value: "25-40%", label: "Lower Cost" },
        { value: "60-80%", label: "Fewer Errors" }
    ];

    return (
        <section className={styles.solution} id="solution" ref={ref}>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <div className={styles.badge}>
                        <FaRocket />
                        <span>The Solution</span>
                    </div>
                    <h2 className={styles.title}>
                        India's First Unified Export Operating System
                    </h2>
                    <p className={styles.subtitle}>
                        ManuDocs is an <strong>AI-powered platform</strong> that removes fear, friction, and dependency
                        from exporting by automating the entire export lifecycle
                    </p>
                </motion.div>

                {/* Main Concept */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.concept}
                >
                    <div className={styles.conceptBox}>
                        <h3>One Platform. Complete Control.</h3>
                        <p>
                            Instead of juggling agents, portals, phone calls, and PDFs — ManuDocs delivers
                            <strong> one transparent, end-to-end workflow</strong> from product selection to cargo delivery.
                        </p>
                    </div>
                </motion.div>

                {/* TRADE RAIL - Pure CSS Animation */}
                <div className={styles.railSection}>
                    <div className={styles.railContainer}>
                        {/* Glow */}
                        <div className={styles.railGlow}></div>

                        {/* Header */}
                        <div className={styles.railHeader}>
                            <div>
                                <p className={styles.railLabel}>UNIFIED EXPORT RAIL</p>
                                <h4 className={styles.railTitle}>
                                    One continuous line of sight from first document to final delivery
                                </h4>
                            </div>

                            <div className={styles.railLegend}>
                                <span className={styles.legendItem}>
                                    <span className={styles.legendDotLive}></span>
                                    Live milestones
                                </span>
                                <span className={styles.legendItem}>
                                    <span className={styles.legendDotMulti}></span>
                                    Multi-party events
                                </span>
                            </div>
                        </div>

                        {/* Rail Container */}
                        <div className={styles.railWrapper}>
                            <div className={styles.railContent}>
                                <div className={styles.railTimeline}>
                                    {/* SVG Rail Line */}
                                    <svg className={styles.railSvg}>
                                        <defs>
                                            <linearGradient id="rail-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#22d3ee" />
                                                <stop offset="50%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="#8b5cf6" />
                                            </linearGradient>
                                        </defs>
                                        <line
                                            x1="0"
                                            y1="50%"
                                            x2="100%"
                                            y2="50%"
                                            stroke="url(#rail-gradient)"
                                            strokeWidth="2"
                                            strokeOpacity="0.35"
                                            strokeDasharray="6 6"
                                            className={styles.railBaseLine}
                                        />
                                        <line
                                            x1="0"
                                            y1="50%"
                                            x2="100%"
                                            y2="50%"
                                            stroke="url(#rail-gradient)"
                                            strokeWidth="2"
                                            strokeDasharray="6 6"
                                            className={styles.railAnimatedLine}
                                        />
                                    </svg>

                                    {/* Moving Pulse */}
                                    <div className={styles.railPulse}></div>

                                    {/* Steps */}
                                    <div className={styles.railSteps}>
                                        {railSteps.map((step, index) => (
                                            <div key={step.label} className={styles.railStep}>
                                                <div className={styles.stepContent}>
                                                    <div className={styles.stepIconWrapper}>
                                                        <div className={styles.stepIcon}>
                                                            <step.icon />
                                                        </div>
                                                    </div>
                                                    <div className={styles.stepDot}></div>
                                                </div>

                                                <div className={styles.stepLabels}>
                                                    <p className={styles.stepLabel}>{step.label}</p>
                                                    <p className={styles.stepSub}>{step.sub}</p>
                                                </div>

                                                {index < railSteps.length - 1 && (
                                                    <FaChevronRight className={styles.stepArrow} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={styles.featuresSection}
                >
                    <h3 className={styles.sectionTitle}>What ManuDocs Delivers</h3>
                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                className={styles.featureCard}
                            >
                                <div className={styles.featureIcon}>{feature.icon}</div>
                                <h4 className={styles.featureTitle}>{feature.title}</h4>
                                <p className={styles.featureDesc}>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>



                {/* Rest of sections... Image, Tech, Impact, Vision, Outcome */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className={styles.imageSection}
                >
                    <div className={styles.imageWrapper}>
                        <img
                            src="https://i.postimg.cc/PJKW21D1/new_f_low.png"
                            alt="ManuDocs Platform Overview"
                            className={styles.platformImage}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className={styles.techSection}
                >
                    <h3 className={styles.sectionTitle}>Powered By Advanced Technology</h3>
                    <div className={styles.techGrid}>
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}>🤖</div>
                            <h4>AI at the Core</h4>
                            <p>In-house trained models for compliance, documentation, eligibility checks, and cost intelligence</p>
                        </div>
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}>🔗</div>
                            <h4>Unified Connectivity</h4>
                            <p>Digital integration with banks, shipping lines, ports, and government portals</p>
                        </div>
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}>⛓️</div>
                            <h4>Blockchain e-BL</h4>
                            <p>Secure document transfer reducing cycle time from days to minutes</p>
                        </div>
                        <div className={styles.techCard}>
                            <div className={styles.techIcon}>🔒</div>
                            <h4>Enterprise Security</h4>
                            <p>Bank-grade cloud security with full audit trails and transparency</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className={styles.impactSection}
                >
                    <h3 className={styles.sectionTitle}>Measurable Impact</h3>
                    <div className={styles.impactGrid}>
                        {impacts.map((impact, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: 1.1 + (index * 0.1) }}
                                className={styles.impactCard}
                            >
                                <div className={styles.impactValue}>{impact.value}</div>
                                <div className={styles.impactLabel}>{impact.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className={styles.vision}
                >
                    <div className={styles.visionBox}>
                        <h3 className={styles.visionTitle}>Vision 2030</h3>
                        <p className={styles.visionText}>
                            Enable <strong>1 million+ Indian MSMEs</strong> to export confidently and become
                            India's default export operating layer — the digital backbone powering MSME exports at national scale.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                    className={styles.outcome}
                >
                    <p>
                        ManuDocs transforms exporting from a <span className={styles.highlightRed}>fear-driven, agent-controlled</span> process
                        into a <span className={styles.highlightGreen}>digital, exporter-owned</span> experience.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Solution;
