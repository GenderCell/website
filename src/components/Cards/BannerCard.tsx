import React from 'react';

interface ButtonProps {
    label: string;
    sectionId: string;
}

interface BannerCardProps {
    title: string;
    description: string;
    buttons: ButtonProps[];
}

const BannerCard: React.FC<BannerCardProps> = ({ title, description, buttons }) => {
    return (
        <div className="text-center py-10 px-4 bg-base-100">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="max-w-3xl mx-auto mb-8 text-lg opacity-80">{description}</p>
            <div className="flex justify-center gap-4">
                {buttons.map((button, index) => (
                    <a href={`#${button.sectionId}`} key={index}>
                        <button className="btn btn-primary">{button.label}</button>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BannerCard;
