import React from 'react';
import styled from 'styled-components';

/* components ---------------------------*/
import Nav from './Nav.jsx';

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
            <Nav />
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`
     
    display: flex;
    background-color: #E4FBFF;
    padding: 20px 5px;
    justify-content: left;

h1 {
    justify-content: right;
}

.Nav {
    display: flex;
    width: 500px;
}

a {
    flex: 1; 
    text-align: center;
    display: block;
    background: #B8B5FF;
    color: white;
    text-decoration: none;

    border-radius: 6px;

    padding: 20px;
    margin: 5px 5px;

    &.active {
        background-color: #7868E6;
    }
    &:hover {
        background-color: #160d52;
    }
}

`;