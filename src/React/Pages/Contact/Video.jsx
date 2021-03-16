import React from 'react';
import styled from 'styled-components';

import ReactPlayer from 'react-player/youtube';


const Video = () => {

    return (
        <VideoStyled className='Video'>
            <ReactPlayer url='https://youtu.be/sQnoZUR6fvY' />
        </VideoStyled>
    );
}

export default Video;

const VideoStyled = styled.div`

`;