import React from 'react';
import Eye from './Eye.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Nav from './Nav.jsx';

const Container = () => {

    return (
        <div className = 'Container'>
            CONTENT
            <Header />
            <Nav />
            <Eye />
            <Footer />
        </div>
    )
}

export default Container;