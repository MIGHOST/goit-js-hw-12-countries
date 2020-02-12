
import articleListItemTamplate from "../templates/article-list-item.hbs"
import fetchCountry from "./services/services"
console.log(fetchCountry())

const refs = {
  searchForm: document.querySelector("#search-form"),
  articleList: document.querySelector("#article-list"),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]')
};
refs.searchForm.addEventListener("submit", searchFormSubmit);


function searchFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const input = form.elements.query; 
  newsService.searchQuery = input.value;
  newsService.fetchCountry().then(country=>insertListItems(country));
  input.value = ""; 
};


function insertListItems(item) {
const markup = articleListItemTamplate(country)
  refs.articleList.insertAdjacentHTML("beforeend", markup)
}

