import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Color from "color";
import Abcjs from "react-abcjs";

import { SwatchPalette } from "./components/SwatchPalette/SwatchPalette";
import { Swatch } from "./models/Swatch";
import { ScaleSelector } from "./components/ScaleSelector/ScaleSelector";
import { OctaveSelector } from "./components/OctaveSelector/OctaveSelector";
import { PianoKeyboard } from "./components/PianoKeyboard/PianoKeyboard";
import "./App.css";
import { ColourModelControlPanel } from "./components/ColourModelControlPanel/ColourModelControlPanel";

function App() {
  const initialPalette: Array<Swatch> = [
    {
      label: "A",
      colour: "hsl(0, 75%, 75%)",
      name: "Red",
      isDark: false,
    },
    {
      label: "1",
      colour: "hsl(120, 75%, 75%)",
      name: "Green",
      isDark: false,
    },
    {
      label: "1",
      colour: "hsl(240, 75%, 75%)",
      name: "Blue",
      isDark: false,
    },
  ];

  const [modelParameters, setModelParameters] = useState({
    startingAngle: 0,
    lightenAcrossScale: true,
    desaturateAcrossScale: true,
  });
  const [octave, setOctave] = useState(4);
  const [root, setRoot] = useState(0);
  const [scale, setScale] = useState({
    name: "Chromatic",
    pattern: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  });
  const [palette, setPalette] = useState(initialPalette);
  const [savedPalettes, setSavedPalettes] = useState([initialPalette]);

  useEffect(() => {
    const offsetAngle = modelParameters.startingAngle + root * 30;
    const lightness = octave * 10;
    const swatchColours = scale.pattern.map((scaleIndex) => {
      const hue = (offsetAngle + scaleIndex * 30) % 360;
      const colour = Color.hsl(
        hue,
        modelParameters.desaturateAcrossScale ? 75 - scaleIndex * 3 : 75,
        modelParameters.lightenAcrossScale ? lightness + scaleIndex : lightness
      );
      const hex = colour.hex();
      return {
        label: hex,
        colour: colour.string(),
        name: colour.keyword(),
        isDark: colour.isDark(),
      };
    });
    setPalette(swatchColours);
  }, [octave, root, scale, modelParameters]);

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
        alignItems="center"
      >
        <Grid item xs={6}>
          <SwatchPalette palette={palette} />
        </Grid>
        <Grid item xs={6}>
          <ColourModelControlPanel
            setLightenAsPitchIncreases={(val) =>
              setModelParameters({
                ...modelParameters,
                lightenAcrossScale: val,
              })
            }
            setDesaturateAsPitchIncreases={(val) =>
              setModelParameters({
                ...modelParameters,
                lightenAcrossScale: val,
              })
            }
            setStartingAngle={(val) =>
              setModelParameters({ ...modelParameters, startingAngle: val })
            }
          />
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

      <Abcjs
        abcNotation={"X:1\nM:4/4\nM:4/4\nK:C\n|:CDEFGAB"}
        parserParams={{}}
        engraverParams={{ responsive: "resize" }}
        renderParams={{ viewportHorizontal: true }}
      />
    </div>
  );
}

export default App;
