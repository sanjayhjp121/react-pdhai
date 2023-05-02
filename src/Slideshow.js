import React, { useState, useEffect } from 'react';
import images from './images';

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <img src={images[currentIndex]} alt="Slideshow" />
  );
}

export default Slideshow;
