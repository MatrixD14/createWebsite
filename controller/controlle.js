import { nomeObject } from "./Entidade.js";
import { onoffedita } from "./delete.js";
import { create } from "./createObject.js";
import {
  inputObj,
  screenName,
  frontSize,
  background,
  screenColor,
  screenX,
  screenY,
  border,
  border_radio,
} from "./variavels.js";
let select = null,
  armaze = [];
screenName.value = "new type the object";
frontSize.value = "";
screenX.value = "200px";
screenY.value = "50px";
background.value = "gray";
screenColor.value = "white";
border.value = "";
border_radio.value = "0";

inputObj.forEach((e) => {
  buttonCreate("#" + e, e);
});

document.querySelector("#enter").addEventListener("click", function () {
  if (parseInt(screenX.value) > 0 && parseInt(screenY.value) && select) {
    nomeObject(
      select,
      screenName,
      frontSize,
      background,
      screenColor,
      screenX,
      screenY,
      border,
      border_radio
    );
  }
});

function buttonCreate(name, typeObject) {
  document.querySelector(name).addEventListener("click", () => {
    if (parseInt(screenX.value) > 0 && parseInt(screenY.value) > 0) {
      create(typeObject, armaze, select);
      onoffedita("0", "none");
      return;
    }
  });
}
