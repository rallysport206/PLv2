import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import './navStyling.css'

const Navbar = ({toggle}) => {
    return(
        <div className='navbar-section'>
            <div className='navbar-section__content'>
                <div className='navbar-section__icon' href='/'>Paint Logic</div>
                <div className='navbar-section__menu-mobile' onClick={toggle}>
                    <GiHamburgerMenu />
                </div>
                <div>
                </div>
                <ul className='navbar-section__menu-nav'>
                    <li className='navbar-section__item'>
                        <a href="about" className='navbar-section__links'>About Us</a>
                    </li>
                        <a href="contact" className='navbar-section__links'>Contact</a>
                    <li className='navbar-section__item'>
                        <a href="pricing" className='navbar-section__links'>Pricing</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;