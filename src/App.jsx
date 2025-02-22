
import Navbar from './components/Navbar';
//import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import HomePage from "./pages/HomePage";
import HoursLocationsPage from "./pages/HoursLocationsPage";
import FlavorsPage from "./pages/FlavorsPage";
import PickUpDeliveryPage from "./pages/PickUpDeliveryPage";
import ShopPage from "./pages/ShopPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <header>
      <Navbar />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hours--locations" element={<HoursLocationsPage />} />
        <Route path="/flavors" element={<FlavorsPage />} />
        <Route path="/pick-up--delivery" element={<PickUpDeliveryPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <footer>
      <Footer />
    </footer>
  </HashRouter>
  );
};

export default App;
