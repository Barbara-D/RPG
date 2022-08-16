export function randomFromInterval(min, max) {
  let result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
  //just an example
  //to use :
  //  import { f1 } from "./file1.js";
  //  f1();
}
