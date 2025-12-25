import React from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    onClick,
    disabled = false,
    type = 'button',
    icon,
    ...props
}) => {
    const buttonClasses = clsx(
        styles.button,
        styles[variant],
        styles[size],
        {
            [styles.fullWidth]: fullWidth,
            [styles.disabled]: disabled,
            [styles.withIcon]: icon,
        }
    );

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            type={type}
            {...props}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            <span>{children}</span>
        </button>
    );
};

export default Button;
