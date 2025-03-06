import '../styles/hoursLocation.css';
import LeveeMap from "../components/LeveeMap";
import SagamoreMap from "../components/SagamoreMap";

const HoursLocationsPage = () => {
  return (
    <div className="container">
        <div className="location-levee">
            <div className="location-map">
                <LeveeMap />
            </div>
            <div className="location-text">
                <h2><font size="5">Levee Store</font></h2>
                <p>201 E State St</p>
                <p>West Lafayette, IN 47906</p>
                <br />
                <p>765-743-7511</p>
                <br />
                <strong><p>Store Hours:</p></strong>
                <strong><p><font color="#8d2424">Everyday 1-11 pm</font></p></strong>
            </div>
        </div>
        <div className="location-divider">
            <hr />
        </div>
        <div className="location-sagamore">
            <div className="location-map">
                <SagamoreMap />
            </div>
            <div className="location-text">
                <h2><font size="5">Sagamore Parkway Store</font></h2>
                <p>307 Sagamore Parkway West</p>
                <p>West Lafayette, IN 47906</p>
                <br />
                <p>765-418-0444</p>
                <br />
                <strong><p>Store Hours:</p></strong>
                <strong><p><font color="#8d2424">Sunday - Thursday 12-9 pm</font></p></strong>
                <strong><p><font color="#8d2424">Friday & Saturday 12-10 pm</font></p></strong>
            </div>
        </div>
    </div>
  );
};

export default HoursLocationsPage;