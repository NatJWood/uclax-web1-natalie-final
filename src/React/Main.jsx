import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* Components ------------- */
import Home from './Pages/Welcome/Home.jsx';
import Works from './Pages/Services/Works.jsx';
import Contact from './Pages/Contact/Contact.jsx';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path ='/Works' component = { Works } />
                <Route path ='/contact' component = { Contact } />
                <Route path = '/' component = { Home } exact />
            </Switch>
        </main>
    )
}

export default Main;