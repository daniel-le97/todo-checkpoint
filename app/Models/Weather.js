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
        class="card mx-2 mx-sm-0 my-4"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample">
        <div class="card-body d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center">
            <span id="temperature" onclick="app.weathersController.changeTemp()" class="ms-3">${this.ConvertTemp}</span>
          </div>
            <div>
            <img src="https://openweathermap.org/img/wn/${this.icon}.png" alt="">
            </div>
            <div class="d-flex align-items-center ">
            <span class="me-md-3 me-sm-0 ms-4">${this.description}</span>
            </div>
          </div>
          <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <span>feels like</span>
            <span></span>
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
      appState.temperature = kelvin + "˚K";
    } else if (appState.toggleTemp == 2) {
      // @ts-ignore
      appState.temperature = fahrenheit + "˚F";
    } else if (appState.toggleTemp == 3) {
      // @ts-ignore
      appState.temperature = celsius + "˚C";
    }

    return appState.temperature;
  }
}
