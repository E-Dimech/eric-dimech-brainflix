import React from 'react';

import Play from '../../assets/Icons/SVG/Icon-play.svg';
import FullScreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import Volume from '../../assets/Icons/SVG/Icon-volume.svg';

import './Video.scss';

const Video = ({ videoPlayer}) => {    
    return (
        <div key={videoPlayer.id} className="video">
            <div className="video__container">
                <video className="video__hero" poster={videoPlayer.image} alt={videoPlayer.title} />
            </div>

            <div className="video__controls">
                <div className="video__container-play">
                    <img className="video__play-button" src={Play} alt="play button" />
                </div>
                <div className="video__container-scrub">
                    <div className="video__scrub-bar" />
                    <p className="video__scrub-bar-time">0:00/0:42</p>
                </div>
                <div className="video__container-full-volume">
                    <img className="video__full-screen" src={FullScreen} alt="Full screen button" />
                    <img className="video__volume" src={Volume} alt="Volume button" />
                </div>
            </div>
        </div>
       )}
  
export default Video;