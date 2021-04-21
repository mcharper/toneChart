import { Story } from "@storybook/react";

import { OctaveSelector } from "./OctaveSelector";
import { OctaveSelectorProps } from "./OctaveSelectorProps";

export default {
  component: OctaveSelector,
  title: "OctaveSelector",
};

const Template: Story<OctaveSelectorProps> = (args) => (
  <OctaveSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: (octave: number | null) => {
    alert(octave);
  },
};
