import { Story } from "@storybook/react";

import { ColourModelControlPanel } from "./ColourModelControlPanel";
import { ColourModelControlPanelProps } from "./ColourModelControlPanelProps";

export default {
  component: ColourModelControlPanel,
  title: "ColourModelControlPanel",
};

const Template: Story<ColourModelControlPanelProps> = (args) => (
  <ColourModelControlPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {};
