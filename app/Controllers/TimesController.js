import { setHTML } from "../Utils/Writer.js";
let toggle = true;

function drawTime() {
  let time = new Date();
  let twelve = time.toLocaleTimeString();
  let twentyFour = time.toLocaleTimeString("en-US", {
    hour12: false,
    
  });
  
  if (toggle == false) {
    setHTML("time", twelve);
  } else {
    setHTML("time", twentyFour);
  }
}


export class TimesController {
  constructor() {
    
    setInterval(drawTime.bind(1000))
  }

  myTime() {
    toggle = !toggle;
  }
}
