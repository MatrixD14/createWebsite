export function moveobject(object, onoff) {
  if (!object) return;
  let eixoObjX = 0,
    eixoObjY = 0,
    onoffmove = false,
    pai = document.querySelector("#stopbutton");
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
    let { xs, ys } = getClientXY(e);
    let obj = object.getBoundingClientRect();
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
    let pospai = pai.getBoundingClientRect();
    let x = xs - pospai.left - eixoObjX,
      y = ys - pospai.top - eixoObjY;

    x = Math.max(0, Math.min(x, pai.offsetWidth - object.offsetWidth));
    y = Math.max(0, Math.min(y, pai.offsetHeight - object.offsetHeight));

    object.style.left = x + "px";
    object.style.top = y + "px";
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
