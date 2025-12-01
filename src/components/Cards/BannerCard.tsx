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
                    <button
                        key={index}
                        className="btn btn-primary"
                        onClick={() => {
                            const element = document.getElementById(button.sectionId);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        {button.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BannerCard;
