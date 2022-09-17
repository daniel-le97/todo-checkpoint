import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";

export class WeathersController {
  constructor() {
    this.getWeather();
  }
  async getWeather() {
    try {
      await weathersService.getWeather();
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }
}
