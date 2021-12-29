function firstWord() {
  const word = "Hi Webpack";
  const text = document.createElement("p");
  text.textContent = word;
  return text;
}
const first = firstWord();
console.log(first);
document.querySelector("body").append(first);
