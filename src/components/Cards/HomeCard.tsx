import React from 'react';

interface HomeCardProps {
    title: string;
    moreInfo?: string;
    link?: string;
    linkText?: string;
    img: string;
    imgAlt: string;
}

const HomeCard: React.FC<HomeCardProps> = ({
    title,
    moreInfo,
    link,
    linkText,
    img,
    imgAlt,
}) => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm hover:scale-[1.01] transition-all duration-500 ease-in-out mx-6 lg:mx-12 my-4 border border-base-200">
            <div className="card-body lg:w-2/3 p-5 lg:p-12">
                <h2 className="card-title text-2xl font-serif mb-4">{title}</h2>
                <p className="font-serif text-base-content/80">{moreInfo}</p>
                {link && (
                    <div className="card-actions mt-10">
                        <a href={link} className="group w-fit text-primary">
                            <p>{linkText}</p>
                            <div className="bg-primary h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                        </a>
                    </div>
                )}
            </div>
            <figure className="lg:w-[75%] p-5 h-64 lg:h-auto">
                <img src={img} alt={imgAlt} className="h-full w-full object-contain rounded-xl" />
            </figure>
        </div>
    );
};

export default HomeCard;
