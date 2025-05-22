import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    className?: string;
    children: ReactNode;
}

interface CardHeaderProps {
    className?: string;
    children: ReactNode;
}

interface CardTitleProps {
    className?: string;
    children: ReactNode;
}

interface CardDescriptionProps {
    className?: string;
    children: ReactNode;
}

interface CardContentProps {
    className?: string;
    children: ReactNode;
}

interface CardFooterProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn('rounded-md border', className)} {...props}>
            {children}
        </div>
    );
};

const CardHeader: React.FC<CardHeaderProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn('p-6', className)} {...props}>
            {children}
        </div>
    );
};

const CardTitle: React.FC<CardTitleProps> = ({ className, children, ...props }) => {
    return (
        <h3 className={cn('text-lg font-semibold', className)} {...props}>
            {children}
        </h3>
    );
};

const CardDescription: React.FC<CardDescriptionProps> = ({ className, children, ...props }) => {
    return (
        <p className={cn('text-sm text-gray-500 dark:text-gray-400', className)} {...props}>
            {children}
        </p>
    );
};

const CardContent: React.FC<CardContentProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn('p-6 pt-0', className)} {...props}>
            {children}
        </div>
    );
};

const CardFooter: React.FC<CardFooterProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn("p-6 pt-0 flex justify-end", className)} {...props}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
