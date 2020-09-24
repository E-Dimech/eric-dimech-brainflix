import React from 'react';

import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import CommentForm from './components/CommentForm/CommentForm';
import CommentBuild from './components/CommentBuild/CommentBuild';
import AsideVideoBuilder from './components/AsideVideoBuilder/AsideVideoBuilder';

import './App.scss';

import axios from 'axios';

const apiKey = "e2952aad-afec-47da-b32c-0b7d5ecfc63";

class Home extends React.Component {
    state = {
        sideVideos: [],
        videoPlayer: [],
        comment: [],
        allVideos: []
    };

    componentDidMount() {
      axios
        .get (`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
            .then(response => {
            const allVideos = response.data;
                console.log(allVideos)
            axios
                .get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=${apiKey}`)

                .then(response => {
                    let sideVideos = allVideos.filter(video => video.id !== "1af0jruup5gu");
                    console.log(sideVideos)
                    
                
                const videoPlayer = response.data;
                console.log(videoPlayer)
                const comment = response.data.comments;
                // console.log(comment);
                this.setState({ sideVideos, videoPlayer: [videoPlayer], comment, allVideos});
                });
         });
    }

    render () {
    return (
        <>
            <Video videoPlayer={this.state.videoPlayer} />
            <div className="container-col">
                <section className="main-col">
                    <VideoInfo videoPlayerInfo={this.state.videoPlayer} />
                    <CommentForm />
                    <CommentBuild comment={this.state.comment} />
                </section>
                <aside className="sub-col">
                    <AsideVideoBuilder sideVideos={this.state.sideVideos} />
                </aside>
            </div>
        </>    
        
    );
    }
}

export default Home;