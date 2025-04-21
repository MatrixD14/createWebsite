const screenX = document.querySelector("#valorx"),
  screenY = document.querySelector("#valory"),
  background = document.querySelector("#background"),
  frontSize = document.querySelector("#font_size"),
  screenColor = document.querySelector("#Color"),
  screenName = document.querySelector("#name"),
  editer = document.querySelector("#edite"),
  pai = document.querySelector("#stopbutton");
let select = null;
let armaze = [];
screenName.value = "new type the object";
frontSize.value = 10;
screenX.value = 200;
screenY.value = 50;
background.value = "gray";
screenColor.value = "white";
buttonCreate("#par", "p");
buttonCreate("#buttons", "button");
buttonCreate("#block", "div");
document.querySelector("#enter").addEventListener("click", function () {
  if (select) {
    nomeObject(
      select,
      screenName,
      frontSize,
      background,
      screenColor,
      screenX,
      screenY
    );
  }
});

function buttonCreate(name, typeObject) {
  document.querySelector(name).addEventListener("click", () => {
    if ((screenX.value > 0 && screenY.value > 0) || frontSize.value > 0) {
      create(typeObject);
      onoffedita("1", "auto");
      return;
    }
    messagem("add scale");
  });
}

function logitaDelete2(arm) {
  document.querySelector("#delete").addEventListener("click", function () {
    if (select != null) {
      onoffedita("0", "none");
      select.remove();
      runlist = arm.indexOf(select);
      if (runlist !== -1) arm.splice(runlist, 1);
      select = null;
      console.log(arm);
    }
  });
}

function nomeObject(
  object,
  name,
  fontsize,
  background,
  Color,
  largura,
  altura
) {
  object.style.display = "flex";
  object.style.justifyContent = "center";
  object.style.alignItems = "center";
  object.textContent = name.value;
  if (background?.value) object.style.backgroundColor = background.value;
  if (Color?.value) object.style.color = Color.value;
  if (!(largura?.value && largura.value > 0)) {
    largura.value = 200;
    object.style.width = largura.value + "px";
    return;
  }

  if (!(altura?.value && altura.value > 0)) {
    altura.value = 50;
    object.style.height = altura.value + "px";
    return;
  }

  if (!(fontsize?.value && fontsize.value > 0)) {
    fontsize.value = 10;
    object.style.fontSize = fontsize.value + "px";
    return;
  }
  object.style.width = largura.value + "px";
  object.style.height = altura.value + "px";
  object.style.fontSize = fontsize.value + "px";
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
    screenY
  );
  object.addEventListener("click", function (e) {
    e.stopPropagation();
    select = object;
    onoff++;
    if (!armaze.includes(object)) {
      armaze.push(object);
      console.log(armaze.length);
    }
    if (onoff > 2) onoff = 0;
    if (onoff == 2) {
      onoffedita("1", "auto");
      object.style.outline = convertcolor(object);
      logitaDelete2(armaze);
      selectObject(object);
      armaze.forEach((el) => {
        if (el != object) el.style.outline = "none";
      });
      return;
    }
    onoffedita("0", "none");
    deselectObject();
  });
  moveobject(object, onoff);
  armaze.forEach((el) => {
    if (el !== object) el.style.outline = "none";
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
  if ((screenX.value > 0 && screenY.value > 0) || frontSize.value > 0) {
    frontSize.value = parseInt(object.style.fontSize) || "";
    screenX.value = parseInt(object.style.width) || "";
    screenY.value = parseInt(object.style.height) || "";
  }
}

function deselectObject() {
  select = null;
  armaze.forEach((el) => {
    el.style.outline = "none";
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
  console.log(colorarm);
  return colorarm;
}
function moveobject(object, onoff) {
  if (!object) return;
  let eixoObjX = 0,
    eixoObjY = 0,
    onoffmove = false;
  object.style.position = "absolute";
  object.addEventListener("mousedown", (e) => {
    onoffmove = true;
    eixoObjX = e.clientX - object.offsetLeft;
    eixoObjY = e.clientY - object.offsetTop;
  });

  object.addEventListener("mousemove", (e) => {
    if (!onoffmove || (onoff > 0 && onoff < 2)) return;
    object.style.left = e.clientX - eixoObjX + "px";
    object.style.top = e.clientY - eixoObjY + "px";
  });
  object.addEventListener("mouseup", () => {
    onoffmove = false;
  });
}
function messagem(erro) {
  let object = document.createElement("p");
  nomeObject(object, erro, "50px", "gray", "white", "300px", "100px");
  console.log("entro aqui");
  pai.appendChild(object);
  setTimeout(() => {
    object.remove();
  }, 2000);
}
