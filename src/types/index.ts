export enum PATHS {
  "HOME" = "/",
  "INTERPRETATION" = "/толкование",
  "LETTER" = "/буква",
}

export type INTERPRETATION = {
  _id: string,
  title: string,
  header: string,
  dreamBookName: string,
  isPopular: boolean,
  letter: string,
  interpretations: string[],
  alias: string
}
export type INTERPRETATIONS = INTERPRETATION[];
export type TITLE = string;
export type TITLES = TITLES[];
export type SEARCH = string;
export type TOP_DREAM = string;
export type ABC = string[];
export type TOP_DREAMS = TOP_DREAM[];
export type SEARCH_DATA = SEARCH[];