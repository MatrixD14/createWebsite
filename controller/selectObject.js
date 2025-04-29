import {
  screenName1,
  frontSize,
  background,
  screenColor,
  screenX,
  screenY,
  border,
  border_radio,
} from "./variavels.js";
import { onoffedita } from "./deleteEdite.js";
export function selectObject(object) {
  screenName1.value = object.dataset.original || object.innerHTML;
  background.value = object.style.backgroundColor;
  screenColor.value = object.style.color;
  border.value = object.style.border;
  border_radio.value = object.style.borderRadius;
  frontSize.value = object.style.fontSize;
  if (parseInt(screenX.value) > 0 && parseInt(screenY.value) > 0) {
    screenX.value = object.style.width;
    screenY.value = object.style.height;
    return;
  }
}
export function deselectObject(arm, select) {
  select.select = null;
  arm.armaz.forEach((el) => {
    el.style.outline = "none";
    onoffedita("0", "none");
  });
}
