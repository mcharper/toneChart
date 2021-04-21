import React from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";

import { PianoKeyboardProps } from "./PianoKeyboardProps";
import { useStyles } from "./PianoKeyboardStyles";

export const PianoKeyboard = ({
  onChange,
}: PianoKeyboardProps): JSX.Element => {
  const classes = useStyles();

  const firstNote = MidiNumbers.fromNote("c4");
  const lastNote = MidiNumbers.fromNote("b4");
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  return (
    <Piano
      className={classes.root}
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={(midiNumber: number) => {
        // Play a given note - see notes below
        onChange(midiNumber);
      }}
      stopNote={(midiNumber: number) => {
        // Stop playing a given note - see notes below
      }}
      width={1000}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
};
