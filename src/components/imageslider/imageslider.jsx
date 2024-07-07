// src/ImageSlider.jsx
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './imageslider.css';

const ImageSlider = ({ images }) => {
  const [counter, setCounter] = useState(0);
  const intervalId = useRef(null);

  const goNext = () => {
    setCounter((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const goPrev = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  useEffect(() => {
    intervalId.current = setInterval(goNext, 3000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return (
    <div className="event-gallery">
      <div className="event-gallery-images" style={{ transform: `translateX(-${counter * 100}%)` }}>
        {images.map((image, index) => (
          <img src={image} className="slide" key={index} alt={`Slide ${index}`} />
        ))}
      </div>
      <div className="nav">
        <button onClick={goPrev} className="nav-button">&lt;</button>
        <button onClick={goNext} className="nav-button">&gt;</button>
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;
