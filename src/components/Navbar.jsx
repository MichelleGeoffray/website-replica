import '../styles/navbar.css';
import imgLogo from '../assets/side-logo.png';
import imgIconFacebook from '../assets/social-icons-facebook.png';
import imgIconTwitter from '../assets/social-icons-twitter.png';
import imgIconEmail from '../assets/social-icons-email.png';

//import  from '../assets/side-logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__img">
                <img src={imgLogo} alt="Silver Dipper Logo" />
            </div>
            <div className="navbar-icons">
                <img src={imgIconFacebook} alt="Facebook Icon" />
                <img src={imgIconTwitter} alt="Twitter Icon" />
                <img src={imgIconEmail} alt="Email Icon" />
                {/*icons should be width: 28 height:30 margin: 1px 0 0 4px*/}
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
    );
}
export default Navbar;