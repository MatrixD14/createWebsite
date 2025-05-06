import { selectObject } from "./selectObject.js";
import { fundoObj, pai, background } from "./variavels.js";
import { onoffedita } from "./deleteEdite.js";
import { caracteristica } from "./Entidade.js";
export function conffundo() {
  let onoff = false;
  fundoObj.addEventListener("click", () => {
    onoff = !onoff;
    // background.value = "black";
    if (onoff) {
      onoffedita("1", "auto");
      pai.children[0].style.outline = "auto";
      if (background?.value) {
        pai.children[0].style.backgroundColor = background.value;
      }
      background.value = pai.children[0].style.backgroundColor;

      console.log(onoff);
      // selectObject(pai.children[0]);
    } else {
      onoffedita("0", "none");
      pai.children[0].style.outline = "none";
    }
  });
}
