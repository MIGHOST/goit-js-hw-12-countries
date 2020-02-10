import newsService from "./services/serveces"
import articleListItemTamplate from "../templates/article-list-item.hbs"


const refs = {
    searchForm: document.querySelector("#search-form"),
    articleList: document.querySelector("#article-list")
};
refs.searchForm.addEventListener("submit", searchFormSubmit)
function searchFormSubmit (e){
e.preventDefault ();
const searchQuery = e.currentTarget.elements.query.value;
console.log(searchQuery);
newsService.fetchArticle(searchQuery).then(articles=> {
    console.log(articles);
const markup = buildListItemMarkup(articles);
insertListItems(markup)
});
};

function insertListItems(items){
    refs.articleList.insertAdjacentHTML("beforeend", items)
}

function buildListItemMarkup(items){
return articleListItemTamplate(items)
};