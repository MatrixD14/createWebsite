import {
  desenbledEditotxt,
  acitiveEditotxt,
  menustatus,
  onoffedito,
  screenName1,
  screenName2,
} from "./variavels.js";

export function onoffEditetxt() {
  screenName1.addEventListener("input", () => {
    screenName2.value = screenName1.value;
  });
  screenName2.addEventListener("input", () => {
    screenName1.value = screenName2.value;
  });
  acitiveEditotxt.addEventListener("click", () => {
    onoffedito.style.display = "block";
    menustatus.style.display = "none";
  });
  desenbledEditotxt.addEventListener("click", () => {
    onoffedito.style.display = "none";
    menustatus.style.display = "block";
  });
}
