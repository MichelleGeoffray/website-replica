
import Navbar from './components/Navbar';
import HomeTitle from './components/HomeTitle';
import HomeMain from './components/HomeMain';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="section">
          <div className="container">
            <HomeTitle />
          </div>
        </div>
        <div className="section">
          <div className="container">
            <HomeMain />
          </div>
        </div>
        <div className="section">
          <div className="container">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
