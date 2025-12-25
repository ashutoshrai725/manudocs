import React, { useRef, useEffect } from 'react';
import styles from './VideoBackground.module.css';

const VideoBackground = ({
    videoSrc,
    posterSrc,
    overlay = true,
    overlayOpacity = 0.6,
    children
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        // Optimize video loading
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0;
        }
    }, []);

    return (
        <div className={styles.videoContainer}>
            <video
                ref={videoRef}
                className={styles.video}
                autoPlay
                loop
                muted
                playsInline
                poster={posterSrc}
                preload="metadata"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {overlay && (
                <div
                    className={styles.overlay}
                    style={{ opacity: overlayOpacity }}
                />
            )}

            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default VideoBackground;
