import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileMenu, 
    NavMenu, 
    NavItem, 
    NavLinks
} from './navElements';

function Navbar (){
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>TestNav</NavLogo>
                    <MobileMenu>
                        <GiHamburgerMenu />
                    </MobileMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="pricing">Pricing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;