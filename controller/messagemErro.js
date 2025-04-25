import { nomeObject } from "./Entidade";
import { pai } from "./variavels.js";
export function messagem(erro) {
  let object = document.createElement("p");
  nomeObject(object, erro, "50px", "gray", "white", "300px", "100px", "", "");
  console.log("entro aqui");
  pai.appendChild(object);
  setTimeout(() => {
    object.remove();
  }, 2000);
}
