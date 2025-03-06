import '../styles/yearRoundFlavors.css';
import img1 from "../assets/flavor-imgs/birthday-cake_1.jpg";
import img2 from "../assets/flavor-imgs/black-cherry_1.jpg";
import img3 from "../assets/flavor-imgs/blue-moon_1.jpg";
import img4 from "../assets/flavor-imgs/blueberry-cheesecake_1.jpg";
import img5 from "../assets/flavor-imgs/bourbon-pecan-pie_1.jpg";
import img6 from "../assets/flavor-imgs/butter-pecan_1.jpg";
import img7 from "../assets/flavor-imgs/cake-batter-fudge_1.jpg";
import img8 from "../assets/flavor-imgs/cappuccino-break_1.jpg";
import img9 from "../assets/flavor-imgs/carrot-cake_orig.jpg";
import img10 from "../assets/flavor-imgs/cherry-chocolate-chip_orig.jpg";
import img11 from "../assets/flavor-imgs/chocolate_1.jpg";
import img12 from "../assets/flavor-imgs/coconut-almond-bliss_1.jpg";
import img13 from "../assets/flavor-imgs/cookie-dough_1.jpg";
import img14 from "../assets/flavor-imgs/cotton-candy_1.jpg";
import img15 from "../assets/flavor-imgs/espresso_1.jpg";
import img16 from "../assets/flavor-imgs/exhausted-parent_1.jpg";
import img17 from "../assets/flavor-imgs/fat-elvis_1.jpg";
import img18 from "../assets/flavor-imgs/green-tea_1.jpg";
import img19 from "../assets/flavor-imgs/halleys-comet_1.jpg";
import img20 from "../assets/flavor-imgs/heaps-of-love_1.jpg";
import img21 from "../assets/flavor-imgs/bang-iced-latte-da_1.png";
import img22 from "../assets/flavor-imgs/kitty-kitty-bang-bang_orig.jpg";
import img23 from "../assets/flavor-imgs/mackinac-island-fudge_1.jpg";
import img24 from "../assets/flavor-imgs/maple-nut_1.jpg";
import img25 from "../assets/flavor-imgs/mint-avalanche_1.jpg";
import img26 from "../assets/flavor-imgs/mint-chip_1.jpg";
import img27 from "../assets/flavor-imgs/moose-tracks_1.jpg";
import img28 from "../assets/flavor-imgs/munchie-madness_1.jpg";
import img29 from "../assets/flavor-imgs/old-fashioned-vanilla_1.jpg";
import img30 from "../assets/flavor-imgs/peanut-butter-cookie-dough_1.jpg";
import img31 from "../assets/flavor-imgs/peanut-butter-cup_1.jpg";
import img32 from "../assets/flavor-imgs/peanut-butter-hearts-chocolate_1.jpg";
import img33 from "../assets/flavor-imgs/pistachio-nut_1.jpg";
import img34 from "../assets/flavor-imgs/praline-pecan_1.jpg";
import img35 from "../assets/flavor-imgs/strawberry_1.jpg";
import img36 from "../assets/flavor-imgs/strawberry-cheesecake_1.jpg";
import img37 from "../assets/flavor-imgs/superman_1.jpg";
import img38 from "../assets/flavor-imgs/this-just-got-serious_1.jpg";
import img39 from "../assets/flavor-imgs/ultimate-oreo_1.jpg";
import img40 from "../assets/flavor-imgs/yippee-skippee_1.jpg";
import img41 from "../assets/flavor-imgs/zanzibar_orig.jpg";
import img42 from "../assets/flavor-imgs/zanzimint_orig.jpg";
import img43 from "../assets/flavor-imgs/zoreo_orig.jpg";

// Flavor list
const flavors = [
    { name: "Birthday Cake", image: img1 },
    { name: "Black Cherry", image: img2 },
    { name: "Blue Moon", image: img3 },
    { name: "Blueberry Cheesecake", image: img4 },
    { name: "Bourbon Pecan Pie", image: img5 },
    { name: "Butter Pecan", image: img6 },
    { name: "Cake Batter Fudge", image: img7 },
    { name: "Cappuccino Break", image: img8 },
    { name: "Carrot Cake", image: img9 },
    { name: "Cherry Chocolate Chip", image: img10 },
    { name: "Chocolate", image: img11 },
    { name: "Coconut Almond Bliss", image: img12 },
    { name: "Cookie Dough", image: img13 },
    { name: "Cotton Candy", image: img14 },
    { name: "Espresso (Leveee Location Only)", image: img15 },
    { name: "Exhausted Parent", image: img16 },
    { name: "Fat Elvis", image: img17 },
    { name: "Green Tea", image: img18 },
    { name: "Halley's Comet", image: img19 },
    { name: "Heaps of Love", image: img20 },
    { name: "Iced Latte-Da", image: img21 },
    { name: "Kitty Kitty Bang Bang", image: img22 },
    { name: "Mackinac Island Fudge (Sagamore Location Only)", image: img23 },
    { name: "Maple Nut", image: img24 },
    { name: "Mint Avalanche (Pints Only)", image: img25 },
    { name: "Mint Chip", image: img26 },
    { name: "Moose Tracks", image: img27 },
    { name: "Munchie Madness", image: img28 },
    { name: "Old Fashioned Vanilla", image: img29 },
    { name: "Peanut Butter Cookie Dough", image: img30 },
    { name: "Peanut Butter Cup (Pints Only)", image: img31 },
    { name: "Peanut Butter Hearts Chocolate", image: img32 },
    { name: "Pistachio Nut", image: img33 },
    { name: "Praline Pecan", image: img34 },
    { name: "Strawberry", image: img35 },
    { name: "Strawberry Cheesecake", image: img36 },
    { name: "Superman", image: img37 },
    { name: "This S&@! Just Got Serious", image: img38 },
    { name: "Ultimate Oreo", image: img39 },
    { name: "Yippee Skippee", image: img40 },
    { name: "Zanzibar", image: img41 },
    { name: "Zanzimint", image: img42 },
    { name: "Zoreo", image: img43 },
];

const YearRoundFlavors = () => {
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

export default YearRoundFlavors;
