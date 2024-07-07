import PropTypes from "prop-types";
import ImageSlider from "../imageslider/imageslider";
import './EventsCard.css'

const EventsCard = ({ title, subtitle, description, sliderImages }) => {
  return (
    <div className="events-card">
      <div className="events-text-content">
        <h1 className="events-card-main-title">{title}</h1>
        {subtitle && <h2 className="events-card-subtitle">{subtitle}</h2>}
        <div className="events-card-description" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
      <div className="events-image-slider">
        <ImageSlider images={sliderImages} />
      </div>
    </div>
  );
};

EventsCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  sliderImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EventsCard;

