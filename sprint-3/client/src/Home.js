import React from 'react';

import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import CommentForm from './components/CommentForm/CommentForm';
import CommentBuild from './components/CommentBuild/CommentBuild';
import AsideVideoBuilder from './components/AsideVideoBuilder/AsideVideoBuilder';

import './Home.scss';

import axios from 'axios';

class Home extends React.Component {
    state = {
        sideVideos: [],
        videoPlayer: [],
        comment: [],
    };

    componentDidMount() {
      axios
        .get ('/videos')
            .then(response => {
                this.setState({videoPlayer: response.data[0]})
                this.setState({sideVideos: response.data})
                this.setState({comment: response.data[0].comments})          
            });
    }

    componentDidUpdate(prevProps) {
         
        if (this.props.match.params.id !== prevProps.match.params.id) {
            
            axios
                .get ('/videos/' + this.props.match.params.id)

                    .then((response) => {
                        this.setState({videoPlayer: response.data.find((video) => video['id'] === this.props.match.params.id),
                        });
                     })    
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