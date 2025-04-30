import { dados } from "./status.js";
import { pai, armazepos } from "./variavels.js";
export function moveobject(object, onoff) {
  if (!object) return;
  let eixoObjX = 0,
    eixoObjY = 0,
    onoffmove = false;

  object.style.position = "absolute";
  object.style.cursor = "grab";
  function getClientXY(e) {
    if (e.touches) {
      return { xs: e.touches[0].clientX, ys: e.touches[0].clientY };
    }
    return { xs: e.clientX, ys: e.clientY };
  }
  function startmove(e) {
    e.stopPropagation();
    onoffmove = true;
    let obj = object.getBoundingClientRect();
    let { xs, ys } = getClientXY(e);
    eixoObjX = xs - obj.left;
    eixoObjY = ys - obj.top;

    document.addEventListener("mouseup", offMove);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("touchmove", onMove, { passive: false });
    document.addEventListener("touchend", offMove);
  }

  function onMove(e) {
    if (!onoffmove || onoff > 0) return;
    e.preventDefault();
    let { xs, ys } = getClientXY(e);
    let pospai = pai.children[0].getBoundingClientRect(),
      paiheight = pai.children[0].offsetHeight,
      paiwidth = pai.children[0].offsetWidth;
    let x = xs - pospai.left - eixoObjX,
      y = ys - pospai.top - eixoObjY,
      widthsubX = paiwidth - object.offsetWidth,
      heightsubY = paiheight;
    x = Math.max(0, Math.min(x, widthsubX));
    y = Math.max(0, Math.min(y, heightsubY));
    let lefts = (x / widthsubX) * 100,
      tops = (y / heightsubY) * 100;
    object.style.left = `calc(${lefts}% - ${
      object.offsetWidth * (lefts / 100)
    }px)`;
    // object.style.top = `calc(${tops}% - ${
    //   object.offsetHeight * (tops / 100)
    // }px)`;
    object.style.top = tops + "%";

    x = Math.max(0, Math.min(lefts, 100));
    y = Math.max(0, Math.min(tops, 100));
    armazepos.x = Math.round(x);
    armazepos.y = Math.round(y);
    // console.log(
    //   `largura: ${paiwidth - object.offsetWidth}\naltura: ${
    //     paiheight - object.offsetHeight
    //   }`
    // );
    dados();
  }

  function offMove() {
    onoffmove = false;
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", offMove);
    document.removeEventListener("touchmove", onMove);
    document.removeEventListener("touchend", offMove);
  }
  object.addEventListener("mousedown", startmove);
  object.addEventListener("touchstart", startmove, { passive: false });
}
