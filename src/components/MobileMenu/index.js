import React from 'react';
import {
    MobileMenuContainer, 
    Icon, 
    CloseIcon,
    MobileMenuWrapper,
    MobileMenuItems,
    MobileMenuLinks
} from './MobileMenuElements'

const MobileMenu = ({isOpen, toggle}) => {
    return(
        <MobileMenuContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MobileMenuWrapper>
                <MobileMenuItems>
                    <MobileMenuLinks to="about" onClick={toggle}>About Us</MobileMenuLinks>
                    <MobileMenuLinks to="prices" onClick={toggle}>Prices</MobileMenuLinks>
                    <MobileMenuLinks to="contact" onClick={toggle}>Contact Us</MobileMenuLinks>
                </MobileMenuItems>
            </MobileMenuWrapper>
        </MobileMenuContainer>
    );
};

export default MobileMenu;