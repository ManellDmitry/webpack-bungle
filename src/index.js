import itemTemplate from "./temlates/item.hbs";
import generateItem from "./temlates/generateItem.hbs";
import "./coctail/createMarkup.js";
import "./css/style.scss";
import "./pexels/fetch.js";

function firstWord() {
  const word = "Hi Webpack";
  const text = document.createElement("p");
  text.textContent = word;
  return text;
}
const first = firstWord();
// console.log(first);
document.querySelector("body").append(first);
// console.log(itemTemplate);
const data1 = {
  title: "title1",
  text: "ddddddddddddddddsdsdasdddddd",
};
const data2 = {
  title: "title2",
  text: "ddddddddddddddddsdsdasdddddd",
};
const template1 = itemTemplate(data1);
// console.log(template1);
const template2 = itemTemplate(data2);
// console.log(template2);
const array = [data1, data2];
// console.log(array);
const template3 = generateItem(array);
// console.log(template3);
