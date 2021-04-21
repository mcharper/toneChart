import { Story } from "@storybook/react";

import { SwatchPalette } from "./SwatchPalette";
import { SwatchPaletteProps } from "./SwatchPaletteProps";

export default {
  component: SwatchPalette,
  title: "SwatchPalette",
};

const Template: Story<SwatchPaletteProps> = (args) => (
  <SwatchPalette {...args} />
);

export const Default = Template.bind({});
Default.args = {
  palette: [
    {
      label: "A",
      colour: "hsl(0, 75%, 75%)",
    },
    {
      label: "B",
      colour: "hsl(120, 75%, 75%)",
    },
    {
      label: "C",
      colour: "hsl(240, 75%, 75%)",
    },
  ],
};
