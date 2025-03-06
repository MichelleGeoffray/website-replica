import '../styles/yearRoundFlavors.css';
import img1 from "../assets/flavor-imgs/rainbow-sherbet_1.jpg";


// Flavor list
const flavors = [
    { name: "Rainbow", image: img1 },
];

const SeasonalFlavors = () => {
    return(
        <div className="flavors-container">
            {flavors.map((flavor, index) => (
                <div key={index} className="flavor-item">
                    <img src={flavor.image} alt={flavor.name} />
                    <div className="flavor-text">{flavor.name}</div>
                </div>
            ))}
        </div>
    );
};

export default SeasonalFlavors;
