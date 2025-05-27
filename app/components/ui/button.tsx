// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
/*
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

export { Button };  */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button: React.FC<any> = ({ children, variant, asChild, ...props }) => { 
  
    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        ...props,
        className: cn(child.props.className, getVariantClasses(variant), props.className),
      });
    }
    return (
      <button
        {...props}
        className={cn(getVariantClasses(variant), props.className)}
      >
        {children}
      </button>
  );
};

const getVariantClasses = (variant: string) => { 
    switch (variant) {
        case 'default':
            //return 'bg-[#ed253c] text[#828282] hover:bg-[#ed253c]';
        case 'outline':
            return ' border-[#ed253c] text-[#ed253c] hover:bg-[#ed253c] hover:text-white';
        case 'ghost':
            //return 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700';
        default:
            return 'bg-[#ed253c] ';
    }
};

export { Button };