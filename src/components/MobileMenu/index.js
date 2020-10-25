import React from 'react';
import {
    MobileMenuContainer, 
    Icon, 
    CloseIcon,
    MobileMenuWrapper,
    MobileMenuItems,
    MobileMenuLinks
} from './MobileMenuElements'

function MobileMenu(){
    return(
        <>
            <MobileMenuContainer>
                <Icon>
                    <CloseIcon />
                </Icon>
                <MobileMenuWrapper>
                    <MobileMenuItems>
                        <MobileMenuLinks to="about">
                            About Us
                        </MobileMenuLinks>
                        <MobileMenuLinks to="prices">
                            Prices
                        </MobileMenuLinks>
                        <MobileMenuLinks to="contact">
                            Contact Us
                        </MobileMenuLinks>
                    </MobileMenuItems>
                </MobileMenuWrapper>
            </MobileMenuContainer>
        </>
    );
};

export default MobileMenu;