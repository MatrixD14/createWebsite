import { fromattext } from "./fromatText.js";

export function caracteristica(
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
  object.style.margin = "0";
  object.innerHTML = fromattext(name.value);
  if (background?.value) object.style.backgroundColor = background.value;
  if (Color?.value) object.style.color = Color.value;
  object.style.border = borda.value === "none" ? "none" : borda.value;
  object.style.height = charEspecial2(altura, "50px");
  object.style.width = charEspecial2(largura, "200px");
  object.style.borderRadius = charEspecial2(borderradio, "0");
  object.style.fontSize = charEspecial2(fontsize, "");
}
function charEspecial2(object, value) {
  let valor = object?.value || "",
    charP = valor.match(/^(\d+(\.\d+)?)(|px|em|rem|vh|vw|%)$/);
  return charP ? valor : value;
}
