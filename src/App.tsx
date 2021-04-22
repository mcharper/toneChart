import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Color from "color";

import { SwatchPalette } from "./components/SwatchPalette/SwatchPalette";
import { Swatch } from "./models/Swatch";
import { ScaleSelector } from "./components/ScaleSelector/ScaleSelector";
import { OctaveSelector } from "./components/OctaveSelector/OctaveSelector";
import { PianoKeyboard } from "./components/PianoKeyboard/PianoKeyboard";
import "./App.css";
import { MidiPlayer } from "./components/MidiPlayer/MidiPlayer";

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
    name: "Chromatic",
    pattern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
        <h2>Experiments in Sound and Colour</h2>
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
          <ScaleSelector
            onChange={(scale) => {
              setScale(scale);
            }}
          />
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
              {/* <MidiPlayer
                midiSequence={scale.pattern.map((n) => {
                  return n + 60;
                })}
              ></MidiPlayer> */}
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
