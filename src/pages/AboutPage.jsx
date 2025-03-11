import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import '../styles/about.css';
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

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, 
  img11, img12, img13, img14, img15, img16, img17, img18, img19
];


const AboutPage = () => {
  return (
    <div className="container">
        <div className="about-text">
            <h2><strong><font color="#0a4aa8" size="6">About Us</font></strong></h2>
            <p><font size="4">Silver Dipper began its journey in 2001 when the Carlson family opened the first location on Sagamore Parkway. A couple of years later they began serving their signature Chocolate Shoppe Ice Cream from Madison, Wisconsin at a second location on the Levee. Since opening our goal has remained the same - to provide our customers with a great product, friendly service, and a welcoming environment.</font></p>
        </div>
        <div className="about-gallery">
            <hr />
            <div className="about-slideshow">
                <ImageCarousel images={images} />
            </div>
        </div>
        
    </div>
  );
};

export default AboutPage;