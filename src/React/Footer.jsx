import React from 'react';
import styled from 'styled-components';

const Footer = () => {

    return (
        <FooterStyled className='Footer'>
            Copyright 2021
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.div`
    text-align: center;
`;