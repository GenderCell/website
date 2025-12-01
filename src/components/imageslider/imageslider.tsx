import { useEffect, useRef, useState } from 'react';
import './imageslider.css';

interface ImageSliderProps {
  images: string[];
  textHeight?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [counter, setCounter] = useState<number>(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const goNext = () => {
    setCounter((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const goPrev = () => {
    setCounter((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  useEffect(() => {
    intervalId.current = setInterval(goNext, 5000);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return (
    <div className="event-gallery">
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

export default ImageSlider;
