const API_KEY = "api_key=274808d92789c49e637a022e855f63dd";
const BASE_URL = "https://api.themoviedb.org/3";

const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY; //most popular movies
//přidáno &
const searchURL = BASE_URL + "/search/movie?" + API_KEY; //k tomuto potřeba přidat "&query=hledanyNazev"
//např. https://api.themoviedb.org/3/search/movie?api_key=274808d92789c49e637a022e855f63dd&query=potter
function getMovies(url) {
  fetch(url)
    .then((res) => res.json)
    .then((data) => {
      console.log(data);
    });
}
