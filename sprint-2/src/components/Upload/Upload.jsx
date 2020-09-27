import React from 'react';
import Thumb from '../../assets/Images/Upload-video-preview.jpg';

import './Upload.scss';

const Upload = () => {
    return (
        <>    
            <div className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <div className="upload__test">
                    <div className="upload__double-test" />
                    <div className="upload__thumb">
                        <p className="upload__thumb-label" >VIDEO THUMBNAIL</p>
                        <img src={Thumb} className="upload__thumb-img" alt="Bike ride"/>
                    </div>
                    <form className="upload-form" name="upload-form">
                    <ul className="upload-form__list">
                        <li className="upload-form__vid-title">
                            <label id="vid-title" htmlFor="upload-form">TITLE YOUR VIDEO</label>
                            <textarea className="upload-form__vid-title-input" type="text" id="title-input" name="user-title" placeholder="Add a title to your video" />
                        </li>
                        <li className="upload-form__vid-description">
                            <label id="vid-description" htmlFor="upload-form">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="upload-form__vid-description-input" type="text" id="vid-description" name="user-description" placeholder="Add a description of your video" />
                        </li>
                    </ul>
                    </form>
                </div>
                    <div className="upload-button">
                        <div className="upload-button__publish-container">
                            <button className="upload-button__publish">PUBLISH</button>
                        </div>
                        <div className="upload-button__cancel-container">
                            <button className="upload-button__cancel">CANCEL</button>
                        </div>
                    </div>

            </div>
        </>
    )
}


export default Upload;
