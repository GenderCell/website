import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './EventsCard.css';

const EventsCard = ({ heading, content, image, datetime, venue, speaker, theme }) => {
  const [textHeight, setTextHeight] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setTextHeight(cardRef.current.clientHeight);
    }
  }, [content]);

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
        {heading && <h2 className="events-card-heading">{heading}</h2>}
        {datetime && <p className="events-card-datetime">Date: {datetime}</p>}
        {venue && <p className="events-card-venue">Venue: {venue}</p>}
        {speaker && <p className="events-card-speaker">Speaker: {speaker}</p>}
        {theme && <p className="events-card-theme">Theme: {theme}</p>}
        <div
          className="events-card-content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
      <div className="events-image">
        {image && <img src={image} alt={heading || "Event image"} style={{ maxHeight: textHeight }} />}
      </div>
    </div>
  );
};

EventsCard.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,  
};

export default EventsCard;
