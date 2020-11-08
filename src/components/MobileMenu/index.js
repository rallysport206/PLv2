import React from 'react';
import {FaTimes} from 'react-icons/fa';
import './mobileMenuStyling.css'

const MobileMenu = ({isOpen, toggle}) => {
    return(
        <aside className='menu-container' isOpen={isOpen} onClick={toggle}>
            <div className='icon' onClick={toggle}>
                {/* <FaTimes /> */}
            </div>
            <div className='menu-items-wrapper'>
                <ul className='menu-items'>
                    <a className='menu-links' href="about" onClick={toggle}>About Us</a>
                    <a className='menu-links' href="prices" onClick={toggle}>Prices</a>
                    <a className='menu-links' href="contact" onClick={toggle}>Contact Us</a>
                </ul>
            </div>
        </aside>
    );
};

export default MobileMenu;