import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './components/Header/Header.scss'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CommentForm from './components/CommentForm/CommentForm';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <CommentForm />
      <Comments />
    </div>
  );
}

export default App;
