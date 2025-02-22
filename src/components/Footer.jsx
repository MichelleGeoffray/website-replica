import '../styles/footer.css';
import imgIconFacebook from '../assets/social-icons-facebook.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Top Left Section - Levee Store */}
                <div className="footer-section">
                    <h2><a href="https://www.google.com/maps/dir/40.4201472,-86.9122048/silver+dipper/@40.4212048,-86.9118707,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8812e2a843395aed:0x666e5d486c0ee357!2m2!1d-86.9040098!2d40.4215798" target="_blank">
                        <font>Levee Store</font></a>
                    </h2>
                    <p>201 E State Street,</p>
                    <p>West Lafayette, IN, 47906</p>
                </div>

                {/* Top Middle Section - Social Media */}
                <div className="footer-section">
                    <h3 className="footer-title">Connect with us on social media!</h3>
                    <div className="social-icon">
                        <a href="https://www.facebook.com/Silver-Dipper-Ice-Cream-109976301795/" target="_blank" alt="Facebook" aria-label="Facebook"><img src={imgIconFacebook} alt="Facebook Icon" /></a>
                    </div>
                    
                    <p className="custom-html">Click to set custom HTML</p>
                </div>

                {/* Top Right Section - Contact Us */}
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p>silverdipper2001@yahoo.com</p>
                    <p>Levee: 765-743-7511</p>
                    <p>Sagamore Pkwy: 765-418-0444</p>
                </div>
            </div>

            {/* Bottom Left Section - Sagamore Parkway Store */}
            <div className="footer-bottom">
                <h2><a href="https://www.google.com/maps/dir/40.4201472,-86.9122048/silver+dipper/@40.4212048,-86.9118707,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8812e2a843395aed:0x666e5d486c0ee357!2m2!1d-86.9040098!2d40.4215798" target="_blank">
                    <font>Sagamore Parkway Store</font></a>
                </h2>
                <p>307 Sagamore Parkway West,</p>
                <p>West Lafayette, IN, 47906</p>
            </div>
        </footer>
    );
}
export default Footer;