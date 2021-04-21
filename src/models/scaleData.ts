import { Scale } from "./Scale";

export const ScaleData: Array<Scale> = [
  {
    name: "pentatonic major",
    pattern: [0, 2, 4, 7, 9],
  },
  {
    name: "pentatonic minor",
    pattern: [0, 3, 5, 7, 10],
  },
  {
    name: "ionian",
    pattern: [0, 2, 4, 5, 7, 9, 11],
  },
  {
    name: "dorian",
    pattern: [0, 2, 3, 5, 7, 9, 10],
  },
  {
    name: "phrygian",
    pattern: [0, 1, 3, 5, 7, 8, 10],
  },
  {
    name: "aolean",
    pattern: [0, 2, 3, 5, 7, 8, 10],
  },
];
