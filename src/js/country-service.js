
import articleListItemTamplate from "../templates/article-list-item.hbs";
import countryList from "../templates/item-coutries.hbs";
import fetchCountry from "./services/services";
import { debounce } from "debounce";



const refs = {
  searchInput: document.querySelector(".js-search-input"),
  articleList: document.querySelector(".article-list"),
  boxCountry: document.querySelector(".list-country")

};
refs.searchInput.addEventListener("input", debounce(searchInputValue, 500));

function searchInputValue(e) {
  const input = e.target.value; 
  generalFetch(input) 
};

function insertListItems(items) {
  const markup = articleListItemTamplate(items);
  refs.articleList.insertAdjacentHTML("beforeend", markup)
};
function insertList(item){
  const markup = countryList(item);
  refs.boxCountry.insertAdjacentHTML('afterbegin', markup)
}

function clearListItems() {
  refs.articleList.innerHTML = '';
  refs.boxCountry.innerHTML = ""
};

function reanderCountry (country){
if(country.length >=2 && country.length<=10 ){
  insertListItems(country)
} else if(country.length === 1){
  insertList(country)
} else if (country.length>10){
  alert("Nooooo!")
} else{
  alert("IO")
}
};

function generalFetch (countryName) {
  clearListItems();
  if (countryName === "")
  {
    return;
  }
fetchCountry(countryName)
.then(countries=>reanderCountry(countries))
.catch(error=>console.warn(console.error));
};




// function searchFormSubmit(e) {
//   e.preventDefault();
//   const input = e.target.value; 
//   clearListItems();
//   fetchCountry(input)
//   .then(country => {
//     insertListItems(country)
//   }); 
// };