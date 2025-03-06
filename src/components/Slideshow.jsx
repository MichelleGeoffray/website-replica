import React, { useState, useEffect } from "react";
import '../styles/slideshow.css';
import img1 from "../assets/slideshow-img1.jpg";
import img2 from "../assets/slideshow-img2.jpg";
import img3 from "../assets/slideshow-img3.jpg";
import img4 from "../assets/slideshow-img4.jpg";
import img5 from "../assets/slideshow-img5.jpg";
import img6 from "../assets/slideshow-img6.jpg";
import img7 from "../assets/slideshow-img7.jpg";
import img8 from "../assets/slideshow-img8.jpg";
import img9 from "../assets/slideshow-img9.jpg";
import img10 from "../assets/slideshow-img10.jpg";
import img11 from "../assets/slideshow-img11.jpg";
import img12 from "../assets/slideshow-img12.jpg";
import img13 from "../assets/slideshow-img13.jpg";
import img14 from "../assets/slideshow-img14.jpg";
import img15 from "../assets/slideshow-img15.jpg";
import img16 from "../assets/slideshow-img16.jpg";
import img17 from "../assets/slideshow-img17.jpg";
import img18 from "../assets/slideshow-img18.jpg";
import img19 from "../assets/slideshow-img19.jpg";

const Slideshow = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, 
    img11, img12, img13, img14, img15, img16, img17, img18, img19
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Transition speed (5 seconds)
      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow-image">
        <img
          src={images[currentIndex].url}
          alt={`Slideshow ${currentIndex + 1}`}
          width={images[currentIndex].width}
          height={images[currentIndex].height}
        />
      </div>

      <div className="controls">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <div className="captions">
        <p>{`Image ${currentIndex + 1} of ${images.length}`}</p>
      </div>
    </div>
  );
};

export default Slideshow;
