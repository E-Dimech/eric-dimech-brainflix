import React from 'react';
import Race from '../../assets/Images/video-list-0.jpg';
import Play from '../../assets/Icons/SVG/Icon-play.svg';
import FullScreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import Volume from '../../assets/Icons/SVG/Icon-volume.svg';
import Views from '../../assets/Icons/SVG/Icon-views.svg';
import Likes from '../../assets/Icons/SVG/Icon-likes.svg';
import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__container">
                <video className="hero__video" poster={Race} />
            </div>

            <div className="hero__video-controls">
                <div className="hero__container-play">
                    <img className="hero__play-button" src={Play} alt="play button" />
                </div>
                <div className="hero__container-scrub">
                    <div className="hero__scrub-bar" />
                </div>
                <div className="hero__container-full-volume">
                    <img className="hero__full-screen" src={FullScreen} alt="Full screen button" />
                    <img className="hero__volume" src={Volume} alt="Volume button" />
                </div>
            </div>

              
                <h1 className="hero__title">BMX Rampage: 2018 Highlights</h1>
                <div className="hero__subtitle">
                    <p className="hero__subtitle-author">By Red Cow</p>
                    <p className="hero__subtitle-date">12/18/2018</p>
                </div>
                <div className="hero__socials"> 
                    <div className="hero__views">
                        <img className="hero__views-img" src={Views} alt="The Views Eyeball" />
                        <p className="hero__views-num">1,001,023</p>
                    </div>
                    <div className="hero__likes">
                        <img className="hero__likes-img" src={Likes} alt="The Likes Heart" />
                        <p className="hero__likes-num">110,985</p>
                    </div>
                </div>
                <div className="hero__bottom-border" />

                <p className="hero__biography">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>


        </div>
    )
};


export default Hero;