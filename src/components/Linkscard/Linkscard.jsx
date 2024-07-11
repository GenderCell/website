import React from 'react';
import './linkcard.css';

const LinksCard = ({ link, icon, altText, title }) => {
  return (
    <div className="card1">
      <a href={link} className="card-link">
        <div className="icon-container">
          <img src={icon} alt={altText} className="card-icon" />
        </div>
        <p>{title}</p>
      </a>
    </div>
  );
};

export default LinksCard;
