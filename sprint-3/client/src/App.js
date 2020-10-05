import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Upload from './components/Upload/Upload';


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