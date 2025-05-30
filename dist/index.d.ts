import React$1 from 'react';

interface PageProps {
    title: string;
    children: React.ReactNode;
}

declare const Page: React$1.FC<PageProps>;

interface ButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'outline';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

declare const Button: React$1.FC<ButtonProps>;

export { Button, Page };
