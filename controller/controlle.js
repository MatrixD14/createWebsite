import { nomeObject } from "./Entidade.js";
import { moveobject } from "./moveObject.js";
import { convertcolor } from "./conversocolor.js";
import { Delete2, onoffedita } from "./delete.js";
import { selectObject, deselectObject } from "./selectObject.js";
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
  armaze,
  pai,
  delet,
} from "./variavels.js";
let select = null;
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
      create(typeObject);
      onoffedita("0", "none");
      return;
    }
  });
}

function create(html) {
  let object = document.createElement(html);
  let onoff = 0;
  new nomeObject(
    object,
    screenName,
    frontSize,
    background,
    screenColor,
    screenX,
    screenY,
    border,
    border_radio
  );
  object.addEventListener("click", function (e) {
    e.stopPropagation();
    select = object;
    onoff++;
    if (!armaze.includes(object)) {
      armaze.push(object);
      console.log(armaze.length);
    }
    if (onoff === 3) {
      onoffedita("1", "auto");
      object.style.outline = convertcolor(object);
      Delete2(armaze, select);
      selectObject(object);
      delet.style.background = "rgb(252, 23, 35)";
      return (onoff = 0);
    }
    delet.style.background = "rgba(255, 0, 0, 0.75)";
    onoffedita("0", "none");
    deselectObject(select);
  });
  moveobject(object, onoff);
  armaze.forEach((el) => {
    if (el != object) {
      el.style.outline = "none";
      el = onoffedita("0", "none");
    }
  });
  pai.appendChild(object);
  return object;
}
