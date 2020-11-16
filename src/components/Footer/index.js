import React from 'react';
import './footerStyling.css'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return(
        <>
            <footer className='footer-content'>
                <div className='footer-wrap'> 
                    <div className='footer-menu'>
                        <div className='footer-links__wrap'>
                            <div className='footer-items'>
                                <h2 className='footer-title'>Location</h2>
                                <p className='footer-info'>625 S Lander St <br /> Seattle, WA 98134</p>
                            </div>
                            <div className='footer-items'>
                                <h2 className='footer-title'>Hours</h2>
                                <p className='footer-info'>Monday to Friday<br />
                                8:00am - 5:00pm</p>
                            </div>
                            <div className='footer-items'>
                                <h2 className='footer-title'>Phone</h2>
                                <p className='footer-info'>(206) 227-8799</p>
                            </div>
                            <div className='footer-items'>
                                <h2 className='footer-title'>Email</h2>
                                <a className='footer-info' href="mailto:paintlogic@gmail.com?Subject=Hello%20Paint%20Logic!">paintlogic@gmail.com</a>
                            </div>
                            <div className='footer-items'>
                                <h2 className='footer-title'>Social Media</h2>
                                <div className='footer-media'> 
                                    <FaInstagram />
                                    <FaFacebook />
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