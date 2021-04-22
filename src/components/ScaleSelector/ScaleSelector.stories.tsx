import { Story } from "@storybook/react";

import { ScaleSelector } from "./ScaleSelector";
import { ScaleSelectorProps } from "./ScaleSelectorProps";
import { Scale } from "../../models/Scale";

export default {
  component: ScaleSelector,
  title: "ScaleSelector",
};

const Template: Story<ScaleSelectorProps> = (args) => (
  <ScaleSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: (scale: Scale) => {
    console.log("Scale is: " + scale);
  },
};
