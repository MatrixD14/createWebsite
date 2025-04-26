import { inputcreate } from "./variavels.js";

export function inputcreateObject(object) {
  let inputCreateObj = document.createElement("input");
  inputCreateObj.type = "button";
  inputCreateObj.name = object;
  inputCreateObj.value = object;
  inputCreateObj.id = object;
  inputcreate.appendChild(inputCreateObj);
}
export function inputcreateObjectSpecific(object) {
  let inputCreateObjsSpecific = document.createElement("input");
  inputCreateObjsSpecific.type = "button";
  inputCreateObjsSpecific.name = object;
  inputCreateObjsSpecific.value = object;
  inputCreateObjsSpecific.id = object;
  inputcreate.appendChild(inputCreateObjsSpecific);
}
