// // Impoting JSON from file, dont use module import, so many issues
// // fetch("./scratch.json")
// // 	.then((response) => response.json())
// // 	.then((json) => console.log(json, "- First"));

// // pretend this came from a server instead of me just declaring it here.
// const responseFromServer = `{"name": "Luna","age": 10,"breed": "Havanese","location": {"city":"Seattle","state": "WA"}}`;

// console.log(responseFromServer); // a string

// const responseObject = JSON.parse(responseFromServer);

// console.log(responseObject.name); // just the name
// console.log(responseObject.location.city); // just the city
// console.log(responseObject); // the whole object
// console.log(responseObject.cute);

// const dog = {
// 	name: "Luna",
// 	age: 10,
// 	breed: "Havanese",
// 	location: {
// 		city: "Seattle",
// 		state: "WA",
// 	},
// };

// const objString = JSON.stringify(dog);
// console.log(objString);

// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const doggos = document.getElementById("dog-target");

// function addNewDoggo() {
// 	const promise = fetch(DOG_URL);
// 	promise
// 		.then(function (response) {
// 			const processingPromise = response.text();
// 			return processingPromise;
// 		})
// 		.then(function (processedResponse) {
// 			const dogObject = JSON.parse(processedResponse);
// 			const img = document.createElement("img");
// 			img.src = dogObject.message;
// 			img.alt = "Cute doggo";
// 			doggos.appendChild(img);
// 		});
// }

// document.getElementById("dog-btn").addEventListener("click", addNewDoggo);

// // Custom written with async setting background image to random dog from api

// async function addDoggo() {
// 	let url = "https://dog.ceo/api/breeds/image/random";
// 	try {
// 		let response = await fetch(url);
// 		return await response.json();
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// async function trial() {
// 	let data = await addDoggo();
// 	console.log(data.message);
// 	document.body.style.backgroundImage = `url("${data.message}")`;
// 	document.body.style.backgroundRepeat = "no-repeat";
// 	document.body.style.backgroundSize = "cover";
// }

// // trial();

// Async await

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

async function addNewDoggo() {
	const promise = await fetch(DOG_URL);
	const processedResponse = await promise.json();
	const img = document.createElement("img");
	img.src = processedResponse.message;
	img.alt = "Cute doggo";
	doggos.appendChild(img);
}

document.getElementById("dog-btn").addEventListener("click", addNewDoggo);
