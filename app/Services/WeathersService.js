import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { setHTML } from "../Utils/Writer.js";
import { BcwServer } from "./AxiosService.js";

class WeathersService {
  
  async getWeather() {
    const res = await BcwServer.get("/weather");
    appState.weather = new Weather(res.data);
    // console.log(appState.weather);
  }
}
export const weathersService = new WeathersService();
