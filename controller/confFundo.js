import { selectObject, deselectObject } from "./selectObject.js";
import {
  fundoObj,
  pai,
  background,
  screenName1,
  frontSize,
  screenColor,
  border,
  border_radio,
} from "./variavels.js";
import { onoffedita } from "./deleteEdite.js";
import { caracteristica } from "./Entidade.js";
export function conffundo(armaz, select) {
  let onoff = false;

  fundoObj.addEventListener("click", (e) => {
    e.stopPropagation();
    let filho = pai.children[0];
    if (!filho) return;
    if (select.select && select.select !== filho) {
      deselectObject(armaz, select);
    }
    filho.dataset.fundo = "true";
    select.select = filho;
    onoff = !onoff;
    if (onoff) {
      selectObject(filho);
      onoffedita("1", "auto");
      filho.style.outline = "auto";
      console.log(onoff);
    } else {
      onoffedita("0", "none");
      filho.style.outline = "none";
    }
  });
}
