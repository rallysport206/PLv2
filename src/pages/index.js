import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import Info from '../components/Info';
import { homeOne } from '../components/Info/Data';
import MobileMenu from '../components/MobileMenu';
import Navbar from '../components/Navbar';

const Home = () => {
    const [isOpen, statusIsOpen] = useState(false);

    const toggle = () => {
        statusIsOpen(!isOpen)
    };

    return (
        <>
            <MobileMenu isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Info {...homeOne} />
        </>
    )
}

export default Home;
