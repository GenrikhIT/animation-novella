import React from 'react';
import logo from './logo.svg';
import './App.css';
import sowa from './sowa.png';
import minion from './minion.png'
import bubble from './bubble.png'
import Typewriter from 'typewriter-effect';


function App() {
  return (
    <div className="App">
      <div className="First">
          <div className='First_box'>
          <Typewriter
  options={{
    strings: ['Наведи на меня'],
    autoStart: true,
    loop: true,
  }}
/>
            
            <img src={minion} width={160}/>
            <div className='bubble'>Привет!</div>
          </div>
      </div>
      <div className="Second">
        <div className='Second_box'>Наведи на меня
        <img src={sowa} width={160}/>
        <img src={bubble} alt="Your Image" className="zoom-image"></img>
        </div>
      </div>

    </div>
  );
}

export default App;
