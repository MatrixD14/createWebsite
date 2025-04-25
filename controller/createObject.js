import { nomeObject } from "./Entidade.js";
import { moveobject } from "./moveObject.js";
import { convertcolor } from "./conversocolor.js";
import { Delete2, onoffedita } from "./delete.js";
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
} from "./variavels.js";
export function create(html, armaze, select) {
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
    deselectObject(armaze, select);
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
