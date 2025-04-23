import {
  nomeObject,
  moveobject,
  logitaDelete2,
  selectObject,
  onoffedita,
  deselectObject,
  armaze,
} from "./controlle.js";
export function create(html) {
  let object = document.createElement(html);
  let onoff = 0;
  nomeObject(
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
      logitaDelete2(armaze);
      selectObject(object);
      delet.style.background = "rgb(252, 23, 35)";
      return (onoff = 0);
    }
    delet.style.background = "rgba(255, 0, 0, 0.75)";
    onoffedita("0", "none");
    deselectObject();
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
