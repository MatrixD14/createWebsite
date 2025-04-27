import { pesquisa } from "./variavels.js";
export function pesquisatag() {
  let tag = document.querySelectorAll(".tag");
  pesquisa.addEventListener("input", () => {
    let encontra = pesquisa.value.toLowerCase();
    tag.forEach((tags) => {
      tags.style.display = tags.value.toLowerCase().includes(encontra)
        ? "list-item"
        : "none";
    });
  });
}
