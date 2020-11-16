import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import Info from '../components/Info';
import MobileMenu from '../components/MobileMenu';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

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
            <Services />
            <Footer />
        </div>
    )
}

export default Home;
