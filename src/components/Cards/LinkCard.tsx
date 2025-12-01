import React from 'react';

interface LinkCardProps {
    link: string;
    icon: string;
    altText: string;
    title: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, icon, altText, title }) => {
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-base-200 w-full max-w-xs mx-auto">
            <a href={link} className="flex flex-col items-center justify-center p-6 text-center h-full">
                <div className="w-16 h-16 mb-4">
                    <img src={icon} alt={altText} className="w-full h-full object-contain" />
                </div>
                <p className="font-heading font-semibold text-lg text-base-content">{title}</p>
            </a>
        </div>
    );
};

export default LinkCard;
