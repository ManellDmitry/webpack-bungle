export function getFetch(coctail) {
  let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctail}`;

  return fetch(url)
    .then((responce) => {
      // console.log(responce);
      return responce.json();
    })
    .then((data) => {
      // console.log(data);
      return data;
    });
}
