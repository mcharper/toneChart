import { Scale } from "./Scale";

export const scales: Array<Scale> = [
  {
    id: 0,
    name: "Major",
    description: "Happy, majestic",
    image: "major.jpg",
    pattern: [0, 2, 4, 5, 7, 9, 11],
  },
  {
    id: 0,
    name: "Natural Minor",
    description: "Sentimental, tragic",
    image: "natural minor.jpg",
    pattern: [0, 2, 3, 5, 7, 8, 10],
  },
  {
    id: 1,
    name: "Dorian",
    description: "A little melancholy but hopeful",
    image: "dorian.jpg",
    pattern: [0, 2, 3, 5, 7, 9, 10],
  },
  {
    id: 2,
    name: "Pentatonic Minor",
    description: "Jazz, folk, rock solos",
    image: "Pentatonic minor.jpg",
    pattern: [0, 3, 5, 7, 10],
  },
  {
    id: 3,
    name: "Pentatonic Major",
    description: "Cheerful Eastern sound",
    image: "Pentatonic major.jpg",
    pattern: [0, 2, 4, 7, 9],
  },
  {
    id: 4,
    name: "Phrygian",
    description: "Tense, dark, Spanish sound",
    image: "phrygian.jpg",
    pattern: [0, 1, 3, 5, 7, 8, 10],
  },
];
