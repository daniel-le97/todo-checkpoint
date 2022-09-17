export class Weather{
  constructor(data){
    this.main = data.main
    this.weather = data.weather.icon
  }
}