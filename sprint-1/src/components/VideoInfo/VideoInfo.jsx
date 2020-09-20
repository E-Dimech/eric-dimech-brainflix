import React from 'react';

import Views from '../../assets/Icons/SVG/Icon-views.svg';
import Likes from '../../assets/Icons/SVG/Icon-likes.svg';

import './VideoInfo.scss';

const VideoInfo = ({ videoPlayerInfo }) => {
    const videoPlayerArr = videoPlayerInfo.map(object => {

    return (
        <div className="video-info">
            
            <h1 className="video-info__title">{object.title}</h1>
            <div className="video-info__info">
                <div className="video-info__subtitle">
                    <p className="video-info__subtitle-author">By {object.channel}</p>
                    <p className="video-info__subtitle-date">{object.timestamp}</p>
                </div>
                <div className="video-info__socials"> 
                    <div className="video-info__views">
                        <img className="video-info__views-img" src={Views} alt="The Views Eyeball" />
                        <p className="video-info__views-num">{object.views}</p>
                    </div>
                    <div className="video-info__likes">
                        <img className="video-info__likes-img" src={Likes} alt="The Likes Heart" />
                        <p className="video-info__likes-num">{object.likes}</p>
                    </div>
                </div>
            </div>
                <div className="video-info__bottom-border" />

                <p className="video-info__biography">{object.description}</p>

        </div>
       )
    });
  return videoPlayerArr;
};


export default VideoInfo;