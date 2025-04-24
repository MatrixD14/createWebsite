export function convertcolor(object) {
  let mycolo = window.getComputedStyle(object).backgroundColor;
  let rgb = mycolo.match(/\d+/g);
  let r = 255 - parseInt(rgb[0]);
  let g = 255 - parseInt(rgb[1]);
  let b = 255 - parseInt(rgb[2]);
  r = isNaN(r) ? 0 : r;
  g = isNaN(g) ? 0 : g;
  b = isNaN(b) ? 0 : b;
  let colorarm = "4px solid rgb(" + r + "," + g + "," + b + ")";
  return colorarm;
}
