import React from 'react';
import '../../css/BannerCard.css'

const BannerCard = ({ title, description, buttons }) => {
    return (
        <div className="card-container">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="card-buttons">
                {buttons.map((button, index) => (
                    <a href={`#${button.sectionId}`} key={index} className="button-link">
                        <button>{button.label}</button>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BannerCard;

