import React, { useEffect, useState } from "react";
import Color from "color";

import { ScaleSelector } from "./components/ScaleSelector/ScaleSelector";
import { SwatchPalette } from "./components/SwatchPalette/SwatchPalette";
import { Scale } from "./models/Scale";
import { Swatch } from "./models/Swatch";
import "./App.css";
import { OctaveSelector } from "./components/OctaveSelector/OctaveSelector";
import { Grid } from "@material-ui/core";
import { PianoKeyboard } from "./components/PianoKeyboard/PianoKeyboard";
import { GridListSelector } from "./components/GridListSelector/GridListSelector";

function App() {
  const initialPalette: Array<Swatch> = [
    {
      label: "A",
      colour: "hsl(0, 75%, 75%)",
    },
    {
      label: "1",
      colour: "hsl(120, 75%, 75%)",
    },
    {
      label: "1",
      colour: "hsl(240, 75%, 75%)",
    },
  ];

  const [octave, setOctave] = useState(4);
  const [root, setRoot] = useState(0);
  const [scale, setScale] = useState({
    name: "ionian",
    pattern: [0, 2, 4, 5, 7, 9, 11],
  });
  const [palette, setPalette] = useState(initialPalette);
  const [savedPalettes, setSavedPalettes] = useState([initialPalette]);

  useEffect(() => {
    const offsetAngle = root * 30;
    const lightness = octave * 10;
    const swatchColours = scale.pattern.map((scaleIndex) => {
      const hue = (offsetAngle + scaleIndex * 30) % 360;
      const colour = Color.hsl(hue, 75, lightness);
      const hex = colour.hex();
      return {
        label: hex,
        colour: colour.string(),
      };
    });
    setPalette(swatchColours);
  }, [octave, root, scale]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tone Chart</h1>
        <p>Experiments in Sound and Colour</p>
      </header>

      <Grid
        container
        direction="row"
        spacing={4}
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <SwatchPalette palette={palette} />
        </Grid>
        <Grid item xs={6}>
          <ScaleSelector onChange={(scale: Scale) => setScale(scale)} />
          {/* <GridListSelector onChange={(ev) => {}} /> */}
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <OctaveSelector
                onChange={(octave: number) => setOctave(octave)}
              />
            </Grid>
            <Grid item xs={4}>
              <label>Root Note</label>
              <PianoKeyboard
                onChange={(midiNote) => {
                  setRoot(midiNote % 12);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {savedPalettes.map((savedPalette) => {
            <SwatchPalette palette={savedPalette} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
