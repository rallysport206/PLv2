import React from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg'
import './mobileMenuStyling.css'

const MobileMenu = ({isMenuOpen, toggle}) => {
    return(
        <>
            <aside className={`menu-section__content ${isMenuOpen ? 'menu-section__content--open' : ''}`} onClick={toggle}>
                <div className='menu-section__icon' onClick={toggle}>
                    {isMenuOpen ? <CgClose /> : <FaTimes />}
                </div>
                <div className='menu-section__items-wrapper'>
                    <ul className='menu-section__items'>
                        <Link className='menu-section__links' activeClass='active' to='about' spy={true}>
                            <a href="about" className='navbar-section__links'>About Us</a>
                        </Link>
                        <Link className='menu-section__links' activeClass='active' to='services' spy={true}>
                            <a href="contact" className='navbar-section__links'>Services</a>
                        </Link>
                        <Link className='menu-section__links' activeClass='active' to='contact' spy={true}>
                            <a href="pricing" className='navbar-section__links'>Contact</a>
                        </Link>
                    </ul>
                </div>
            </aside>
        </>    
    );
};

export default MobileMenu;