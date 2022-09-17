import { setHTML, setText } from "../Utils/Writer.js";
let toggle = true;

function drawTime() {
  let time = new Date();
  let twelve = time.toLocaleTimeString();
  let twentyFour = time.toLocaleTimeString("en-US", {
    hour12: false,
    
  });
  
  if (toggle == false) {
    setHTML("time", twelve)
    setText("time-format", "12 HR");;
  } else {
    setHTML("time", twentyFour)
    setText('time-format', '24 HR');
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
