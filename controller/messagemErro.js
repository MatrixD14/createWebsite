import { pai } from "./variavels.js";
export function messagem(erro) {
  let object = document.createElement("p");
  object.style.display = "flex";
  object.style.justifyContent = "center";
  object.style.alignItems = "center";
  object.style.margin = "0";
  object.textContent = erro;
  object.style.backgroundColor = "grey";
  object.style.color = "white";
  object.style.border = "2px solid black";
  object.style.height = "50px";
  object.style.width = "200px";
  object.style.fontSize = "20px";
  console.log("entro aqui");
  pai.appendChild(object);
  setTimeout(() => {
    object.remove();
  }, 2000);
}
