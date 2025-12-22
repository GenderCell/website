import React from 'react';

interface CardProps {
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    actions?: React.ReactNode;
    variant?: 'default' | 'compact' | 'side-image' | 'overlay';
    hoverEffect?: 'none' | 'shadow' | 'lift' | 'scale';
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
    hoverEffect = 'shadow',
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

    const getHoverEffectClasses = () => {
        switch (hoverEffect) {
            case 'none':
                return 'shadow-lg';
            case 'shadow':
                return 'shadow-lg hover:shadow-xl transition-shadow duration-300';
            case 'lift':
                return 'shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300';
            case 'scale':
                return 'shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300';
            default:
                return 'shadow-lg hover:shadow-xl transition-shadow duration-300';
        }
    };

    return (
        <div className={`card bg-base-100 ${getHoverEffectClasses()} ${getVariantClasses()} ${className}`}>
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
