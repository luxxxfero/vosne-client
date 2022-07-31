import axios from "axios";
import {INTERPRETATIONS} from "../../types";

class VosneService {

  async getInterpretationTitles(): Promise<string[]> {
    const url = encodeURI(process.env.API_URL + "/interpretation/title")
    const { data } = await axios.get<string[]>(url);
    return data;
  }

  async getTopInterpretationTitles(): Promise<string[]> {
    const url = encodeURI(process.env.API_URL + "/interpretation/title?isPopular=true")
    const { data } = await axios.get<string[]>(url);
    return data;
  }

  async getInterpretationTitlesByLetter(letter: string): Promise<string[]> {
    const url = encodeURI(process.env.API_URL + "/interpretation/title" + "?letter=" + letter)
    const { data } = await axios.get<string[]>(url);
    return data;
  }

  async getInterpretationsByWord(word: string): Promise<INTERPRETATIONS> {
    const url = encodeURI(process.env.API_URL + "/interpretation/" + "?title=" + word)
    const { data } = await axios.get<INTERPRETATIONS>(url);
    return data;
  }


}

export default new VosneService()