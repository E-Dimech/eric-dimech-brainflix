import React from 'react';

import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import CommentForm from './components/CommentForm/CommentForm';
import CommentBuild from './components/CommentBuild/CommentBuild';
import AsideVideoBuilder from './components/AsideVideoBuilder/AsideVideoBuilder';

import './Home.scss';


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
                        axios
                            .get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=${apiKey}`)

                                .then(response => {
                                    let sideVideos = allVideos.filter(video => video.id !== "1af0jruup5gu");
                                    const videoPlayer = response.data;
                                    const comment = response.data.comments;
                                    this.setState({ sideVideos, videoPlayer: [videoPlayer], comment, allVideos});
                                });
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match !== this.props.match) {
            axios
                .get (`https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=${apiKey}`)

                    .then(response => {
                        const videoPlayer = response.data;
                        const comment = response.data.comments;
                        let sideVideos = this.state.allVideos.filter(video => video.id !== this.props.match.params.id);
                        this.setState({ sideVideos, videoPlayer: [videoPlayer], comment});
                    });
        }
    }

    render () {
    return (
        <>
            <Video videoPlayer={this.state.videoPlayer} />
            <div className="desktop-style">
                <section className="desktop-style__left">
                    <VideoInfo videoPlayerInfo={this.state.videoPlayer} />
                    <CommentForm />
                    <CommentBuild comment={this.state.comment} />
                </section>
                <aside className="desktop-style__right">
                    <AsideVideoBuilder sideVideos={this.state.sideVideos} />
                </aside>
            </div>
        </>    
        
      );
    }
}

export default Home;