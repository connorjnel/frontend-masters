// Output to frontend
const result = [];
const restultsContainer = document.getElementById('results');

function outputResults(item) {
	let resultItem = document.createElement('li');
	resultItem.textContent = item;
	return resultItem;
}

// JS Basics
const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;

result.push(`Simple calculation = ` + yearlyRent);

let mango = 'tasty';
result.push(`Changing a let variable = ` + mango);
mango = 'sour';
result.push(`Changing a let variable = ` + mango);

result.forEach((item) => {
	restultsContainer.appendChild(outputResults(item));
});
