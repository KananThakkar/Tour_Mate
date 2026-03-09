import tajAudio from "./taj.mp3";
import qutubAudio from "./qutub.mp3";
import redfortAudio from "./redfort.mp3";
import hampiAudio from "./hampi.mp3";
import ajantaAudio from "./ajanta.mp3";
import elloraAudio from "./ellora.mp3";
import konarkAudio from "./konark.mp3";
import khajurahoAudio from "./khajuraho.mp3";
import sanchiAudio from "./sanchi.mp3";
import fatehpurAudio from "./fatehpur.mp3";

import tajImg from "../monuments/taj.png";
import qutubImg from "../monuments/qutub_minar.png";
import redfortImg from "../monuments/redfort.png";
import hampiImg from "../monuments/hampi.png";
import ajantaImg from "../monuments/ajanta.png";
import elloraImg from "../monuments/ellora.png";
import konarkImg from "../monuments/konark.png";
import khajurahoImg from "../monuments/khajuraho.png";
import sanchiImg from "../monuments/sanchi.png";
import fatehpurImg from "../monuments/fatehpur.png";
export const monuments = {
  1: {
    name: "Taj Mahal",
    description:
      "The Taj Mahal in Agra was built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is one of the Seven Wonders of the World and is famous for its white marble architecture.",
    images: [tajImg],
    audio: tajAudio
  },

  9: {
    name: "Sanchi Stupa",
    description:
      "The Great Stupa at Sanchi is one of the oldest stone structures in India. It was commissioned by Emperor Ashoka in the 3rd century BCE and is an important Buddhist monument.",
    images: [
      sanchiImg
    ],
    audio: sanchiAudio
  },

  10: {
    name: "Fatehpur Sikri",
    description:
      "Fatehpur Sikri was the capital of the Mughal Empire during Emperor Akbar's reign. The city is known for its Mughal architecture and historical importance.",
    images: [
      fatehpurImg
    ],
    audio: fatehpurAudio
  },

  2: {
    name: "Qutub Minar",
    description:
      "Qutub Minar in Delhi is the tallest brick minaret in the world. It was built in the 12th century by Qutb-ud-din Aibak and later completed by his successors.",
    images: [
      qutubImg
    ],
    audio: qutubAudio
  },

  4: {
    name: "Hampi",
    description:
      "Hampi was the capital of the Vijayanagara Empire and is known for its ancient temples, stone chariots, and ruins spread across a vast landscape.",
    images: [
      hampiImg
    ],
    audio: hampiAudio
  },

  8: {
    name: "Khajuraho Temples",
    description:
      "The Khajuraho temples are famous for their intricate sculptures and Nagara-style architecture built by the Chandela dynasty.",
    images: [
      khajurahoImg 
    ],
    audio: khajurahoAudio
  },

  7: {
    name: "Konark Sun Temple",
    description:
      "The Konark Sun Temple in Odisha is designed as a giant chariot dedicated to the Sun God. It was built in the 13th century.",
    images: [
     konarkImg
    ],
    audio:  konarkAudio
  },

  3: {
    name: "Red Fort",
    description:
      "The Red Fort in Delhi served as the main residence of the Mughal emperors for nearly 200 years and is a symbol of India's history.",
    images: [
     redfortImg
    ],
    audio: redfortAudio
  },

  5: {
    name: "Ajanta Caves",
    description:
      "The Ajanta Caves are rock-cut Buddhist cave monuments famous for their paintings and sculptures dating back to the 2nd century BCE.",
    images: [
       ajantaImg 
    ],
    audio: ajantaAudio
  },

  6: {
    name: "Ellora Caves",
    description:
      "Ellora is famous for its rock-cut temples representing Buddhist, Hindu, and Jain monuments built between the 6th and 10th centuries.",
    images: [
      elloraImg 
    ],
    audio: elloraAudio
  }
};