import React from 'react';
import Race from '../../assets/Images/video-list-0.jpg';
import Play from '../../assets/Icons/SVG/Icon-play.svg';
import FullScreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import Volume from '../../assets/Icons/SVG/Icon-volume.svg';
import Views from '../../assets/Icons/SVG/Icon-views.svg';
import Likes from '../../assets/Icons/SVG/Icon-likes.svg';
import './Video.scss';

const Video = ({ videoPlayerInfo }) => {
    const videoPlayerArr = videoPlayerInfo.map(object => {

    return (
        <div className="video">
            <div key={object.id} className="video__container">
                <video className="video__hero" poster={Race} />
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

              
                <h1 className="video__title">{object.title}</h1>
                <div className="video__info">
                    <div className="video__subtitle">
                        <p className="video__subtitle-author">{object.channel}</p>
                        <p className="video__subtitle-date">{object.timestamp}</p>
                    </div>
                    <div className="video__socials"> 
                        <div className="video__views">
                            <img className="video__views-img" src={Views} alt="The Views Eyeball" />
                            <p className="video__views-num">{object.views}</p>
                        </div>
                        <div className="video__likes">
                            <img className="video__likes-img" src={Likes} alt="The Likes Heart" />
                            <p className="video__likes-num">{object.likes}</p>
                        </div>
                    </div>
                </div>
                    <div className="video__bottom-border" />

                    <p className="video__biography">{object.description}</p>

        </div>
       )
    });
  return videoPlayerArr;
};


export default Video;