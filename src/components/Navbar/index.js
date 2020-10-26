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

const Navbar = ({toggle}) => {
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Paint Logic</NavLogo>
                    <MobileMenu onClick={toggle}>
                        <GiHamburgerMenu />
                    </MobileMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About Us</NavLinks>
                        </NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        <NavItem>
                            <NavLinks to="pricing">Pricing</NavLinks>
                        </NavItem>
                        <NavItem>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;