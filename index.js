//1
import { result } from "./data.js";

//2 //3
const infoIsLS = localStorage.getItem("favorites");
const favorites = infoIsLS === null ? [] : JSON.parse(infoIsLS);
console.log(favorites);

//4
const getMovie = (id) => {
  const filmas = result.find((el) => el.id === id);
  console.log(filmas);
  return filmas;
};
getMovie(829280);

//5

const irasyti = (id) => {
  const myFavorites = {
    id: getMovie(id).id,
    title: getMovie(id).title,
  };
  console.log(myFavorites);
  const movieExistsInFavorites = favorites.find(
    (el) => el.id === myFavorites.id
  );
  if (movieExistsInFavorites) {
    console.log("movie already exist in favorites");
  } else {
    favorites.push(myFavorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log("movie added to favorites");
  }
};
irasyti(829280);

//6

const favFromLS = () => {
  const isLS = JSON.parse(localStorage.getItem("favorites"));
  console.log(isLS);

  isLS.forEach((el) => {
    console.log(`id: ${el.id}, title: ${el.title}`);
  });
};
favFromLS();

//7

const istrinti = (id) => {
  const isLS = JSON.parse(localStorage.getItem("favorites"));
  const rasti = isLS.findindex((movie) => movie.id === id);
  console.log(rasti);

  // if(findindex > -1){
  //     isLS.splice(findindex,1)
  //     console.log(`Filmas istrintas ${istLS[findindex -1]}`)
  // }
  // else{
  //     console.log("Filmas nerastas")
  // }
};
istrinti(829280);
