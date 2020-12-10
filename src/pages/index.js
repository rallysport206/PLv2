import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import Info from '../components/Info';
import Estimate from '../components/Estimate'
import MobileMenu from '../components/MobileMenu';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggle = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <MobileMenu isMenuOpen={isMenuOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Info />
            <Estimate />
            <Services />
            <Slider />
            <Footer />
        </div>
    )
}

export default Home;
