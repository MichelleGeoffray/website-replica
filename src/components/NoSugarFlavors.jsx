import '../styles/yearRoundFlavors.css';
import img1 from "../assets/flavor-imgs/cashews-and-caramel_1.jpg";
import img2 from "../assets/flavor-imgs/pomegranate-swirl_1.jpg";


// Flavor list
const flavors = [
    { name: "Cashews & Caramel", image: img1 },
    { name: "Pomegranate Swirl", image: img2 },
];

const NoSugarFlavors = () => {
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

export default NoSugarFlavors;
