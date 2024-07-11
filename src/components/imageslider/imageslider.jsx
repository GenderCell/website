import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './imageslider.css';

const ImageSlider = ({ images, textHeight }) => {
  const [counter, setCounter] = useState(0);
  const intervalId = useRef(null);

  const goNext = () => {
    setCounter((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const goPrev = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  useEffect(() => {
    intervalId.current = setInterval(goNext, 5000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <div className="event-gallery" style={{ height: textHeight }}>
      <div className="event-gallery-images" style={{ transform: `translateX(-${counter * 100}%)` }}>
        {images.map((image, index) => (
          <img src={image} className="slide" key={index} alt={`Slide ${index}`} style={{ height: '100%', width: 'auto' }} />
        ))}
      </div>
      <div className="nav">
        <button onClick={goPrev} className="nav-button nav-button-prev"></button>
        <button onClick={goNext} className="nav-button nav-button-next"></button>
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  textHeight: PropTypes.number.isRequired, // Prop for the height of text content
};

export default ImageSlider;
