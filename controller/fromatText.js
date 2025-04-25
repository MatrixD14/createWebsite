export function fromattext(text) {
  let formatDualTag = [
      "b",
      "strong",
      "i",
      "em",
      "mark",
      "small",
      "del",
      "ins",
      "sub",
      "sup",
      "u",
      "abbr",
      "code",
      "kbd",
      "samp",
      "var",
      "q",
      "blockquote",
      "cite",
      "pre",
    ],
    formatOneTag = ["br", "hr", "span"];

  formatDualTag.forEach((tag) => {
    let criatag = new RegExp(`\\{([^{}]+?)\\}\\s*${tag}(?!\\s*\\{)`, "gi");
    text = text.replace(criatag, (_, conteudo) => {
      return `&nbsp;<${tag}>${conteudo}</${tag}>&nbsp;`;
    });
  });

  formatOneTag.forEach((tag) => {
    let criatag = new RegExp(`\\/s*${tag}(?!\\s*\\{)`, "gi");
    text = text.replace(criatag, `<${tag}>`);
  });
  return text;
}
