import { appState } from "../AppState.js";

export class Weather {
  constructor(data) {
    this.main = data.main;
    this.icon = data.weather[0].icon;
    this.description = data.weather[0].description;
  }

  get WeatherTemplate() {
    return /*html*/ `
      <div
        class="card mx-3 my-md-4 my-3 glass">
        <div class="card-body d-flex justify-content-between gap-3 ">
          <div class="d-flex align-items-center">
            <span id="temperature" onclick="app.weathersController.changeTemp()" class="ms-3 font-small selectable rounded elevation-1 p-1 bg-opacity-10 text-shadow">${this.ConvertTemp}</span>
          </div>
            <div>
            <img src="https://openweathermap.org/img/wn/${this.icon}.png" alt="">
            </div>
            <div class="d-flex align-items-center">
            <span class="me-3 font-small text-center text-shadow">${this.description}</span>
            </div>
          </div>
        </div>
    `;
  }
  get ConvertTemp() {
    let temp = this.main.temp;
    let kelvin = Math.round(temp);
    let fahrenheit = Math.round((9 / 5) * (temp - 273) + 32);
    let celsius = Math.round(temp - 273.15);

    if (appState.toggleTemp == 4) {
      appState.toggleTemp = 1;
    }

    if (appState.toggleTemp == 1) {
      // @ts-ignore
      appState.temperature = fahrenheit + "˚F";
    } else if (appState.toggleTemp == 2) {
      // @ts-ignore
      appState.temperature = celsius + "˚C";
    } else if (appState.toggleTemp == 3) {
      // @ts-ignore
      appState.temperature = kelvin + "˚K"
    }
    return appState.temperature;
  }
  }
  