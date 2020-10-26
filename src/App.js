import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
