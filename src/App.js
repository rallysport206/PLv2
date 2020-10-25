import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import MobileMenu from './components/MobileMenu';

function App() {
  return (
    <Router>
      <Navbar />
      <MobileMenu />
      <h1>testing paint logic</h1>
      <Footer />
    </Router>
  );
}

export default App;
