import React from 'react';
import AsideVideoBuilder from '../AsideVideoBuilder/AsideVideoBuilder';
import ImageOne from '../../assets/Images/video-list-0.jpg';
import ImageTwo from '../../assets/Images/video-list-1.jpg';
import ImageThree from '../../assets/Images/video-list-2.jpg';
import ImageFour from '../../assets/Images/video-list-3.jpg';
import ImageFive from '../../assets/Images/video-list-4.jpg';
import ImageSix from '../../assets/Images/video-list-5.jpg';
import ImageSeven from '../../assets/Images/video-list-6.jpg';
import ImageEight from '../../assets/Images/video-list-7.jpg';
import ImageNine from '../../assets/Images/video-list-8.jpg';

class AsideVideo extends React.Component {
    state = {
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
                image: ImageEight
            },
            {
                id: 9,
                title: "Train Travel On Track For Safety",
                channel: "Scotty Cranmer",
                image: ImageNine
            },
        ]
    };

    render() {
        return (
    <>
        {this.state.sideVideo.map((video) => (
          <AsideVideoBuilder
            key={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
          />
        ))}
    </>
    );

  }
  
    
}

export default AsideVideo;