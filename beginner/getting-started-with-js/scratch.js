// Loops

// let colors = ["red", "blue", "green"];

// // Classic for loop
// for (let i = 0; i < colors.length; i++) {
// 	console.log(colors[i]);
// }

// // For of loop, variable of iterable, kinda like python
// for (let color of colors) {
// 	console.log(color);
// }

// // While loop, no initial value, no increment,
// // this one runs in reverse idx order because of pop
// while (colors.length > 0) {
// 	let color = colors.shift();
// 	console.log(color);
// }

// Functions
// A piece of code you can run multiple times, can add parameters as input if defined

function hello(name = "Test") {
	console.log(`Hello, ${name}`);
}

hello("Jovan");
