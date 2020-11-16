import React from 'react';
import {FaTimes} from 'react-icons/fa';
import './mobileMenuStyling.css'

const MobileMenu = ({isOpen, toggle}) => {
    return(
        <>
            <aside className={`menu-section__content ${isOpen ? 'menu-section__content--open' : ''}`} isOpen={isOpen} onClick={toggle}>
                <div className='menu-section__icon' onClick={toggle}>
                    <FaTimes />
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