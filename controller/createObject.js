import { caracteristica } from "./Entidade.js";
import { moveobject } from "./moveObject.js";
import { convertcolor } from "./conversocolor.js";
import { Delete2, onoffedita } from "./deleteEdite.js";
import { selectObject, deselectObject } from "./selectObject.js";
import {
  screenName,
  frontSize,
  background,
  screenColor,
  screenX,
  screenY,
  border,
  border_radio,
  pai,
  delet,
  select,
} from "./variavels.js";
export function create(html, armaze, selects) {
  let object = document.createElement(html);
  let onoff = 0;
  caracteristica(
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
    select.selet = object;
    onoff++;
    if (!armaze.includes(object)) {
      armaze.push(object);
      console.log(armaze.length);
    }
    if (onoff === 3) {
      onoffedita("1", "auto");
      object.style.outline = convertcolor(object);
      Delete2(armaze, selects);
      selectObject(object);
      delet.style.background = "rgb(252, 23, 35)";
      return (onoff = 0);
    }
    delet.style.background = "rgba(255, 0, 0, 0.75)";
    onoffedita("0", "none");
    deselectObject(armaze, selects);
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
