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

// Output to frontend - Functions
const resultSix = [];
const restultsContainerSix = document.getElementById('resultsSix');

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

const timesToRepeat = 10;
const character = '🐶🐇';
let answer = '';

for (let i = 0; i < timesToRepeat; i++) {
	answer = `${answer + character}`;
}

resultFive.push(answer);

resultFive.forEach((item) => {
	restultsContainerFive.appendChild(outputResults(item));
});

// Functions

function greet(firstName, lastName, honorific, greeting) {
	return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

resultSix.push(greet('Brian', 'Holt', 'Lord', 'Salutations'));
resultSix.push(greet('Jack', 'Sparrow', 'Captain', 'A-hoy'));

// Ways to write functions
function bark() {
	resultSix.push('woof');
}

const meow = function () {
	resultSix.push('meeeeeeeow');
};

// the => is just = > put together, the font just combines them to one glyph
const chirp = () => {
	resultSix.push('chirp chirp');
};

bark();
meow();
chirp();

resultSix.forEach((item) => {
	restultsContainerSix.appendChild(outputResults(item));
});

// Scope

function addFive(number) {
	const someVariable = "you can't see me outside this function";
	return number + 5;
}

addFive(10);
// console.log(someVariable);

// Builtins

const sentence = 'ThIs HaS wEiRd CaSiNg On It';
const lowerCaseSentence = sentence.toLowerCase();
console.log(lowerCaseSentence);

let string = 'Hi my name is Jovan';
string = string.substring(3, 14);
console.log(string);

console.log(((Math.floor(Math.random() * 500) * Math.random()) / 3) * 10 - Math.PI);

const bday = new Date('August 19, 1975 23:15:30');
console.log(bday);

// Objects

const person = {
	name: 'Brian Holt',
	city: 'Seattle',
	state: 'WA',
	favoriteFood: '🌮',
	wantsTacosRightNow: true,
	numberOfTacosWanted: 100,
};
console.log(person);
console.log(person.name);
console.log(person['name']); // same as the line above; prefer using the other one

const person1 = {
	name: 'Angie',
	ageRange: '25-35',
};
const person2 = {
	name: 'Francesca',
	ageRange: '65-75',
};

function suggestMusic(person) {
	if (person.ageRange === '25-35') {
		console.log('We think you will like Daft Punk.');
	} else if (person.ageRange === '65-75') {
		console.log('You are obviously going to like Johnny Cash.');
	} else {
		console.log('Uh, maybe try David Bowie? Everyone likes David Bowie, right?');
	}
}

suggestMusic(person1);
suggestMusic(person2);

const dog = {
	name: 'dog',
	speak() {
		console.log('woof woof');
	},
};

dog.speak();

// Context

const me = {
	name: {
		first: 'Brian',
		last: 'Holt',
	},
	location: {
		streetNumber: 500,
		street: 'Fakestreet',
		city: 'Seattle',
		state: 'WA',
		zipCode: 55555,
		country: 'USA',
	},
	getAddress() {
		return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
	},
};

console.log(me.getAddress());

// Arrays

const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);

const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(' | '));
