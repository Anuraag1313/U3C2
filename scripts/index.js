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
    //console.log(data[0]["meals"]);
    data = data[0]["meals"];
    data = JSON.stringify(data);
    localStorage.setItem("cart", data);
}

getData();

var dataObj = localStorage.getItem("cart");
dataObj = JSON.parse(dataObj);



//console.log(dataObj[0]["strMealThumb"])


document.getElementById("item1").setAttribute("src", dataObj[0]["strMealThumb"]);
document.getElementById("item2").setAttribute("src", dataObj[1]["strMealThumb"]);
document.getElementById("item3").setAttribute("src", dataObj[2]["strMealThumb"]);
document.getElementById("item4").setAttribute("src", dataObj[3]["strMealThumb"]);
document.getElementById("item5").setAttribute("src", dataObj[4]["strMealThumb"]);
document.getElementById("item6").setAttribute("src", dataObj[5]["strMealThumb"]);
document.getElementById("item7").setAttribute("src", dataObj[6]["strMealThumb"]);
document.getElementById("item8").setAttribute("src", dataObj[7]["strMealThumb"]);
document.getElementById("item9").setAttribute("src", dataObj[8]["strMealThumb"]);
document.getElementById("item10").setAttribute("src", dataObj[9]["strMealThumb"]);
document.getElementById("item11").setAttribute("src", dataObj[10]["strMealThumb"]);
