import { useLocation, Link } from 'react-router-dom';
import '../../css/BannerCard.css'

const BannerCard = ({ title, description, buttons }) => {
    const location = useLocation();
    
    return (
        <div className="card-container">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="card-buttons">
                {buttons.map((button, index) => (
                    <Link to={`${location.pathname}#${button.sectionId}`} key={index} className="button-link">
                        <button>{button.label}</button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BannerCard;

