import { formatDualTag, formatOneTag } from "./variavels.js";
export function fromattext(text) {
  formatDualTag.forEach((tag) => {
    let criatag = new RegExp(`\\{([^{}]+?)\\}\\s*${tag}(?!\\s*\\{)`, "gi");
    text = text.replace(criatag, (_, conteudo) => {
      return `&nbsp;<${tag}>${conteudo}</${tag}>&nbsp;`;
    });
  });

  formatOneTag.forEach((tag) => {
    let criatag = new RegExp(`\\/s*${tag}(?!\\s*\\{)`, "gi");
    text = text.replace(criatag, `<${tag}>&nbsp;`);
  });
  return text;
}
