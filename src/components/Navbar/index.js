import React from 'react';
import {FaBars} from 'react-icons/fa';
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
                        <FaBars />
                    </MobileMenu>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;