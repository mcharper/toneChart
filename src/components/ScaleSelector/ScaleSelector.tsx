import React from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { ScaleSelectorProps } from "./ScaleSelectorProps";
import { ScaleData } from "../../models/ScaleData";

export const ScaleSelector = ({
  onChange,
}: ScaleSelectorProps): JSX.Element => {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="scale">Scale</InputLabel>
        <Select
          defaultValue="Ionian"
          id="scale"
          onChange={(ev) =>
            onChange(ScaleData.filter((s) => s.name == ev.target.value)[0])
          }
        >
          {ScaleData.map((scale) => {
            return <option value={scale.name}>{scale.name}</option>;
          })}
        </Select>
      </FormControl>
    </>
  );
};
