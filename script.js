console.log("Week 4 - class assignment");

const orderFoodFromDifferentRestaurants = (restaurantName, foodName, amountOfFood) => `You are ordering ${amountOfFood} ${foodName} from ${restaurantName}`;

console.log(orderFoodFromDifferentRestaurants("Omo's Pizza", "Chicken Pizza", 5));

// **************

// A. Create 3 HTML element divs
// a. Add some text to 

const first_div_element = document.getElementById("first_div");

// Not working
// Can get only array of Elements - can not apply style on this fetched variable.
// const second_div_element = document.getElementsByClassName("second_div");

// Working - to apply background color on the element
const second_div_element = document.querySelector(".second_div");

// Not working
// Can get only array of Elements - can not apply style on this fetched variable.
// const third_div_element = document.getElementsByTagName("div");

// Working - grabbin the first div
// const third_div_element = document.querySelector("div");
const third_div_element = document.querySelectorAll("div")[2];

const read_more_button_element = document.getElementById("read_more_button");

console.log(first_div_element);
// first_div_element.innerHTML = "Test changing content";

console.log(second_div_element);
console.log(third_div_element);
console.log(read_more_button_element);

read_more_button_element.setAttribute("disabled", true);

first_div_element.style.height = "100px";
first_div_element.style.width = "300px";
first_div_element.style.border = "2px solid red";
first_div_element.style.backgroundColor = "coral";

second_div_element.style.height = "100px";
second_div_element.style.width = "300px";
second_div_element.style.border = "2px solid green";
second_div_element.style.backgroundColor = "#87365e";

third_div_element.style.height = "100px";
third_div_element.style.width = "300px";
third_div_element.style.border = "2px solid blue";
third_div_element.style.backgroundColor = "#00ff95";

const createDivElement = document.createElement("div");
const node = document.createTextNode("This is new.");
const createPElement = document.createElement("p");
// document.appendChild(createDivElement);
first_div_element.appendChild(createPElement);
createPElement.textContent = "New Element";
