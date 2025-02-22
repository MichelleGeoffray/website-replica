import '../styles/navbar.css';

import imgIconFacebook from '../assets/social-icons-facebook.png';
import imgIconTwitter from '../assets/social-icons-twitter.png';
import imgIconEmail from '../assets/social-icons-email.png';
import imgLogo from '../assets/side-logo.png';

const Navbar = () => {
    return (
        <>
        <div className="header-wrap">
            <div className="header-icons">
                <a href="https://www.facebook.com/Silver-Dipper-Ice-Cream-109976301795/" target="_blank" alt="Facebook" aria-label="Facebook"><img src={imgIconFacebook} alt="Facebook Icon" /></a>
                <a href="https://twitter.com/silver_dipper" target="_blank" alt="Twitter" aria-label="Twitter"><img src={imgIconTwitter} alt="Twitter Icon" /></a>
                <a href="mailto:silverdipper2001@yahoo.com" target="_blank" alt="Email" aria-label="Email"><img src={imgIconEmail} alt="Email Icon" /></a>
                </div>
        </div>
        <div className="nav-wrap">           
            <nav className="navbar">
                <div className="navbar__img">
                    <img src={imgLogo} alt="Silver Dipper Logo" />
                </div>
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">HOURS & LOCATIONS</a>
                    </li>
                    <li>
                        <a href="#">FLAVORS</a>
                    </li>
                    <li>
                        <a href="#">PICK UP & DELIVERY</a>
                    </li>
                    <li>
                        <a href="#">SHOP</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    );
};
export default Navbar;