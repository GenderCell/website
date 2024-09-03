import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ImageSlider from "../imageslider/imageslider";
import './EventsCard.css';

const EventsCard = ({ subtitle, description, sliderImages }) => {
  const [textHeight, setTextHeight] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setTextHeight(cardRef.current.clientHeight);
    }
  }, [description]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
 
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="events-card" ref={cardRef}>
      <div className="events-text-content">
        {subtitle && <h2 className="events-card-subtitle">{subtitle}</h2>}
        <div
          className="events-card-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <div className="events-image-slider">
        <ImageSlider images={sliderImages} textHeight={textHeight} />
      </div>
    </div>
  );
};

EventsCard.propTypes = {
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  sliderImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EventsCard;