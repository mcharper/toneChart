import { Story } from "@storybook/react";

import { RootSelector } from "./RootSelector";
import { RootSelectorProps } from "./RootSelectorProps";

export default {
  component: RootSelector,
  title: "RootSelector",
};

const Template: Story<RootSelectorProps> = (args) => <RootSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (root: number | null) => {
    console.log("Root Note is: " + root);
  },
};
