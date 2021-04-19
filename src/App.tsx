import Color from 'color';
import color from 'color';
import { useState } from 'react';
import './App.css';
import { ScaleSelector } from './components/ScaleSelector/ScaleSelector';
import { Swatch } from './components/Swatch/Swatch';
import { Scale } from './models/Scale';

function App() {
  const initialPalette: Array<string> = ["hsl(120, 75%, 75%)", "hsl(240, 75%, 75%)", "hsl(360, 75%, 75%)"];

  const [palette, setPalette] = useState(initialPalette);

  const calcHueAngles = (pattern: Array<number>): Array<number> => {
    let angles: Array<number> = []
    let totalAngle = 0
    for(let i=0; i<pattern.length; i++) {
      angles[i] = pattern[i] * 30
    }
    return angles
  }

  const onScaleChange = (scale: Scale) => {
    const hueAngles = calcHueAngles(scale.pattern)
    console.log(hueAngles)

    let totalAngle = 0
    const swatchColours = hueAngles.map(angle => {
      totalAngle += angle
      console.log(totalAngle)
      return Color.hsl(totalAngle, 75, 75).string()
    })
    console.log(swatchColours)
    setPalette(swatchColours)
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tone Chart</h1>
        <h2>Experiments in Sound and Colour</h2>
      </header>

      <ScaleSelector onChange={onScaleChange} />

      <Swatch palette={palette} />
    </div>
  );
}

export default App;
