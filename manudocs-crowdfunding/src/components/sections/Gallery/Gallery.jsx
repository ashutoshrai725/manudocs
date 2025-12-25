import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './Gallery.module.css';
import { FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';

const Gallery = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // ADD YOUR IMAGES HERE - Update these with your actual image URLs
    const galleryImages = [
        { url: 'https://i.postimg.cc/x8DtdqXL/inventionengine.jpg', title: 'Invetion Engine X Masters Union Winner ' },
        { url: 'https://i.postimg.cc/tJ3Dny6V/founders_battleground_pw.jpg', title: 'PW SOS Founders Battleground ' },
        { url: 'https://i.postimg.cc/2yQTLmW2/mopsw.jpg', title: 'MOPSW' },
        { url: 'https://i.postimg.cc/tJ3Dny6h/mopsw_opesh_sh_arma_sir.jpg', title: 'MoPSW Director meeting' },
        { url: 'https://i.postimg.cc/mkYV1R9n/sagarmala_office.jpg', title: ' Sagarmala Office' },
        { url: 'https://i.postimg.cc/wMXFRHN4/pw_alakh_sir_and_prateek_asir.jpg', title: '' },
        { url: 'https://i.postimg.cc/zBdZWHwF/IMG_20251030_WA0708.jpg', title: 'Incubated At BITS Pilani' },
        { url: 'https://i.postimg.cc/NF6b2YX2/incubated_at_pieds.jpg', title: '' },
        { url: 'https://i.postimg.cc/nz7GNZ06/Screenshot_2025_12_06_144401.png', title: 'Kandla Port Chairperson Shri Sushil Kumar Singh ' },
        { url: 'https://i.postimg.cc/FshVCM3X/Screenshot_2025_12_02_184740.png', title: 'Meeting with experts' },
        { url: 'https://i.postimg.cc/zXDTFnYJ/Screenshot_2025_11_21_123158.png', title: 'IIT Madras x X NTCPWC' },
        { url: 'https://i.postimg.cc/dQj8C5Xk/Screenshot_2025_11_21_171344.png', title: 'Avi Dutt sir @ Trademo' },
        { url: 'https://i.postimg.cc/Zqv8y4tF/Screenshot_2025_11_28_093557.png', title: 'Strategic Advisory from Mao Sir ' },
        { url: 'https://i.postimg.cc/wjG15FHz/Whats_App_Image_2025_10_30_at_14_10_21_7e2b9f1b.jpg', title: 'Indian Customs BLR visit' },
        { url: 'https://i.postimg.cc/bJYfs9nn/IMG_20251030_WA0714.jpg', title: '' },
        { url: 'https://i.postimg.cc/5NSyrnmr/IMG_20251003_16470697.jpg', title: 'Exporter\'s Meet at Noida trade fair' },
        { url: 'https://i.postimg.cc/FsmwTZzS/Picsart_25_10_03_17_16_19_698.jpg', title: 'Trade Fair' },
        { url: 'https://i.postimg.cc/j50MLxJw/IMG_20251003_16523181.jpg', title: 'Platform Demo' },
        { url: 'https://i.postimg.cc/wBJVKCbd/IMG_20251003_16512244.jpg', title: 'Platform Demo to exporters' },
        { url: 'https://i.postimg.cc/7hSVpDYq/Whats-App-Image-2025-12-25-at-6-11-57-PM.jpg', title: 'DG SYSTEMS MEET' }
    ];

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [galleryImages.length]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        })
    };

    return (
        <section className={styles.gallery} id="gallery" ref={ref}>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <div className={styles.badge}>
                        <FaImages />
                        <span>OUR JOURNEY</span>
                    </div>

                    <p className={styles.subtitle}>
                        Moments from our journey of transforming Indian exports
                    </p>
                </motion.div>

                {/* Main Carousel */}
                <div className={styles.carouselContainer}>
                    {/* Main Image Display */}
                    <div className={styles.mainSlideWrapper}>
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                    scale: { duration: 0.3 }
                                }}
                                className={styles.mainSlide}
                            >
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={galleryImages[currentIndex].url}
                                        alt={galleryImages[currentIndex].title}
                                        className={styles.mainImage}
                                    />
                                    <div className={styles.imageOverlay}>
                                        <h3 className={styles.imageTitle}>{galleryImages[currentIndex].title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className={`${styles.navButton} ${styles.navLeft}`}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={nextSlide}
                            className={`${styles.navButton} ${styles.navRight}`}
                        >
                            <FaChevronRight />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className={styles.dotsContainer}>
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
