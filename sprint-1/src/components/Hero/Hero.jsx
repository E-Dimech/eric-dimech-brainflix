import React from 'react';
import Race from '../../assets/Images/video-list-0.jpg';
import Play from '../../assets/Icons/SVG/Icon-play.svg';
import FullScreen from '../../assets/Icons/SVG/Icon-fullscreen.svg'
const Hero = () => {
    return (
        <div className="hero">
            <div>
                <video className="hero__poster" poster={Race} />
            </div>
            <div>
                <img className="hero__play" src={Play} alt="play button" />
                <img className="hero__full-screen" src={FullScreen} alt="Full screen button" />
            </div>
        </div>
    )
};


export default Hero;