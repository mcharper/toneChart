import { Story } from '@storybook/react';
import { Swatch, SwatchProps } from './Swatch/Swatch';

export default {
  component: Swatch,
  title: 'Swatch',
};

const Template: Story<SwatchProps> = (args) => <Swatch {...args} />;

export const Default = Template.bind({});
Default.args = {
  palette: [
    "#ff0000",
    "#00ff00",
    "#0000ff",
  ]
};
