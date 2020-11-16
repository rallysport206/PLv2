import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import Info from '../components/Info';
import MobileMenu from '../components/MobileMenu';
import Navbar from '../components/Navbar';
import Services from '../components/Services';

const Home = () => {
    const [isOpen, statusIsOpen] = useState(false);

    const toggle = () => {
        statusIsOpen(!isOpen)
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <MobileMenu isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Info />
            <Services />
        </div>
    )
}

export default Home;
