import { Story } from "@storybook/react";

import { PianoKeyboard } from "./PianoKeyboard";
import { PianoKeyboardProps } from "./PianoKeyboardProps";

export default {
  component: PianoKeyboard,
  title: "PianoKeyboard",
};

const Template: Story<PianoKeyboardProps> = (args) => (
  <PianoKeyboard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: (midiNote: number) => {
    console.log("MIDI Note is: " + midiNote);
  },
};
