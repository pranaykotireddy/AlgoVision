import { TOPICS_1 } from "./topics1";
import { TOPICS_2 } from "./topics2";
import { TOPICS_5 } from "./topics5";
import { TOPICS_6 } from "./topics6";

export const TOPICS = [
  ...TOPICS_1, // Topics 1-3
  ...TOPICS_2, // Topics 4-5
  ...TOPICS_5, // Topics 11-18
  ...TOPICS_6, // Topics 19-25
];

export const CATEGORIES = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];
export const DIFFICULTIES = ["All", "Easy", "Medium", "Hard"];