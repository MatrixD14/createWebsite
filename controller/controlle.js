import { caracteristica } from "./Entidade.js";
import { onoffedita } from "./deleteEdite.js";
import { create } from "./createObject.js";
import { inputcreateObject, inputcreateObjectSpecific } from "./createInput.js";
import { pesquisatag } from "./pesquisatag.js";
import { onoffEditetxt } from "./editortxt.js";
import { startSite } from "../editortext/StartSite.js";
import { conffundo } from "./confFundo.js";
import {
  inputObj,
  screenName1,
  screenName2,
  frontSize,
  background,
  screenColor,
  screenX,
  screenY,
  border,
  border_radio,
  select,
  armaze,
  inputSpecific,
  screenColor1,
  background1,
} from "./variavels.js";
screenName1.value = "name objetc";
screenName2.value = screenName1.value;
frontSize.value = "";
screenX.value = "200px";
screenY.value = "50px";
background.value = "#77767b";
background1.value = background.value;
screenColor.value = "#ffffff";
screenColor1.value = screenColor.value;
border.value = "none";
border_radio.value = "0";

inputObj.forEach((e) => {
  inputcreateObject(e);
  buttonCreate("#" + e, e);
});
inputSpecific.forEach((e) => {
  inputcreateObjectSpecific(e);
  buttonCreate("#" + e, e);
});
pesquisatag();
onoffEditetxt();
conffundo();
startSite();
document.querySelector("#enter").addEventListener("click", function () {
  if (parseInt(screenX.value) > 0 && parseInt(screenY.value) > 0) {
    if (select.selet !== null) {
      caracteristica(
        select.selet,
        screenName1,
        frontSize,
        background,
        screenColor,
        screenX,
        screenY,
        border,
        border_radio
      );
    } else {
    }
  }
});
function buttonCreate(name, typeObject) {
  document.querySelector(name).addEventListener("click", () => {
    if (parseInt(screenX.value) > 0 && parseInt(screenY.value) > 0) {
      create(typeObject, armaze, select);
      onoffedita("0", "none");
      return;
    }
    console.log("nao entro");
  });
}
