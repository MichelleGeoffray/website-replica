import '../styles/yearRoundFlavors.css';
import img1 from "../assets/flavor-imgs/chocolate-chip-oatmeal-cookie_orig.jpg";


// Flavor list
const flavors = [
    { name: "Chocolate Chip Oatmeal Cookie", image: img1 },
];

const VeganFlavors = () => {
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

export default VeganFlavors;
