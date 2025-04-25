import { caracteristica } from "./Entidade.js";
import { onoffedita } from "./deleteEdite.js";
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
  select,
  armaze,
} from "./variavels.js";
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
  if (parseInt(screenX.value) > 0 && parseInt(screenY.value)) {
    if (select.selet !== null) {
      caracteristica(
        select.selet,
        screenName,
        frontSize,
        background,
        screenColor,
        screenX,
        screenY,
        border,
        border_radio
      );
    } else {
      console.log("nao entro");
    }
  }
});

function buttonCreate(name, typeObject) {
  document.querySelector(name).addEventListener("click", () => {
    if (parseInt(screenX.value) > 0 && parseInt(screenY.value) > 0) {
      create(typeObject, armaze.armaz, select.selet);
      onoffedita("0", "none");
      return;
    }
  });
}
