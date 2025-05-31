import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EventsCard.css';

const EventsCard = ({ subtitle, description, image }) => {
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
      { threshold: 0.1 }
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
      <div className="events-image">
        {image && <img src={image} alt={subtitle || "Event image"} style={{ maxHeight: textHeight }} />}
      </div>
    </div>
  );
};

EventsCard.propTypes = {
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,  
};

export default EventsCard;
