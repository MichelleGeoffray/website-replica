import React from "react";

const LeveeMap = () => {
  return (
    <div>
      <iframe
        title="Levee google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97218.19838393663!2d-86.97705787646909!3d40.40732885171893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8812e2a843395aed%3A0x666e5d486c0ee357!2sSilver%20Dipper%20Ice%20Cream!5e0!3m2!1sen!2sus!4v1741284476575!5m2!1sen!2sus"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LeveeMap;