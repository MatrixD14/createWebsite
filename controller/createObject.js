import { caracteristica } from "./Entidade.js";
import { moveobject } from "./moveObject.js";
import { convertcolor } from "./conversocolor.js";
import { Delete2, onoffedita } from "./deleteEdite.js";
import { selectObject, deselectObject } from "./selectObject.js";
import {
  screenName1,
  frontSize,
  background,
  screenColor,
  screenX,
  screenY,
  border,
  border_radio,
  pai,
  delet,
} from "./variavels.js";
import { dados } from "./status.js";
export function create(html, armaz, select) {
  let object = document.createElement(html);
  let onoff = 0;
  caracteristica(
    object,
    screenName1,
    frontSize,
    background,
    screenColor,
    screenX,
    screenY,
    border,
    border_radio
  );
  if (!armaz.armaz.includes(object)) {
    armaz.armaz.push(object);
    dados();
    console.log(armaz.armaz.length);
  }
  object.addEventListener("click", function (e) {
    e.stopPropagation();
    select.selet = object;
    onoff++;

    if (onoff === 3) {
      onoffedita("1", "auto");
      object.style.outline = convertcolor(object);
      Delete2(armaz, select);
      selectObject(object);
      delet.style.background = "rgb(252, 23, 35)";
      return (onoff = 0);
    }
    delet.style.background = "rgba(255, 0, 0, 0.75)";
    onoffedita("0", "none");
    deselectObject(armaz, select);
  });
  moveobject(object, onoff);
  armaz.armaz.forEach((el) => {
    if (el != object) {
      el.style.outline = "none";
      el = onoffedita("0", "none");
    }
  });
  pai.appendChild(object);
  return object;
}
