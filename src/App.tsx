import './App.css';
import Body from './views/Body';
import { useState } from 'react';

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url('/images/darkbackground.png')` }}
    >
      <Body />
    </div>
  );
}

export default App;
