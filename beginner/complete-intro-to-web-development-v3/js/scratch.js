// Output to frontend - Basics
const resultOne = [];
const restultsContainerOne = document.getElementById('resultsOne');

// Output to frontend - Number, String, Boolean
const resultTwo = [];
const restultsContainerTwo = document.getElementById('resultsTwo');

function outputResults(item) {
	let resultItem = document.createElement('li');
	resultItem.textContent = item;
	return resultItem;
}

// JS Basics
const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;

resultOne.push(`Simple calculation = ` + yearlyRent);

let mango = 'tasty';
resultOne.push(`Changing a let variable = ` + mango);
mango = 'sour';
resultOne.push(`Changing a let variable = ` + mango);

// Output results by iterating the result array
resultOne.forEach((item) => {
	restultsContainerOne.appendChild(outputResults(item));
});

// Numbers, Strings, Booleans
let firstName = 'Connor';
resultTwo.push(`String = ` + firstName);

let lastName = 'Nel';
resultTwo.push(`String Concat = ` + firstName + ' ' + lastName);

let myString3 = 'Hello' + ' ' + 'World';
resultTwo.push(`String Concat Backquote = ${firstName} ${lastName}`);

let skyIsBlue = true;
resultTwo.push(`Is Sky Blue? = ` + skyIsBlue);

let pigsCanFly = false;
resultTwo.push(`Can pigs fly? = ` + pigsCanFly);

let number = 51223458533;
resultTwo.push(`Number integer = ` + number);

let numberTwo = 3.1415;
resultTwo.push(`Number float = ` + numberTwo);

resultTwo.forEach((item) => {
	restultsContainerTwo.appendChild(outputResults(item));
});
