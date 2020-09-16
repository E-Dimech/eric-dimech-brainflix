import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './components/Header/Header.scss'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
    </div>
  );
}

export default App;
