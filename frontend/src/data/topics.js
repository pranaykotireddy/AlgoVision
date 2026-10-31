import { TOPICS_1 } from "./topics1";
import { TOPICS_2 } from "./topics2";
import { TOPICS_3 } from "./topics3";
import { TOPICS_4 } from "./topics4";
import { TOPICS_5 } from "./topics5";
import { TOPICS_6 } from "./topics6";
import { TOPICS_7 } from "./topics7";

export const TOPICS = [
  ...TOPICS_1, // Topics 1-8 (Beginner)
  ...TOPICS_2, // Topics 9-18 (Beginner/Intermediate)
  ...TOPICS_3, // Topics 19-25 (Intermediate/Advanced)
  ...TOPICS_4, // Topics 26-36 (Advanced)
  ...TOPICS_5, // Topics 37-45 (Expert)
  ...TOPICS_6, // Any extra topics
  ...TOPICS_7, // Any extra topics
];

export const CATEGORIES = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];
export const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];