// Loops

let colors = ["red", "blue", "green"];

// Classic for loop
for (let i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

// For of loop, variable of iterable, kinda like python
for (let color of colors) {
	console.log(color);
}

// While loop, no initial value, no increment,
// this one runs in reverse idx order
while (colors.length > 0) {
	let color = colors.pop();
	console.log(color);
}
