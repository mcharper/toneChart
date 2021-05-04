import { Box, FormControlLabel, FormGroup, Switch } from "@material-ui/core";
import React from "react";
import { Donut } from "react-dial-knob";

import { ColourModelControlPanelProps } from "./ColourModelControlPanelProps";
import { useStyles } from "./ColourModelControlPanelStyles";

export const ColourModelControlPanel = ({
  setLightenAsPitchIncreases,
  setDesaturateAsPitchIncreases,
  setStartingAngle,
}: ColourModelControlPanelProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              onChange={(ev: any) => {
                setLightenAsPitchIncreases(ev.target.checked);
              }}
              size="small"
            />
          }
          label="Lighten as pitch increases"
        />
        <FormControlLabel
          control={
            <Switch
              onChange={(ev: any) => {
                setDesaturateAsPitchIncreases(ev.target.checked);
              }}
              size="small"
            />
          }
          label="Desaturate as pitch increases"
        />
        <Donut
          diameter={60}
          min={0}
          max={360}
          step={1}
          value={180}
          theme={{
            donutColor: "blue",
          }}
          onValueChange={setStartingAngle}
          ariaLabelledBy={"my-label"}
        >
          <label id={"my-label"}>Starting Angle</label>
        </Donut>
      </FormGroup>
    </div>
  );
};
