import '../styles/yearRoundFlavors.css';
import img1 from "../assets/flavor-imgs/caramel-apple-pie_1.jpg";
import img2 from "../assets/flavor-imgs/egg-nog_1.jpg";
import img3 from "../assets/flavor-imgs/lemon-meringue_1.jpg";
import img4 from "../assets/flavor-imgs/peach_1.jpg";
import img5 from "../assets/flavor-imgs/peppermint-stick_1.jpg";
import img6 from "../assets/flavor-imgs/pumpkin_1.jpg";
import img7 from "../assets/flavor-imgs/root-beer-float_4.jpg";
import img8 from "../assets/flavor-imgs/snap-o-lantern_1.jpg";
import img9 from "../assets/flavor-imgs/smores-to-love_orig.jpg";

// Flavor list
const flavors = [
    { name: "Caramel Apple Pie", image: img1 },
    { name: "Eggnog", image: img2 },
    { name: "Lemon Meringue", image: img3 },
    { name: "Peach", image: img4 },
    { name: "Peppermint Stick", image: img5 },
    { name: "Pumpkin", image: img6 },
    { name: "Root Beer Float", image: img7 },
    { name: "Snap O Lantern", image: img8 },
    { name: "S'more to Love", image: img9 },
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
