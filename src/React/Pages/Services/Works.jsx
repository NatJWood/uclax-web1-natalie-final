import React, {useState} from 'react';

/* script ---------------------------*/
import {services} from './servicesData.js';

/* Components ---------------------------*/
import FilterNav from './FilterNav/FilterNav.jsx';
import Gallery from './Gallery/Gallery.jsx';

const Works = () => {

    const [catChosen, catChosenUpdate] = useState('All');

    return (
        <div>
            <h1>Works</h1>
            <FilterNav 
                services={services} 
                catChosen={catChosen} 
                catChosenUpdate={catChosenUpdate} 
            />
            <Gallery 
                services={services} 
                catChosen={catChosen} 
            />
        </div>
    )
}

export default Works;