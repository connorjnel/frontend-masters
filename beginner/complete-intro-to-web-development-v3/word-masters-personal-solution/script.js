const boxes = document.querySelectorAll(".scoreboard-letter");

const wordOfTheDayURL = "https://words.dev-apis.com/word-of-the-day";
const validateCheckURL = "https://words.dev-apis.com/validate-word";

let answerWord = getWord(wordOfTheDayURL);
let guessWord = "";
let count = 0;
let gameResult;
let counter = 0;

async function getWord(wordOfTheDayURL) {
	let request = await fetch(wordOfTheDayURL);
	let response = await request.json();
	return (answerWord = response.word);
}

function isLetter(letter) {
	return /^[a-zA-Z]$/.test(letter);
}

function populateBoxes(validLetter) {
	boxes[count].innerText = validLetter;
	guessWord = guessWord + validLetter;
	count++;
}

function depopulateBoxes() {
	boxes[count - 1].innerText = "";
	count--;
	guessWord = guessWord.slice(0, -1);
	console.log(guessWord);
}

async function checkResult(guessWord) {
	const validation = await fetch(validateCheckURL, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ word: `${guessWord}` }),
	});
	const content = await validation.json();
	let validationCheck = content.validWord;
	paintResult(validationCheck);
}

function paintResult(validationCheck) {
	// Activate animation while waiting for result
	// Check guess word against valid word - compare?
	if (guessWord === answerWord) {
		alert("Winner Winner Chicken Dinner");
	}
	// Check guess letter against valid word - iterate over word or other string method
	compareLetters(guessWord, answerWord);
	// Paint boxes with corresponding color using css classes - add animation
	// If guess is correct play victory animation
	// if guess word is not correct move to next row of boxes - update count to start at 5 and call populateboxes
}

function compareLetters(guessWord, answerWord) {
	for (let index = counter; index < count; index++) {
		let charOne = guessWord[index];
		let charTwo = answerWord[index];

		if (charOne === charTwo) {
			boxes[index].classList.add("green");
		} else if (answerWord.includes(charOne)) {
			boxes[index].classList.add("yellow");
		} else {
			boxes[index].classList.add("red");
		}
	}
	counter = count - 5;
	clearWord();
}

function clearBoxStyle() {
	boxes.forEach((box) => {
		box.className = "scoreboard-letter";
	});
}

function checkLength() {
	if (guessWord.length == 4) {
		checkResult(guessWord);
	}
}

function clearWord() {
	guessWord = "";
}

// Keypress listeners
window.addEventListener("keydown", (event) => {
	checkLength();
	// uses the isLetter function from above
	if (isLetter(event.key)) {
		let validLetter = event.key;
		populateBoxes(validLetter);
		event.preventDefault();
	}
});

window.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		checkResult(guessWord);
		clearBoxStyle();
	}
});

window.addEventListener("keydown", (event) => {
	if (event.key === "Backspace" && count > 0) {
		depopulateBoxes();
		clearBoxStyle();
	}
});
