import '../styles/navbar.css';
import { Link } from "react-router-dom";

import imgIconFacebook from '../assets/social-icons-facebook.png';
import imgIconTwitter from '../assets/social-icons-twitter.png';
import imgIconEmail from '../assets/social-icons-email.png';
import imgLogo from '../assets/side-logo.png';

const Navbar = () => {
    return (
        <>
        <div className="container">
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
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/hours--locations">HOURS & LOCATIONS</Link>
                        </li>
                        <li>
                            <Link to="/flavors">FLAVORS</Link>
                        </li>
                        <li>
                            <Link to="/pick-up--delivery">PICK UP & DELIVERY</Link>
                        </li>
                        <li>
                            <Link to="/shop">SHOP</Link>
                        </li>
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    );
};
export default Navbar;