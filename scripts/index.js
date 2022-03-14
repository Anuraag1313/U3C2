let url = "https://masai-food-api.herokuapp.com/api/meals/india";

//let dataPromise = fetch(url);

// dataPromise
// .then (function(response) {
//     return response.json();
// })
// .then (function (response) {
//     console.log (response);
// })
let data;
async function getData () {
    let response = await fetch (url);
    data = await response.json();
    console.log(data[0]["meals"]);
    data = data[0]["meals"];
    data = JSON.stringify(data);
    localStorage.setItem("cart", data);
}

getData();



