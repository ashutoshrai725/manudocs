import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({
    current,
    goal,
    showLabel = true,
    height = 'medium'
}) => {
    const percentage = Math.min((current / goal) * 100, 100);

    return (
        <div className={styles.container}>
            {showLabel && (
                <div className={styles.labels}>
                    <span className={styles.current}>₹{current.toLocaleString('en-IN')}</span>
                    <span className={styles.goal}>Goal: ₹{goal.toLocaleString('en-IN')}</span>
                </div>
            )}

            <div className={`${styles.progressBar} ${styles[height]}`}>
                <div
                    className={styles.progress}
                    style={{ width: `${percentage}%` }}
                >
                    <span className={styles.percentage}>{Math.round(percentage)}%</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
