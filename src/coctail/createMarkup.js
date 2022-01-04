import createCoctails from "../temlates/coctails.hbs";
import { getFetch } from "./fetch.js";

document.getElementById("coctailForm").addEventListener("submit", (event) => {
  //останавливаем дефолтные события браузера
  event.preventDefault();
  //получаем значение из инпута формы
  let coctail = event.target.elements.search.value;
  console.log(coctail);
  //делаем запрос и получаем данные из инпута
  getFetch(coctail).then((data) => {
    console.log(data.drinks);
    //получили данные из запроса и передали их в функцию шаблонизатор
    let markup = createCoctails(data.drinks);
    console.log(markup);
    //встраиваем созданную шаблонизатором разметку
    document
      .getElementById("coctails")
      .insertAdjacentHTML("afterbegin", markup);
  });
});
// console.log(createCoctails);
