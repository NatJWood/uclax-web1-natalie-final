import React, { useState} from 'react';

const Eye = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/close.png');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/open.png');
    }

    const imageOut = () => {
        imageSrcUpdate('/assets/img/close.png');
    }

    return (
        <div>
        <img
            src = { imageSrc }
            onMouseOver = { imageOver }
            onMouseOut = { imageOut }
        />
        </div>
    )
}

export default Eye;