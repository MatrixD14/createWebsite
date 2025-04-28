import {
  desenbledEditotxt,
  acitiveEditotxt,
  menustatus,
  onoffedito,
} from "./variavels.js";

export function onoffEditetxt() {
  acitiveEditotxt.addEventListener("click", () => {
    onoffedito.style.display = "block";
    menustatus.style.display = "none";
  });
  desenbledEditotxt.addEventListener("click", () => {
    onoffedito.style.display = "none";
    menustatus.style.display = "block";
  });
}
