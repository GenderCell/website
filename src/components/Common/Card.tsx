import React from 'react';

interface CardProps {
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    actions?: React.ReactNode;
    variant?: 'default' | 'compact' | 'side-image' | 'overlay';
    className?: string;
    children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
    title,
    description,
    image,
    imageAlt,
    actions,
    variant = 'default',
    className = '',
    children,
}) => {
    const getVariantClasses = () => {
        switch (variant) {
            case 'compact':
                return 'card-compact';
            case 'side-image':
                return 'card-side';
            case 'overlay':
                return 'image-full';
            default:
                return '';
        }
    };

    return (
        <div className={`card bg-base-100 shadow-xl ${getVariantClasses()} ${className}`}>
            {image && (
                <figure>
                    <img src={image} alt={imageAlt || title || 'Card image'} className="object-cover w-full h-full" />
                </figure>
            )}
            <div className="card-body">
                {title && <h2 className="card-title">{title}</h2>}
                {description && <p>{description}</p>}
                {children}
                {actions && <div className="card-actions justify-end">{actions}</div>}
            </div>
        </div>
    );
};
