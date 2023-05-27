// Course solution used, I spent a hour just on the JS with no luck, was overcomplicating it.  My HTML/CSS was perfect though, replaced with course solution for so that JS would work out of box

let runningTotal = 0;
let buffer = '0';
let previousOperator;
const screen = document.querySelector('.screen');

function buttonClick(value) {
	// Succinct way to check if a variable is a number
	if (isNaN(parseInt(value))) {
		handleSymbol(value);
	} else {
		handleNumber(value);
	}
	// Rerender function updates the calculator display
	rerender();
}

function handleNumber(value) {
	if (buffer === '0') {
		buffer = value;
	} else {
		buffer += value;
	}
}

function handleMath(value) {
	if (buffer === '0') {
		// do nothing
		return;
	}

	const intBuffer = parseInt(buffer);
	if (runningTotal === 0) {
		runningTotal = intBuffer;
	} else {
		flushOperation(intBuffer);
	}

	previousOperator = value;

	buffer = '0';
}

function flushOperation(intBuffer) {
	if (previousOperator === '+') {
		runningTotal += intBuffer;
	} else if (previousOperator === '-') {
		runningTotal -= intBuffer;
	} else if (previousOperator === '×') {
		runningTotal *= intBuffer;
	} else {
		runningTotal /= intBuffer;
	}
}

function handleSymbol(value) {
	switch (value) {
		case 'C':
			buffer = '0';
			runningTotal = 0;
			break;
		case '=':
			if (previousOperator === null) {
				// need two numbers to do math
				return;
			}
			flushOperation(parseInt(buffer));
			previousOperator = null;
			buffer = +runningTotal;
			runningTotal = 0;
			break;
		case '←':
			// Ternary way of doing it, not my preference but was curious if I could remember syntax
			buffer.length === 1 ? (buffer = '0') : (buffer = buffer.substring(0, buffer.length - 1));
			break;
		case '+':
		case '-':
		case '×':
		case '÷':
			handleMath(value);
			break;
	}
}

function rerender() {
	screen.innerText = buffer;
}

// Better way to init all functions, in this case just init for event listener
function init() {
	document.querySelector('.calc-buttons').addEventListener('click', function (event) {
		buttonClick(event.target.innerText);
	});
	// Added event listener for keyboard inputs like normal calculator, bit of code but works
	window.addEventListener('keydown', function (event) {
		let keyPressed = event.key;
		if (keyPressed === 'Enter') {
			keyPressed = '=';
			buttonClick(keyPressed);
		} else if (keyPressed === 'Backspace') {
			keyPressed = '←';
			buttonClick(keyPressed);
		} else if (keyPressed === 'Escape') {
			keyPressed = 'C';
			buttonClick(keyPressed);
		} else if (keyPressed === '*') {
			keyPressed = '×';
			buttonClick(keyPressed);
		} else if (keyPressed === '/') {
			keyPressed = '÷';
			buttonClick(keyPressed);
		} else {
			buttonClick(keyPressed);
		}
	});
}

init();
