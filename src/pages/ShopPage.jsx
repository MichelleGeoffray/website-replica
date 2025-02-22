import '../styles/shop.css';
import { Link } from "react-router-dom";

import toysImg from '../assets/toys.jpg';
import giftsButton from '../assets/gifts-button.png';
import toysButton from '../assets/toys-button.png';

const ShopPage = () => {
  return (
    <div className="container">
      <div className="shop-main">
        <div className="shop-main-text">
					<h2><strong><font color="#0545a2">Toys and Gifts</font></strong></h2>
					<p>We are proud to offer more than just our delicious ice cream flavors. Browse our large selection of toys and gifts, available for purchase in store.</p>
					<div className ="shop-main-button">
            <Link to="/hours--locations">Hours & Locations</Link>
          </div>
        </div>
        <div className="shop-main-img">
          <img src={toysImg} alt="Toys" />
        </div>
      </div>

      <div className="shop-divider">
        <hr />
      </div>

      <div className="shop-buttons">
        <div className ="shop-button-gifts">
            <Link to="/"><img src={giftsButton} alt="Gifts Button" /></Link>
        </div>
        <div className ="shop-button-toys">
            <Link to="/"><img src={toysButton} alt="Toys Button" /></Link>
        </div>
      </div>



    </div>
  );
};

export default ShopPage;