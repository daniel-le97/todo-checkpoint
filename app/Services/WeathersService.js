import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { setHTML } from "../Utils/Writer.js";
import { BcwServer } from "./AxiosService.js";

class WeathersService {
  async getWeather() {
    const res = await BcwServer.get("/weather");
    console.log(res.data);
    appState.weather = new Weather(res.data)
    setHTML('weather', appState.weather.WeatherTemplate)
    // console.log(appState.weather.weather);
  }
  //
}
export const weathersService = new WeathersService();
