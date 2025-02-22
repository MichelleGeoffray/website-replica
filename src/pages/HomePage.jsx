import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>
      
      <main>
        <div className="container">
          <Home />
        </div>
        <div className="container">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;
