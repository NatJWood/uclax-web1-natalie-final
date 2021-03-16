import React from 'react';
import styled from 'styled-components';

/* components ---------------------------*/
import ContactForm from './ContactForm.jsx';
import Video from './Video.jsx';

const Contact = () => {

    return (
        <ContactStyled className='Contact'>
            <h1>Contact</h1>
            <ContactForm />
            <div className='vid'>
                <Video />
            </div>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`

    h1 {
        text-align: center;
    }

    .vid {
        width: 640px;
        height: 360px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 15px;
    }
`;