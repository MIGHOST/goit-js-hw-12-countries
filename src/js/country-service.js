
import articleListItem from "../templates/article-list-item.hbs";
import countryList from "../templates/item-countries.hbs";
import fetchCountry from "./services/services";
import { debounce } from "debounce";
import PNotify from 'pnotify/dist/es/PNotify';;
import PNotifyButtons from 'pnotify/dist/es/PNotifyStyleMaterial';

const refs = {
  searchInput: document.querySelector(".js-search-input"),
  articleList: document.querySelector(".article-list"),
  boxCountry: document.querySelector(".list-country")
};

refs.searchInput.addEventListener("input", debounce(searchInputValue, 500));

function searchInputValue(e) {
  const input = e.target.value; 
  generalFetch(input);
  console.log(input)
  
};

function insertListItems(items) {
  const markup = articleListItem(items);
  refs.articleList.insertAdjacentHTML("beforeend", markup)
};
function insertList(item){
  const markup = countryList(item);
  refs.boxCountry.insertAdjacentHTML('afterbegin', markup)
}

function clearListItems() {
  refs.articleList.innerHTML = '';
  refs.boxCountry.innerHTML = "";
};

function renderCountry (country){
if(country.length >=2 && country.length<=10 ){
  insertList(country)
  
} else if(country.length === 1){
  insertListItems(country);
} else if (country.length>10){
  PNotify.error({
    title: 'Desktop Error',
    text: 'Too many matches found. Please enter a more specific query',
    delay: 5000,        
  });
} else{
  PNotify.error({
    title: 'Desktop Error',
    text: 'Can not found you query',
    delay: 5000   
  });
}
console.log(country)
};

function generalFetch (countryName) {
  clearListItems();
  if (countryName === "")
  {
    return;
  }
fetchCountry(countryName)
.then(countries=>{renderCountry(countries)
console.log(countries)})
.catch(error=>console.warn(console.error));
};