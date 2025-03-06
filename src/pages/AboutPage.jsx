import ImageCarousel from "../components/ImageCarousel";
import Slideshow from "../components/Slideshow";

import '../styles/about.css';


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
                <ImageCarousel />

            </div>
        </div>
        
    </div>
  );
};

export default AboutPage;