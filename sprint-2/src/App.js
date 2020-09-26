import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './Home';
import Upload from './components/Upload/Upload';

// Imported sass file 
import './App.scss';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/video/:id' render={props => {
              return <Home {...props} />;
            }}
          />
          <Route path="/upload" component={Upload} />
        </Switch>
      </Router>
    );
  }
}

export default App;


// // All data required to populate videos, images and comments
// class App extends React.Component {
//   state = {


  //     videoPlayer: [
  //       {
  //         id: 1,
  //         title: "BMX Rampage: 2018 Highlights",
  //         description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
  //         channel: "Red Cow",
  //         image: ImageOne,
  //         views: "1,001,023",
  //         likes: "110,985",
  //         duration: "",
  //         video: "",
  //         timestamp: "12/18/2018",
  //         comments: "comment"
  //       }
  //     ]
  // };