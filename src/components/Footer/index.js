import React from 'react';
import './footerStyling.css'

const Footer = () => {
    return(
        <>
            <footer className='footer-content'>
                <div className='footer-menu'>
                    <div className='footer-items'>
                        <p className='footer-links'>Location</p>
                        <p className='footer-links'>Hours</p>
                        <p className='footer-links'>Phone</p>
                        <p className='footer-links'>Email</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;