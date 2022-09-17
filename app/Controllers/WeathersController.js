import { appState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawWeather() {
 let newWeather = appState.weather

  // let weather = appState.weather.main
  console.log(newWeather.description);
  // template += appState.weather.WeatherTemplate
  // setHTML('weather', template)


}

export class WeathersController {
  constructor() {
    this.getWeather();
  
  
  }
  async getWeather() {
    try {
      await weathersService.getWeather()
      _drawWeather;
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }
}
