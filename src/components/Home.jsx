/* Home page of Silver Dipper Site. Includes
SIVER DIPPER logo and
Proudly serving Chocolate Shoppe Ice Cream since 2003*/
import '../styles/home.css';

import img1 from '../assets/full-logo.png';
import img2 from "../assets/shop.jpg"

const Home = () => {
    const slogan = 'Proudly serving Chocolate Shoppe Ice Cream since 2003';
    return (
        <div className="title-container">
            <div className="title-container__img-logo">
                <img src={img1} alt={'Silver Dipper Logo'} />
            </div>
            <div className="title-container__content">
                <h2><font size="5">{slogan}</font></h2>
            </div>
            <hr />
            <div className="title-container__img-main">
                <img src={img2} alt={'Silver Dipper Shop'} />
            </div>
            <div className="title-container__coloredBox"></div> 
        </div>
    );
};
export default Home;