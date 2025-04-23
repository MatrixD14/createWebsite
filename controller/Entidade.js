export default class entidade {
  constructor(
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
    this.object = object;
    this.name = name;
    this.fontsize = fontsize;
    this.background = background;
    this.Color = Color;
    this.largura = largura;
    this.altura = altura;
    this.borda = borda;
    this.borderradio = borderradio;
  }
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
  object.style.margin = "0";
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
