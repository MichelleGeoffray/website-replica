import '../styles/flavors.css';
import YearRoundFlavors from "../components/YearRoundFlavors";
import SeasonalFlavors from "../components/SeasonalFlavors";
import VeganFlavors from "../components/VeganFlavors";
import NoSugarFlavors from "../components/NoSugarFlavors";
import ItalianIceFlavors from "../components/ItalianIceFlavors";
import SherbetFlavors from "../components/SherbetFlavors";

const FlavorsPage = () => {
  return (
    <div className="container">
      <div className="flavors-text">
        <strong><font size="5" color="#cf397c">Silver Dipper carries 50+ flavors!&nbsp;<br />​Our supplier is Chocolate Shoppe Ice Cream in Madison, WI.</font></strong>
        <br />
        <br />
        <font size="2" color="#0545a2">The photos below are hyper-linked to our manufacturer's website so you can check out the ingredients and nutritional information.<br />We do not carry all of Chocolate Shoppe's flavors and our supply can vary on a daily basis due to customer demand and manufacturer availability.</font>
        <br />
        <br />
        <font color="#000000">Allergy notice – All of the ice cream is manufactured in a facility that processes tree nuts.<br />Upon customer’s request we can sanitize scoopers before scooping a particular flavor.</font>
      </div>

      <div className="flavors-yearRound">
        <h2><strong><font color="#2a2a2a" size="5">Year Round Flavors:</font></strong></h2>
        <div className="flavors-yearRound-images">
          <YearRoundFlavors />
        </div>
      </div>

      <div className="flavors-divider">
        <hr />
      </div>

      <div className="flavors-seasonal">
        <h2><strong><font color="#2a2a2a" size="5">Seasonal Flavors:</font></strong></h2>
        <div className="flavors-seasonal-images">
          <SeasonalFlavors />
        </div>
      </div>
      
      <div className="flavors-divider">
        <hr />
      </div>

      <div className="flavors-vegan">
        <h2><strong><font color="#2a2a2a" size="5">Vegan Flavors:</font></strong></h2>
        <div className="flavors-vegan-images">
          <VeganFlavors />
        </div>
      </div>
      
      <div className="flavors-divider">
        <hr />
      </div>

      <div className="flavors-noSugar">
        <h2><strong><font color="#2a2a2a" size="5">No Sugar Added:</font></strong></h2>
        <div className="flavors-noSugar-images">
          <NoSugarFlavors />
        </div>
      </div>
      
      <div className="flavors-divider">
        <hr />
      </div>

      <div className="flavors-italian">
        <h2><strong><font color="#2a2a2a" size="5">Italian Ice (Non-Dairy, Non-Fat):</font></strong></h2>
        <div className="flavors-italian-images">
          <ItalianIceFlavors />
        </div>
      </div>
      
      <div className="flavors-divider">
        <hr />
      </div>

      <div className="flavors-sherbet">
        <h2><strong><font color="#2a2a2a" size="5">Sherbet (3% Dairy):</font></strong></h2>
        <div className="flavors-sherbet-images">
          <SherbetFlavors />
        </div>
      </div>

      
    </div>
  );
};

export default FlavorsPage;