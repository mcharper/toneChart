import { FormControl, InputLabel, Select, Slider } from "@material-ui/core";
import React from "react";

import { OctaveSelectorProps } from "./OctaveSelectorProps";
import { useStyles } from "./OctaveSelectorStyles";

export const OctaveSelector = ({
  onChange,
}: OctaveSelectorProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputLabel htmlFor="octave">Octave</InputLabel>
      <Slider
        name="octave"
        id="octave"
        defaultValue={4}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        onChangeCommitted={(ev, value: any) => {
          onChange(value);
        }}
        step={1}
        marks
        min={1}
        max={8}
      />
    </div>
  );
};
