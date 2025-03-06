import '../styles/yearRoundFlavors.css';
import img1 from "../assets/flavor-imgs/carrot-mango-italian-ice_1.jpg";
import img2 from "../assets/flavor-imgs/raspberry-lemon-italian-ice_1.jpg";
import img3 from "../assets/flavor-imgs/passion-fruit_orig.jpg";


// Flavor list
const flavors = [
    { name: "Carrot Mango", image: img1 },
    { name: "Raspberry Lemon", image: img2 },
    { name: "Passion Fruit", image: img3 }
];

const ItalianIceFlavors = () => {
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

export default ItalianIceFlavors;
