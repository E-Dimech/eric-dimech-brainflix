import React from 'react';
// import Thumb from '../../assets/Images/Upload-video-preview.jpg';
import Thumb from '../../assets/Images/Upload-video-preview.jpg';

import './Upload.scss';

const Upload = () => {
    return (
        <>    
            <div className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <div className="upload__container">
                    <div className="upload__border" />
                    <div className="upload__thumb">
                        <p className="upload__thumb-label" >VIDEO THUMBNAIL</p>
                        <img src={Thumb} className="upload__thumb-img" alt="Bike ride"/>
                    </div>
                    <form className="upload__form" name="upload__form">
                    <ul className="upload__form-list">
                        <li className="upload__form-vid-title">
                            <label id="vid-title" htmlFor="upload__form">TITLE YOUR VIDEO</label>
                            <textarea className="upload__form-vid-title-input" type="text" id="title-input" name="user-title" placeholder="Add a title to your video" />
                        </li>
                        <li className="upload__form-vid-description">
                            <label id="vid-description" htmlFor="upload__form">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="upload__form-vid-description-input" type="text" id="vid-description" name="user-description" placeholder="Add a description of your video" />
                        </li>
                    </ul>
                    </form>
                </div>
                    <div className="upload__button">
                        <div className="upload__button-publish-container">
                            <button className="upload__button-publish">PUBLISH</button>
                        </div>
                        <div className="upload__button-cancel-container">
                            <button className="upload__button-cancel">CANCEL</button>
                        </div>
                    </div>
            </div>
        </>
    )
}


export default Upload;
