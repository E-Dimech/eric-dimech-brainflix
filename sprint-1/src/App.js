import React from 'react';

import ImageOne from '../src/assets/Images/video-list-0.jpg';
import ImageTwo from '../src/assets/Images/video-list-1.jpg';
import ImageThree from '../src/assets/Images/video-list-2.jpg';
import ImageFour from '../src/assets/Images/video-list-3.jpg';
import ImageFive from '../src/assets/Images/video-list-4.jpg';
import ImageSix from '../src/assets/Images/video-list-5.jpg';
import ImageSeven from '../src/assets/Images/video-list-6.jpg';
import ImageEight from '../src/assets/Images/video-list-7.jpg';
import ImageNine from '../src/assets/Images/video-list-8.jpg';

import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import CommentForm from './components/CommentForm/CommentForm';
import CommentBuild from './components/CommentBuild/CommentBuild';
import AsideVideoBuilder from './components/AsideVideoBuilder/AsideVideoBuilder';

import './App.scss';




class App extends React.Component {
  state = {

    comment:  [
        {
            id: 0,
            name: "Michael Lyons",
            date: "01/14/2020",
            comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
        },
        {
            id: 1,
            name: "Gary Wong",
            date: "01/01/2020",
            comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"
        },
        {
            id: 2,
            name: "Theodore Duncan",
            date: "12/13/2019",
            comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He's definitely my favourite ever!" 
        },
      ],


      sideVideo: [
          {
              id: 1,
              title: "BMX Rampage: 2018 Highlights",
              channel: "Red Cow",
              image: ImageOne 
          },
          {
              id: 2,
              title: "Become A Travel Pro In One Easy Lesson...",
              channel: "Scotty Cranmer",
              image: ImageTwo
          },
          {
              id: 3,
              title: "Les Houches The Hidden Gem Of The...",
              channel: "Scotty Cranmer",
              image: ImageThree
          },
          {
              id: 4,
              title: "Travel Health Useful Medical Information",
              channel: "Scotty Cranmer",
              image: ImageFour
          },
          {
              id: 5,
              title: "Cheap Airline Tickets Great Ways to Save",
              channel: "Emily Harper",
              image: ImageFive
          },
          {
              id: 6,
              title: "Take A Romantic Break In A Boutique Hotel",
              channel: "Ethan Owen",
              image: ImageSix
          },
          {
              id: 7,
              title: "Choose The Perfect Accommodations",
              channel: "Lydia Perez",
              image: ImageSeven
          },
          {
              id: 8,
              title: "Cruising Destination Ideas",
              channel: "Timothy Austin",
              image: ImageEight,
          },
          {
              id: 9,
              title: "Train Travel On Track For Safety",
              channel: "Scotty Cranmer",
              image: ImageNine
          }
      ],

      videoPlayer: [
        {
          id: 1,
          title: "BMX Rampage: 2018 Highlights",
          description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
          channel: "Red Cow",
          image: ImageOne,
          views: "1,001,023",
          likes: "110,985",
          duration: "",
          video: "",
          timestamp: "12/18/2018",
          comments: "comment"
        }
      ]
  };
  render() {
    return (
    <div className="App">
      <Header />
        <Video />
      <div className="test-test">
        <section className="main-col">
            <VideoInfo videoPlayerInfo={this.state.videoPlayer} />
            <CommentForm />
            <CommentBuild comment={this.state.comment} />
        </section>
        <aside className="sub-col">
            <AsideVideoBuilder sideVideos={this.state.sideVideo} />
        </aside>
      </div>
    </div>
   );
  }
};

export default App;
