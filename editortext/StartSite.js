import { startsite, pai } from "../controller/variavels.js";
export function startSite() {
  startsite.addEventListener("click", () => {
    let html = `
      <!DOCTYPE html>
      <html>
      <head>
      <title>area de test</title>
      <style>
        body{padding: 0;margin: 0;justify-content: center;align-items:
         center;display: flex;text-align:center;background: rgb(255, 255, 255);
         pointer-events: all;position: relative;width: 100%; height: 100%;box-sizing: border-box;}
      </style>
      </head>
      <body >
        ${pai.children[0].innerHTML}
      </body>`;
    let blob = new Blob([html], {
      type: "text/html",
    });
    let url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  });
}
