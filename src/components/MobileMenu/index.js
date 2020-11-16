import React from 'react';
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
                        <a className='menu-section__links' href="about" onClick={toggle}>About Us</a>
                        <a className='menu-section__links' href="prices" onClick={toggle}>Prices</a>
                        <a className='menu-section__links' href="contact" onClick={toggle}>Contact Us</a>
                    </ul>
                </div>
            </aside>
        </>    
    );
};

export default MobileMenu;