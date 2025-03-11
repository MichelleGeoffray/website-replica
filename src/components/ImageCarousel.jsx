import React, { useState, useEffect } from "react";
import '../styles/imageCarousel.css';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [startIndex, setStartIndex] = useState(0);

    const visibleThumbnails = 8; // Number of visible thumbnails at a time

    // Function to go to the next image
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Play/Pause toggle function
    const togglePlay = () => {
      setIsPlaying(!isPlaying);
    };

    // Scroll thumbnails up
    const scrollUp = () => {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    // Scroll thumbnails down
    const scrollDown = () => {
      setStartIndex((prev) => Math.min(prev + 1, images.length - visibleThumbnails));
    };

    // Automatically move to the next slide when playing
    useEffect(() => {
      let interval;
      if (isPlaying) {
        interval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
      }
      return () => clearInterval(interval); // Cleanup interval when component unmounts or stops playing
    }, [isPlaying]);

    return (
      <div className="slideshow-container">
        {/* Main Image Section */}
        <div className="main-image-container">
            <div className="main-image-btns-background"></div>
            <button className="play-button" onClick={togglePlay}>
                {isPlaying ? "Pause ⏸" : "Play ▶"}
            </button>
            <button className="nav-button left" onClick={prevSlide}>&#10094;</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="main-image" />
            <button className="nav-button right" onClick={nextSlide}>&#10095;</button>
        </div>

        {/* Thumbnail Sidebar */}
        <div className="thumbnails-wrapper">
          <button className="scroll-button up" onClick={scrollUp}>&#9650;</button>
          
          <div className={`thumbnails-container ${isPlaying ? "playing" : ""}`}>
            {images.slice(startIndex, startIndex + visibleThumbnails).map((image, index) => (
              <img
                key={startIndex + index}
                src={image}
                alt={`Thumbnail ${startIndex + index + 1}`}
                className={`thumbnail ${startIndex + index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(startIndex + index)}
              />
            ))}
          </div>
          <button className="scroll-button down" onClick={scrollDown}>&#9660;</button>
        </div>
      </div>
    );
};

export default ImageCarousel;
