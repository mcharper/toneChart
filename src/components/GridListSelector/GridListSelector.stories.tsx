import { Story } from "@storybook/react";

import { GridListSelector } from "./GridListSelector";
import { GridListSelectorProps } from "./GridListSelectorProps";

export default {
  component: GridListSelector,
  title: "GridListSelector",
};

const Template: Story<GridListSelectorProps> = (args) => (
  <GridListSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: (item: number | null) => {
    console.log("Number is: " + item);
  },
};
