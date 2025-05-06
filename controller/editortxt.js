import {
  desenbledEditotxt,
  acitiveEditotxt,
  menustatus,
  onoffedito,
  screenName1,
  screenName2,
  background,
  background1,
  screenColor,
  screenColor1,
} from "./variavels.js";

export function onoffEditetxt() {
  screenName1.addEventListener("input", () => {
    screenName2.value = screenName1.value;
  });
  screenName2.addEventListener("input", () => {
    screenName1.value = screenName2.value;
  });
  background.addEventListener("input", () => {
    background1.value = background.value;
  });
  background1.addEventListener("input", () => {
    background.value = background1.value;
  });
  screenColor1.addEventListener("input", () => {
    screenColor.value = screenColor1.value;
  });
  screenColor.addEventListener("input", () => {
    screenColor1.value = screenColor.value;
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
