import { setHTML, setText } from "../Utils/Writer.js";
let toggle = true;

function drawTime() {
  let time = new Date();
  let clockily = time.getHours();
  let twelve = time.toLocaleTimeString();
  let twentyFour = time.toLocaleTimeString("en-US", {
    hour12: false,
  });

  if (toggle == false) {
    setHTML("time", twelve);
    setText("time-format", "12 HR");
    return;
  }

  setText("time-format", "24 HR");
  setHTML("time", twentyFour + " AM");

  if (clockily >= 12) {
    setHTML("time", twentyFour + " PM");
  }
}

export class TimesController {
  constructor() {
    setInterval(drawTime.bind(1000));
  }

  myTime() {
    toggle = !toggle;
  }
}
