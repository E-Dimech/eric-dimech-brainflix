import React from 'react';
import axios from 'axios';
import Thumb from '../../assets/Images/Upload-video-preview.jpg';
import uuid from 'uuid';

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
        id: uuid(),
        title: this.state.upTitle,
        channel: "ThatNewVid",
        image: Thumb,
        description: this.state.upDescription,
        views: 1986,
        likes: 1001,
        duration: '2:23',
        video: "",
        timestamp: Date.now(),
        comments: [
        {
          name: "Micheal Lyons",
          comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
          id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
          likes: 0,
          timestamp: 1545162149000
        },
        {
          name: "Gary Wong",
          comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
          likes: 0,
          timestamp: 1544595784046
        },
        {
          name: "Theodore Duncan",
          comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
          likes: 0,
          timestamp: 1542262984046
        },
      ],
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
