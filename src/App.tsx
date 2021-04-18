import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Swatch } from './components/Swatch/Swatch';

function App() {

  const palette: Array<string> = ["#224400", "#aaff00", "#0000ff", "#00ddee"];

  return (
    <div className="App">
      <header className="App-header">
        <Swatch palette={palette} />
      </header>
    </div>
  );
}

export default App;
