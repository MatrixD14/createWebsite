import { dados } from "./status.js";
import { editer, delet, armazepos, onoffedito, fundoObj } from "./variavels.js";
export function Delete2(arm, selects) {
  delet.addEventListener("click", function () {
    if (selects.selet !== null && selects.selet !== fundoObj) {
      let runlist = arm.armaz.indexOf(selects.selet);
      if (runlist !== -1) {
        onoffedita("0", "none");
        selects.selet.remove();
        arm.armaz.splice(runlist, 1);
        onoffedito.style.display = "none";
        delet.style.background = "rgba(255, 0, 0, 0.75)";
        armazepos.x = 0;
        armazepos.y = 0;
        dados();
      }
      selects.selet = null;
    }
  });
}

export function onoffedita(opacitys, pointEvent) {
  editer.style.opacity = opacitys;
  editer.style.pointerEvents = pointEvent;
}
