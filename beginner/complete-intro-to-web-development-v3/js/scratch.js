// Output to frontend - Basics
const resultOne = [];
const restultsContainerOne = document.getElementById('resultsOne');

// Output to frontend - Number, String, Boolean
const resultTwo = [];
const restultsContainerTwo = document.getElementById('resultsTwo');

// Output to frontend - Control Flow
const resultThree = [];
const restultsContainerThree = document.getElementById('resultsThree');

// Output to frontend - Loops
const resultFour = [];
const restultsContainerFour = document.getElementById('resultsFour');

// Output to frontend - Loops Exercise
const resultFive = [];
const restultsContainerFive = document.getElementById('resultsFive');

// Function that outputs to frontend
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

// Control Flow
let skyColor = 'Blue';
if (skyColor === 'Blue') {
	resultThree.push('Sky is blue');
} else {
	resultThree.push('Sky is not blue');
}

resultThree.forEach((item) => {
	restultsContainerThree.appendChild(outputResults(item));
});

// Loops
let friendsAtYourParty = 0;
friendsAtYourParty = friendsAtYourParty + 1;
while (friendsAtYourParty < 10) {
	friendsAtYourParty = friendsAtYourParty + 1;
}
resultFour.push(friendsAtYourParty);

for (let i = 0; i <= 3; i++) {
	resultFour.push(i);
}

let fruit = ['Mango', 'Orange', 'Apple', 'Peach'];
let fruitText = '';
for (let i = 0; i < fruit.length; i++) {
	fruitText = fruit[i];
	resultFour.push(fruitText);
}

resultFour.forEach((item) => {
	restultsContainerFour.appendChild(outputResults(item));
});

// Loops Exercise

resultFive.forEach((item) => {
	restultsContainerFive.appendChild(outputResults(item));
});
