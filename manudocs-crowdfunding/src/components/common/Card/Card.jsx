import React from 'react';
import styles from './Card.module.css';
import clsx from 'clsx';

const Card = ({
    children,
    variant = 'default',
    hoverable = false,
    className,
    ...props
}) => {
    const cardClasses = clsx(
        styles.card,
        styles[variant],
        {
            [styles.hoverable]: hoverable,
        },
        className
    );

    return (
        <div className={cardClasses} {...props}>
            {children}
        </div>
    );
};

export default Card;
