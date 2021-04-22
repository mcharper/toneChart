import { MidiPlayerProps } from "./MidiPlayerProps";
import Soundfont from "soundfont-player";

export const MidiPlayer = ({ midiSequence }: MidiPlayerProps): JSX.Element => {
  const notesToPlay = midiSequence.map((n, index) => {
    return {
      time: index * 2,
      note: n,
    };
  });

  const ac = new AudioContext();
  Soundfont.instrument(ac, "harpsichord").then(function (instrument: any) {
    instrument.schedule(ac.currentTime, [...notesToPlay, notesToPlay[0]]);
  });

  return <></>;
};
