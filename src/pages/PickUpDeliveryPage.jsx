import '../styles/pickUpDelivery.css';

import img from '../assets/doordash-logo.png';

const PickUpDeliveryPage = () => {
  return (
    <div className="container">
      <div className="pickUp-main">
        <h2><font color="#2a2a2a" size="6">Order Pick Up or Delivery with Doordash</font></h2>
        <a href="https://www.doordash.com/business/207388/?utm_source=partner-link&utm_medium=website&utm_campaign=207388" target="_blank" alt="DoorDash" aria-label="DoorDash"><img src={img} alt="DoorDash Icon" /></a>
      </div>
      <div className="pickUp-divider">
        <hr />
      </div>

      <div class="pickUp-text">
        <strong><font color="#5040ae">Please note</font></strong> - <font color="#2a2a2a">Items are subject to availability.&nbsp; See delivery partner website.&nbsp;</font>&nbsp;<font color="#000000">The delivery times vary and they may cancel orders or show we are closed when they do not have delivery drivers available.&nbsp; Also, the order minimums are set by the delivery company and not by Silver Dipper.</font>
        </div>
    </div>
  );
};

export default PickUpDeliveryPage;