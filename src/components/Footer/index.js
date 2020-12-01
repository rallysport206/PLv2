import React from 'react';
import './footerStyling.css'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
    return(
        <>
            <footer className='footer-content' id='contact'>
                <div className='footer-wrap'> 
                    <div className='footer-menu'>
                        <div className='footer-links__wrap'>
                            <div className='footer-items'>
                                <div className='footer-logo' />
                            </div>
                            <div className='footer-items'>
                                <p className='footer-info'>Paint Logic</p>
                                <p className='footer-info'>625 S Lander St <br /> Seattle, WA 98134</p>
                                <p className='footer-info'>(206) 227-8799</p>
                            </div>
                            <div className='footer-items'>
                                <p className='footer-info' href="mailto:paintlogic@gmail.com?Subject=Hello%20Paint%20Logic!">paintlogic@gmail.com</p>
                                <p className='footer-info'>Monday to Friday<br />
                                8:00am - 5:00pm</p>
                                <div className='footer-media'> 
                                    <a href='https://instagram.com/petrakis135_paintlogic' className='footer-icon'><FaInstagram /></a>
                                    <a href='https://www.facebook.com/paintlogicseattle' className='footer-icon'><FaFacebook /></a>
                                    <a href="mailto:paintlogic@gmail.com?Subject=Hello%20Paint%20Logic!" className='footer-icon'><FiMail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </footer>
        </>
    );
};
export default Footer;