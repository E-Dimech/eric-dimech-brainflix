import React from 'react';
import Thumb from '../../assets/Images/Upload-video-preview.jpg';

import './Upload.scss';

const Upload = () => {
    return (
        <div className="upload">
            <h1>Upload Video</h1>
            <form className="upload-form" name="upload-form">
            <ul className="upload-form__list">
                <li className="upload-form__name">
                    <label id="thumb-label" htmlFor="upload-form">VIDEO THUMBNAIL</label>
                    <img src={Thumb} className="upload-form__img" type="img" alt="Bike ride" />
                </li>
                <li className="upload-form__vid-title">
                    <label id="vid-title" htmlFor="upload-form">TITLE YOUR VIDEO</label>
                    <textarea className="upload-form__vid-title-input" type="text" id="title-input" name="user-title" placeholder="Add a title to your video" />
                </li>
                <li className="upload-form__vid-description">
                    <label id="vid-description" htmlFor="upload-form">ADD A VIDEO DESCRIPTION</label>
                    <textarea className="upload-form__vid-description-input" type="text" id="vid-description" name="user-description" placeholder="Add a description of your video" />
                </li>
                <li className="upload-form__button-publish-container">
                    <button className="upload-form__button-publish" id="button-p">PUBLISH</button>
                </li>
                <li className="comment-form__button-cancel-container">
                    <button className="upload-form__cancel" id="button-c">CANCEL</button>
                </li>
            </ul>
        </form>

        </div>
    )
}


export default Upload;
