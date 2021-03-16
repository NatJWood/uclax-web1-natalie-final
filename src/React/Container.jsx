import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* scripts ---------------------------*/
import {mq} from '../common/media_queries.js';
import useMediaQuery from '../common/useMediaQuery';

/* components ---------------------------*/
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import NavMobile from './Nav/NavMobile.jsx';
import NavLarge from './Nav/NavLarge.jsx';
import Main from './Main.jsx';

const Container = () => {

    const {isSmall } = useMediaQuery();

    return (
        <BrowserRouter>
            <ContainerStyled className = 'Container'>
                <Header />
                {
                    isSmall
                    ? <NavMobile />
                    : <NavLarge />
                }

                <Main />
                <Footer />
            </ContainerStyled>
        </BrowserRouter>
    )
}

export default Container;

const ContainerStyled = styled.div`
    background-color: #E4FBFF;

    @media ${mq.tablet} {
        background-color: #E4FBFF;
    }

    @media ${mq.desktop} {
        background-color: #E4FBFF;
    }

    @media ${mq.ultrawide} {
        background-color: #E4FBFF;
    }
`;