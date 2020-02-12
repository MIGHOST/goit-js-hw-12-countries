
const baseUrl = "https://restcountries.eu/rest/v2/name/";


export default function fetchCountry (queryText) {
    const requestParams = `${queryText}`;
    return fetch(baseUrl + requestParams)
    .then(response => response.json())  
    .catch(error => console.warn(error));
}

