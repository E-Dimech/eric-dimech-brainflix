import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CommentForm from './components/CommentForm/CommentForm';
import Comments from './components/Comments/Comments';
import AsideVideo from './components/AsideVideo/AsideVideo';
import './components/Header/Header.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <CommentForm />
      <Comments />
      <h2>nEXTKJSDHG</h2>
      <AsideVideo />
    </div>
  );
}

export default App;
