// import moduleObj from "../src/templates/swapi-table-row.hbs";

// const tableBody = document.querySelector("table")
// console.log(moduleObj)
// const baseUrl = "https://swapi.co/api/";
// fetch(baseUrl).then(response => {
//     console.log(response);
//     return response.json()
// }
//     ).then(data => {
//         console.log(data)
//     }
//         );

// fetch("https://swapi.co/api/planets/").then(
//     response => {
//         return response.json()
//     }
// ).then(
//     data=> {
//        const markup = data.results.map(planet  => moduleObj(planet)).join('');
//        console.log(markup);
//        tableBody.insertAdjacentHTML("beforeend", markup)
//     }
// )


// fetch("https://swapi.co/api/starships/").then(
//     response => {
//         return response.json()
//     }
// ).then(
//     data=> {
//         console.log(data)
//     }
// )
