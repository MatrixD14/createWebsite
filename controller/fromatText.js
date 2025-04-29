import { formatDualTag, formatOneTag } from "./variavels.js";
export function fromattext(text) {
  let specionemudansa;
  do {
    specionemudansa = false;
    formatDualTag.forEach((tag) => {
      let criatag = new RegExp(`\\{([^{}]+?)\\}\\s*${tag}(?!\\s*\\[)`, "gis");
      text = text.replace(criatag, (_, conteudo) => {
        specionemudansa = true;
        return `<${tag}>${conteudo}</${tag}>`;
      });
    });
  } while (specionemudansa);
  formatOneTag.forEach((tag) => {
    let criatag = new RegExp(`\\/s*${tag}(?!\\s*\\[)`, "gi");
    text = text.replace(criatag, `<${tag}>`);
  });
  return text;
}
