import { FormControl, InputLabel, Select } from "@material-ui/core";

import { OctaveSelectorProps } from "./OctaveSelectorProps";

export const OctaveSelector = ({
  onChange,
}: OctaveSelectorProps): JSX.Element => {
  return (
    <FormControl>
      <InputLabel htmlFor="octave">Octave</InputLabel>
      <Select
        defaultValue="4"
        id="octave"
        onChange={(ev: any) => onChange(ev.target.value)}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((octave) => {
          return <option value={octave}>{octave}</option>;
        })}
      </Select>
    </FormControl>
  );
};
