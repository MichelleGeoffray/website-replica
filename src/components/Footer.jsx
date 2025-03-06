import '../styles/footer.css';
import imgIconFacebook from '../assets/social-icons-facebook.png';
import imgIconTwitter from '../assets/social-icons-twitter.png';
import imgIconEmail from '../assets/social-icons-email.png';

const Footer = () => {
    return (
        <div className="container">
            <footer className="footer-container">
                {/* Left Section - Levee Store */}
                <div className="footer-section-left">
                    <h2><a href="https://www.google.com/maps/dir/40.4201472,-86.9122048/silver+dipper/@40.4212048,-86.9118707,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8812e2a843395aed:0x666e5d486c0ee357!2m2!1d-86.9040098!2d40.4215798" target="_blank">
                        <font>Levee Store</font></a>
                    </h2>
                    <p>201 E State Street,</p>
                    <p>West Lafayette, IN, 47906</p>
                </div>

                {/* Middle Section - Contact */}
                <div className="footer-section-center">
                    <h2>Contact Us</h2>
                    <p>silverdipper2001@yahoo.com</p>
                    <p>Levee: 765-743-7511</p>
                    <p>Sagamore Pkwy: 765-418-0444</p>
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/Silver-Dipper-Ice-Cream-109976301795/" target="_blank" alt="Facebook" aria-label="Facebook"><img src={imgIconFacebook} alt="Facebook Icon" /></a>
                        <a href="https://twitter.com/silver_dipper" target="_blank" alt="Twitter" aria-label="Twitter"><img src={imgIconTwitter} alt="Twitter Icon" /></a>
                        <a href="mailto:silverdipper2001@yahoo.com" target="_blank" alt="Email" aria-label="Email"><img src={imgIconEmail} alt="Email Icon" /></a>
                    </div>
                </div>

                {/* Right Section - Contact Us */}
                <div className="footer-section-right">
                    <h2><a href="https://www.google.com/maps/dir/40.4201472,-86.9122048/Silver+Dipper+Ice+Cream,+Sagamore+Parkway+West,+West+Lafayette,+IN/@40.4349437,-86.9274827,14z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x8812fd673ea07f21:0x2b234f43c86ffeff!2m2!1d-86.9108333!2d40.4516667!5i1?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D" target="_blank">
                        <font>Sagamore Parkway Store</font></a>
                    </h2>
                    <p>307 Sagamore Parkway West,</p>
                    <p>West Lafayette, IN, 47906</p>
                </div>

            </footer>
        </div>
    );
}
export default Footer;