import { Story } from "@storybook/react";

import { Scale } from "../../models/Scale";
import { ScaleSelector } from "./ScaleSelector";
import { ScaleSelectorProps } from "./ScaleSelectorProps";

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
    alert(scale.name);
  },
};
