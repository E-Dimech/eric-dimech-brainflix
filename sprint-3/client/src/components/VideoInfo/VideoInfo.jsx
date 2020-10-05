import React from 'react';

import Views from '../../assets/Icons/SVG/Icon-views.svg';
import Likes from '../../assets/Icons/SVG/Icon-likes.svg';

import './VideoInfo.scss';

const DateStamp = (date) => {
    return new Date(date).toLocaleDateString()
};

const VideoInfo = ({ videoPlayerInfo }) => {

    return (
        <div key={videoPlayerInfo.id} className="video-info">
            
            <h1 className="video-info__title">{videoPlayerInfo.title}</h1>
            <div className="video-info__info">
                <div className="video-info__subtitle">
                    <p className="video-info__subtitle-author">By {videoPlayerInfo.channel}</p>
                    <p className="video-info__subtitle-date">{DateStamp(videoPlayerInfo.timestamp)}</p>
                </div>
                <div className="video-info__socials"> 
                    <div className="video-info__views">
                        <img className="video-info__views-img" src={Views} alt="The Views Eyeball" />
                        <p className="video-info__views-num">{videoPlayerInfo.views}</p>
                    </div>
                    <div className="video-info__likes">
                        <img className="video-info__likes-img" src={Likes} alt="The Likes Heart" />
                        <p className="video-info__likes-num">{videoPlayerInfo.likes}</p>
                    </div>
                </div>
            </div>
                <div className="video-info__bottom-border" />

                <p className="video-info__biography">{videoPlayerInfo.description}</p>

        </div>
       )};

export default VideoInfo;