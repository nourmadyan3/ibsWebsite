import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'ghost';
    children: ReactNode;
    asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'default',
    className,
    asChild = false,
    ...props
}) => {
    const baseClasses = cn(
        'inline-flex items-center justify-center rounded-md font-semibold transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        className
    );

    const variantClasses = () => {
        switch (variant) {
            case 'default':
                return 'bg-blue-500 text-white hover:bg-blue-600';
            case 'ghost':
                return 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700';
            default:
                return 'bg-blue-500 text-white hover:bg-blue-600';
        }
    };

    const classes = cn(baseClasses, variantClasses());

    if (asChild) {
        const child = React.Children.only(children) as React.ReactElement<ButtonHTMLAttributes<HTMLElement>>;
        return React.cloneElement(child, {
            ...props,
            className: classes,
        });
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export { Button }; 