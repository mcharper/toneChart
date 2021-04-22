import { Story } from "@storybook/react";

import { MidiPlayer } from "./MidiPlayer";
import { MidiPlayerProps } from "./MidiPlayerProps";

export default {
  component: MidiPlayer,
  title: "MidiPlayer",
};

const Template: Story<MidiPlayerProps> = (args) => <MidiPlayer {...args} />;

export const Default = Template.bind({});
Default.args = {
  midiSequence: [61, 62, 63, 64, 65, 66],
};
