import React from 'react';
import './AsideVideoBuilder.scss';

function AsideVideoBuilder({title, channel, image}) {
    return (
        <div className="video-build">
            <div className="video-build__container">
                <img className="video-build__img" src={image} alt="Next video"/>
                <div className="video-build__titles-container">
                    <p className="video-build__title">{title}</p>
                    <p className="video-build__channel">{channel}</p>
                </div>
            </div>
        </div>
    )
}

export default AsideVideoBuilder;