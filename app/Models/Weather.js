export class Weather{
  constructor(data){
    this.main = data.main
    this.icon = data.weather[0].icon
    this.description = data.weather[0].description;
  }


  get WeatherTemplate(){
    return `
      <div
              class="card m-5"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample">
              <div class="card-body d-flex justify-content-around">
                <div>
                  <span>60</span>
                  <i class="mdi mdi-temperature-fahrenheit"></i>
                </div>
                <div id="weather-icon">
                <img src="https://openweathermap.org/img/wn/${this.icon}.png" alt="">
                </div>
                <span>sunny</span>
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
}