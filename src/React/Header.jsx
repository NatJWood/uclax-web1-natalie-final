import React from 'react';
import styled from 'styled-components';
import {mq} from '../common/media_queries.js';

const Header = () => {

    return (
        <HeaderStyled className='Header'>
            <h1>Natalie Wood Photography</h1> 
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.div`

    /* background-color: #EDEEF7;
    margin: auto 0px;
    padding: 5px 0px; */

    @media ${mq.desktop} {
        position: absolute;
        top: 10px;
        right: 20px;
    }

    @media ${mq.ultrawide} {
        position: absolute;
        top: 10px;
        right: 20px;
    }
`;