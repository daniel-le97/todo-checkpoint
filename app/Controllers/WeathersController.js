import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawWeather() {
  let newWeather = appState.weather;
  setHTML("weather", newWeather.WeatherTemplate);
}



export class WeathersController {
  constructor() {
    this.getWeather();
  
  }
  async getWeather() {
    try {
      await weathersService.getWeather();
      _drawWeather();
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }
  async changeTemp() {
    try {
      appState.toggleTemp++
      await this.getWeather();
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }
}
