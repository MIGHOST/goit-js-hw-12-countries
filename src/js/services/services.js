
const baseUrl = "https://restcountries.eu/rest/v2/name/";


export default function fetchCountry (name) {
    const requestParams = `${name}`;
    return fetch(baseUrl + requestParams)
    .catch(console.error());
}

