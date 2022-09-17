import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { BcwServer } from "./AxiosService.js";

class QuotesService {
  async getQuote() {
    const res = await BcwServer.get("/quotes");
    // console.log(res.data);
    appState.quote = new Quote(res.data);
  }
  //
}
export const quotesService = new QuotesService();
