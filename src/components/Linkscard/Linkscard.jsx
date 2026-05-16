import { Link } from 'react-router-dom';
import './linkcard.css';

const LinksCard = ({ link, icon, altText, title }) => {
  // Normalize path if it starts with '.'
  const cleanLink = link.startsWith('.') ? link.substring(1) : link;

  return (
    <div className="card1">
      <Link to={cleanLink} className="card-link">
        <div className="icon-container">
          <img src={icon} alt={altText} className="card-icon" />
        </div>
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default LinksCard;
