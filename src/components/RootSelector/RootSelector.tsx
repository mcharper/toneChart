import { FormControl, InputLabel, Select } from "@material-ui/core";

import { RootSelectorProps } from "./RootSelectorProps";

export const RootSelector = ({ onChange }: RootSelectorProps): JSX.Element => {
  return (
    <FormControl>
      <InputLabel htmlFor="octaves">Root</InputLabel>
      <Select
        defaultValue="1"
        id="root"
        onChange={(ev: any) => onChange(ev.target.value)}
      >
        <option aria-label="None" value="" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((root) => {
          return <option value={root}>{root}</option>;
        })}
      </Select>
    </FormControl>
  );
};
