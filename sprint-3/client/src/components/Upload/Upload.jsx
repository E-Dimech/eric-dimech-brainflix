import React from 'react';
import axios from 'axios';
import Thumb from '../../assets/Images/Upload-video-preview.jpg';

import './Upload.scss';

const localHost = "http://localhost:8080/videos";

class Upload extends React.Component {

    state = {
        upTitle: "",
        upDescription: "",
    };

    handleUpTitle = (e) => {
        this.setState({
            upTitle: e.target.value
        });
    };

    handleUpDescription = (e) => {
        this.setState({
            upDescription: e.target.value
        });
    };

    uploadSubmit = (e) => {
        e.preventDefault();
        let newUpload = {
            image: {Thumb},
            title: this.state.upTitle,
            description: this.state.upDescription
        };

        axios
            .post(localHost, newUpload) 
                .then((response) => {
                    console.log(response)
                })
                    .catch((error) => {
                        console.log(error)
                    });
            
        e.target.reset();
        this.setState({
            upTitle: "",
            upDescription: ""
        });
    };

        upCancel = (e) => {
            e.preventDefault();
            this.setState({
                upTitle: "",
                upDescription: "",
            });
        };

    render() {

    return (
        <>    
            <div className="upload">
                <h1 className="upload__title">Upload Video</h1>
                <div className="upload__container">
                    <div className="upload__border" />
                    <div className="upload__thumb">
                        <p className="upload__thumb-label">VIDEO THUMBNAIL</p>
                        <img src={Thumb} className="upload__thumb-img" alt="Bike ride"/>
                    </div>
                    <form className="upload__form" onSubmit={this.uploadSubmit} name="upload__form">
                    <ul className="upload__form-list">
                        <li className="upload__form-vid-title">
                            <label id="vid-title" htmlFor="upload__form">TITLE YOUR VIDEO</label>
                            <textarea className="upload__form-vid-title-input" type="text" id="title-input" name="user-title" value={this.state.upTitle} onChange={this.handleUpTitle} required placeholder="Add a title to your video" />
                        </li>
                        <li className="upload__form-vid-description">
                            <label id="vid-description" htmlFor="upload__form">ADD A VIDEO DESCRIPTION</label>
                            <textarea className="upload__form-vid-description-input" type="text" id="vid-description" name="user-description" value={this.state.upDescription} onChange={this.handleUpDescription} required placeholder="Add a description of your video" />
                        </li>
                    </ul>
                    <div className="upload__button">
                        <div className="upload__button-publish-container">
                            <button className="upload__button-publish" type="submit">PUBLISH</button>
                        </div>
                        <div className="upload__button-cancel-container">
                            <button className="upload__button-cancel" onClick={this.upCancel}>CANCEL</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </>
    )
  }
}


export default Upload;
