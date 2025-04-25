import { editer, delet } from "./variavels.js";
export function Delete2(arm, select) {
  delet.addEventListener("click", function () {
    if (select != null) {
      onoffedita("0", "none");
      select.remove();
      delet.style.background = "rgba(255, 0, 0, 0.75)";
      let runlist = arm.indexOf(select);
      if (runlist !== -1) arm.splice(runlist, 1);
      select = null;
    }
  });
}

export function onoffedita(opacitys, pointEvent) {
  editer.style.opacity = opacitys;
  editer.style.pointerEvents = pointEvent;
}
