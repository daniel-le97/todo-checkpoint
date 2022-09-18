import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";

function _drawQuote() {
  let newQuote = appState.quote;
  setText("quote", newQuote.content)
  setText('author', newQuote.author)
}

export class QuotesController {
  constructor() {
    this.getQuote();
    appState.on("quote", _drawQuote);
  }
  async getQuote() {
    try {
      await quotesService.getQuote();
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }
}
