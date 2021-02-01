import React from 'react';

/* components ---------------------------*/
import Staff from './Staff.jsx';
import Tabbed from './Tabbed/Tabbed.jsx';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome</h1>

            <Tabbed />
            <Staff />
        </div>
    )
}

export default Welcome;