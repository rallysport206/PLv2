import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <h1>testing paint logic</h1>
      <Footer />
    </Router>
  );
}

export default App;
