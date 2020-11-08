import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import './navStyling.css'

const Navbar = ({toggle}) => {
    return(
        <div className='nav'>
            <div className='navbarContainer'>
                <div className='navLogo' href='/'>Paint Logic</div>
                <div className='mobileMenu' onClick={toggle}>
                    <GiHamburgerMenu />
                </div>
                <div>
                </div>
                <ul className='navMenu'>
                    <li className='navItem'>
                        <a href="about" className='navLinks'>About Us</a>
                    </li>
                        <a href="contact" className='navLinks'>Contact</a>
                    <li className='navItem'>
                        <a href="pricing" className='navLinks'>Pricing</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;