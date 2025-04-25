import { status, armaze, armazepos } from "./variavels.js";
export function dados() {
  status.textContent =
    "object: " +
    armaze.armaz.length +
    " / posX: " +
    armazepos.x +
    " / posY: " +
    armazepos.y;
}
