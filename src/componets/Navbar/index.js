import React from 'react';
import {Nav, NavbarContainer, NavLogo} from './navElements';

function Navbar (){
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        TestNav
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;