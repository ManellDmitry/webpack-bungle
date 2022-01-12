import refs from "./refs.js";
const { pexelsForm, galleryId, hiddenButton } = refs;
// console.log(hiddenButton);
function getFetch() {
  const apiKey = "563492ad6f91700001000001e699530e579f4688bb7809ad69f88cb3";
  const baseUrl = `https://api.pexels.com/v1/`;
  let endPoint = "search";
  let page = 1;
  let search = "";
  let color = "";
  function setPage() {
    console.log(page);
    return (page += 1);
  }
  function setSearch(value) {
    return (search = value);
  }
  function setColor(value) {
    return (color = value);
  }
  console.log("PAGE", page);
  const options = {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  };
  function getResult() {
    let params = `?query=${search}&per_page=3&color=${color}$page=${page}`;
    let url = baseUrl + endPoint + params;
    console.log("Linked Result", page);
    console.log(url);
    fetch(url, options)
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        let condition =
          Math.ceil(result.total_results / result.per_page) === result.page;
        if (condition) {
          hiddenButton.classList.add("hiddenButton");
        } else {
          hiddenButton.classList.remove("hiddenButton");
        }
        // console.log(condition);
        return result.photos;
      })
      .then((data) => {
        console.log(data);
        const markup = data
          .map((elem) => {
            // console.log(elem);
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

  return { setPage, getResult, setColor, setSearch };
}
const x = getFetch();
console.log(x);
pexelsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  galleryId.innerHTML = "";
  let search = event.target.elements.search.value.toLowerCase();
  x.setSearch(search);

  let color = event.target.elements.color.value;
  x.setColor(color);
  // console.log(color);
  // console.log(search);
  x.getResult();
  event.target.reset();
});
// функция создания эллемента
function createElement(src, alt) {
  return `<li><img src="${src}"alt="${alt}"</li>`;
}
// функция встраивания в эллемент
function innerElement(place, element) {
  if (typeof element === "string") {
    place.insertAdjacentHTML("afterbegin", element);
  } else if (!element) {
    place.insertAdjacentHTML("afterbegin", "<p>нечего отрисовать</p>");
  } else {
    place.insertAdjacentElement("afterbegin", element);
  }
}
hiddenButton.addEventListener("click", () => {
  console.log("click");
  x.setPage();
  x.getResult();
});
