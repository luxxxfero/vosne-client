export function getLetter(word: string): string {
  return word.split("").pop() === "ы"
  || word.split("").pop() === "и"
  || word === "Месячные"
  || word === "Яйца"
    ? "я"
    : "и";
}