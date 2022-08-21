import {keys} from "../constants";
import {getLetter} from "./get-letter";

export const getKeys = (word: string, length: number): string[] => {
  const arr = [];
  const letter = getLetter(word);
  for (let i = 0; i < length; i++) {
    if (keys[i % 5] === "Толкование сна") {
      arr.push(`Толкование сна ${word}`)
    } else if (keys[i % 5] === "Значение сна") {
      arr.push(`Значение сна ${word}`)
    } else if (keys[i % 5] === "во сне") {
      arr.push(`${word} во сне`)
    } else if (keys[i % 5] === "Снится") {
      if (letter === "я") {
        arr.push(`Снятся ${word}`)
      } else {
        arr.push(`Снится ${word}`)
      }
    } else if (keys[i % 5] === "К чему снится") {
      if (letter === "я") {
        arr.push(`К чему снятся ${word}`)
      } else {
        arr.push(`К чему снится ${word}`)
      }
    }
  }
  return arr;
}