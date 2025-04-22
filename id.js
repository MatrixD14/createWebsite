const screenX = document.querySelector("#valorx"),
  screenY = document.querySelector("#valory"),
  background = document.querySelector("#background"),
  frontSize = document.querySelector("#font_size"),
  screenColor = document.querySelector("#Color"),
  screenName = document.querySelector("#name"),
  border = document.querySelector("#border"),
  border_radio = document.querySelector("#border_radius"),
  editer = document.querySelector("#edite"),
  pai = document.querySelector("#stopbutton"),
  delet = document.querySelector("#delete");
let select = null;
let armaze = [];
let inputObj = ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "button"];
screenName.value = "new type the object";
frontSize.value = "";
screenX.value = "200px";
screenY.value = "50px";
background.value = "gray";
screenColor.value = "white";
border.value = "";
border_radio.value = "0";
inputObj.forEach((e) => {
  buttonCreate("#" + e, e);
});
document.querySelector("#enter").addEventListener("click", function () {
  if (parseInt(screenX.value) > 0 && parseInt(screenY.value) && select) {
    nomeObject(
      select,
      screenName,
      frontSize,
      background,
      screenColor,
      screenX,
      screenY,
      border,
      border_radio
    );
  }
});

function buttonCreate(name, typeObject) {
  document.querySelector(name).addEventListener("click", () => {
    if (parseInt(screenX.value) > 0 && parseInt(screenY.value) > 0) {
      create(typeObject);
      onoffedita("0", "none");
      return;
    }
  });
}

function logitaDelete2(arm) {
  delet.addEventListener("click", function () {
    if (select != null) {
      onoffedita("0", "none");
      select.remove();
      runlist = arm.indexOf(select);
      if (runlist !== -1) arm.splice(runlist, 1);
      delet.style.background = "rgba(255, 0, 0, 0.75)";
      select = null;
    }
  });
  setTimeout(() => {
    delet.style.background = "rgb(252, 23, 35)";
  }, 1500);
}

function nomeObject(
  object,
  name,
  fontsize,
  background,
  Color,
  largura,
  altura,
  borda,
  borderradio
) {
  object.style.display = "flex";
  object.style.justifyContent = "center";
  object.style.alignItems = "center";
  object.textContent = name.value;
  if (background?.value) object.style.backgroundColor = background.value;
  if (Color?.value) object.style.color = Color.value;
  object.style.border = borda.value;
  object.style.height = charEspecial2(altura, "50px");
  object.style.width = charEspecial2(largura, "200px");
  object.style.borderRadius = charEspecial2(borderradio, "0");
  object.style.fontSize = charEspecial2(fontsize, "");
}

function charEspecial2(object, value) {
  let charP = object.value.match(/^(\d+(\.\d+)?)(|px|em|rem|vh|vw|%)$/);
  return object == "" && charP ? (object.value = value) : object.value;
}

function create(html) {
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
      return (onoff = 0);
    }
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

function onoffedita(opacitys, pointEvent) {
  editer.style.opacity = opacitys;
  editer.style.pointerEvents = pointEvent;
}

function selectObject(object) {
  screenName.value = object.textContent;
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

function deselectObject() {
  select = null;
  armaze.forEach((el) => {
    el.style.outline = "none";
    onoffedita("0", "none");
  });
}

function convertcolor(object) {
  let mycolo = window.getComputedStyle(object).backgroundColor;
  let rgb = mycolo.match(/\d+/g);
  let r = 255 - parseInt(rgb[0]);
  let g = 255 - parseInt(rgb[1]);
  let b = 255 - parseInt(rgb[2]);
  r = isNaN(r) ? 0 : r;
  g = isNaN(g) ? 0 : g;
  b = isNaN(b) ? 0 : b;
  colorarm = "4px solid rgb(" + r + "," + g + "," + b + ")";
  return colorarm;
}
function moveobject(object, onoff) {
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

function messagem(erro) {
  let object = document.createElement("p");
  nomeObject(object, erro, "50px", "gray", "white", "300px", "100px", "", "");
  console.log("entro aqui");
  pai.appendChild(object);
  setTimeout(() => {
    object.remove();
  }, 2000);
}
