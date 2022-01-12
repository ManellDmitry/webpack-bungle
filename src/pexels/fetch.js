import refs from "./refs.js";
const { pexelsForm, galleryId } = refs;
const apiKey = "563492ad6f91700001000001e699530e579f4688bb7809ad69f88cb3";
const baseUrl = `https://api.pexels.com/v1/`;
let endPoint = "search";
let color = red;
let search = "dog";
const params = `?query=${search}&per_page=3&color=${color}`;
let url = baseUrl + endPoint + params;
const options = {
  method: "GET",
  headers: {
    Authorization: pexelsKey,
  },
};
function getFetch() {
  fetch(url, options)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      console.log(result);
      return result.photos;
    })
    .then((data) => {
      console.log(data);
      const markup = data
        .map((elem) => {
          console.log(elem);
          const {
            alt,
            src: { tiny },
          } = elem;
          return createElement(tiny, alt);
        })
        .join("");
      console.log(markup);
      innerElement(galleryId, markup);
    });
}
console.log(pexelsForm);
pexelsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let search = event.target.elements.search.value.toLowerCase();
  console.log(search);
});
// функция создания эллемента
function createElement(src, alt) {
  return `<li><img src="${src}"alt="${alt}"</li>`;
}
// функция встраивания в эллемент
function innerElement(plays, element) {
  if (typeof element === "string") {
    place.insertAdjacentHTML("afterbegin", element);
  } else if (!element) {
    place.insertAdjacentHTML("afterbegin", "<p>нечего отрисовать</p>");
  } else {
    place.insertAdjacentElement("afterbegin", element);
  }
}
