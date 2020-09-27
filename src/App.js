import React from 'react';
import Games from './components/Games.js';
import logo from './halo.png';
import './App.css';

function App() {
  let audio = new Audio("/halo.mp3");

  const start = () => {
    console.log("playing")
    audio.play()
  }

    return (
    <div className="App">
      <header className="App-header">
        <a onClick={start}>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <div className="games">
          <Games />
        </div>

      </header>
    </div>
  );
}

export default App;
