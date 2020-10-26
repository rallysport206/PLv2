import React, {useState} from 'react';
import MobileMenu from '../components/MobileMenu';
import Navbar from '../components/Navbar';

function Home(){
    const [isOpen, statusIsOpen] = useState(false);

    const toggle = () => {
        statusIsOpen(!isOpen)
    };

    return (
        <>
            <MobileMenu isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    )
}

export default Home;
