import React from 'react';
import './AsideVideoBuilder.scss';

const AsideVideoBuilder = ({ sideVideos }) => {
     const videoArr = sideVideos.map((object, index) => {
        //  console.log(object.id);
    return (
        // < className="video-build">
            <a href="/#" key={object.id} className="video-build__container">
                <img className="video-build__img" src={object.image} alt={object.title}/>
                <div className="video-build__titles-container">
                    <p className="video-build__title">{object.title}</p>
                    <p className="video-build__channel">{object.channel}</p>
                </div>
            </a>
        
        );
    });
    return (
        <div className="video-build">
            <div className="video-build__border" />
            <h2 className="video-build__section-title">NEXT VIDEO</h2>
            {videoArr}
        </div>
    );
};

export default AsideVideoBuilder;