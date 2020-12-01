import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../images/pl_logo2.png';
import './navStyling.css'
import { Link } from 'react-scroll';

const Navbar = ({toggle}) => {
    return(
        <div className='navbar-section'>
            <div className='navbar-section__content'>
                <img className='navbar-section__icon' src={logo} alt='paint logic logo'/>
                <div className='navbar-section__menu-mobile' onClick={toggle}>
                    <GiHamburgerMenu />
                </div>
                <div className='navbar-section__menu-nav'>
                    <Link className='navbar-section__item' activeClass='active' to='about' spy={true} smooth={true} duration={800} offset={-80}>
                        <a href="about" className='navbar-section__links'>About Us</a>
                    </Link>
                    <Link className='navbar-section__item' activeClass='active' to='services' spy={true} smooth={true} duration={800} offset={-80}>
                        <a href="contact" className='navbar-section__links'>Services</a>
                    </Link>
                    <Link className='navbar-section__item' activeClass='active' to='contact' spy={true} smooth={true} duration={800}>
                        <a href="pricing" className='navbar-section__links'>Contact</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;