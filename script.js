console.log("Week 9 - JS - Objects - Class Assignment");

const displayValueElement = document.querySelector(".display_value");

const displayHeadingOnAnHTMLElement = (value) => {
  let result = `<h2 class='display_heading'>${value}: </h2> <br />`;
  return displayValueElement.innerHTML += result;
};

const loopThroughObjectDisplayValueOnAnHTMLElement = (obj) => {
  // Slide 11/38
  for (let key in obj) {
    if (key === 'printOnConsole') {
      displayValueElement.innerHTML += `<p class='display_method_result'>Method - printOnConsole() - ${obj.printOnConsole()}</p> <br />`;
    }
    else if (key === 'logDishType') {
      displayValueElement.innerHTML += `<p class='display_method_result'>Method - logDishType() - ${obj.logDishType()}</p> <br />`;
    }
    else {
      displayValueElement.innerHTML += `<p class='display_result'>${key}: <span>${obj[key]}</span></p> <br />`;
    }
  }

  return displayValueElement.innerHTML;
};

// Slide 12/38
// Object
const person = {
  name: 'John',
  age: 34,
  hasPet: true,
  petName: 'Mushroom'
};

displayHeadingOnAnHTMLElement("Objects");
displayHeadingOnAnHTMLElement("Loop through 'person' object");
loopThroughObjectDisplayValueOnAnHTMLElement(person);

const personsName = person.name;

// Slide 13/38
const objectWithFunction = {
  name: 'Ada',
  age: 38,
  printOnConsole: function () {
    const personNameAndAge = `Person's name = ${this.name} & age = ${this.age}`;
    console.log("personNameAndAge: ", personNameAndAge);
    return personNameAndAge;
  }
};

objectWithFunction.printOnConsole();

displayHeadingOnAnHTMLElement("Loop through 'objectWithFunction' object");
loopThroughObjectDisplayValueOnAnHTMLElement(objectWithFunction);

// Slide 14/38
// Exercise - 1

// 1. Transform the database from array of arrays to an array of objects, with a key-value pair for each of the properties.
// 2. Add a "method" to one of the new dishes that console logs "I am a dish of type: [typeOfDish]". For a vegetarian dish, the function will log something like: "I am a dish of type: vegetarian".

// Slide 18/38
// Exercise - 2

// Intro: Your family owns a restaurant and you want to create a website for it. In the next slide you can find a database of your family’s restaurant menu.
// 1. Transform the database from array of arrays to an array of objects, with a key-value pair for each of the properties.
// 2. Add a “method” to one of the new dishes that console logs “I am a dish of type: [typeOfDish] ”. For a vegetarian dish, the function will log something like: ‘I am a dish of type: vegetarian’.

const menuDatabase = [
  ["Papadum", 20, "vegetarian"],
  ["Pakora", 50, "meat"],
  ["Tandoori Chicken", 60, "meat"],
  ["Samosa", 50, "vegetarian"],
  ["Butter Chicken", 139, "meat"],
  ["Chicken Korma", 129, "meat"],
  ["Chicken Vindaloo", 149, "meat"],
  ["Saag Lamb", 130, "meat"],
  ["Lamb Tikka Masala", 159, "meat"],
  ["Yellow Daal Tadka", 119, "vegetarian"],
  ["Biryani", 129, "vegetarian"],
  ["Gulab Jamun", 55, "dessert"],
  ["Mango Kulfi", 35, "dessert"],
  ["Rasmalai", 60, "dessert"],
];

displayHeadingOnAnHTMLElement("menuDatabase - array of arrays");
loopThroughObjectDisplayValueOnAnHTMLElement(menuDatabase);

// 1. Transform the database from array of arrays to an array of objects, with a key-value pair for each of the properties.
let menuDatabaseArrayOfObjects = {};

function convertArrayOfArraysToArrayOfObjects(arr) {
  menuDatabaseArrayOfObjects = arr.map(item => {
    let [name, price, type] = item;

    let result = {
      dishName: name,
      dishPrice: price,
      dishType: type,

      // 2. Add a “method” to one of the new dishes that console logs “I am a dish of type: [typeOfDish] ”. For a vegetarian dish, the function will log something like: ‘I am a dish of type: vegetarian’
      logDishType() {
        const typeOfDish = `'${name}' is a dish of type: ${type}`;
        console.log("typeOfDish: ", typeOfDish);
        return typeOfDish;
      }
    };

    loopThroughObjectDisplayValueOnAnHTMLElement(result);

    return result;
  });

  return menuDatabaseArrayOfObjects;
}

displayHeadingOnAnHTMLElement("menuDatabase - array of objects - using 'convertArrayOfArraysToArrayOfObjects'");

const menuDatabaseConvertedToArrayOfObjects = convertArrayOfArraysToArrayOfObjects(menuDatabase);
console.log(`menuDatabaseConvertedToArrayOfObjects: ${JSON.stringify(menuDatabaseConvertedToArrayOfObjects)} & type of - ${typeof menuDatabaseConvertedToArrayOfObjects}`);
