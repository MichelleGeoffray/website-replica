import React, { useState, useEffect } from "react";
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
import '../styles/imageCarousel.css';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, 
  img11, img12, img13, img14, img15, img16, img17, img18, img19
];

const ImageCarousel = () => {
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
