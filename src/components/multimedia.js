import React from 'react';
import ReactPlayer from 'react-player';
import Video from '../videos/videoCapez.mp4';

const Multimedia = () => {

    return (

            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    playing={true}
                    width="100%"
                    height="100%"
                    loop
                    muted
                    url={Video}
                />
            </div>

    );
};

export default Multimedia;