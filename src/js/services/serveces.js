
const baseUrl = "https://newsapi.org/v2/everything";


export default{ 
page:1,
fetchArticle(query){
    const options = {
        headers: {
            Authorization:"045783fcfda7444d92c28c4011f33205",
        },
    };
    const requestParams = `?q=${query}&page=${this.page}`;
    return fetch(baseUrl + requestParams, options)
    .then(response => response.json())
    .then(parseResponse=> parseResponse.articles)
  
},
};