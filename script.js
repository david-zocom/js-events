// när man klickar på knappen ska det visas information om ett DOM element i konsolen
// 1. välja ut elementet (använda #infoButton)
// 2. spara det i en variabel
// 3. registrera en funktion som ska anropas när man klickar på knappen
// 4. inuti funktionen: console.log

console.log('JavaScript is executing');

window.addEventListener('load', whenLoaded);

function whenLoaded() {
	let infoButton = document.getElementById('infoButton');
	infoButton.addEventListener('click', whenInfoClick);

	let el = document.querySelector('ul');

	function whenInfoClick(event) {
		console.log('You clicked the info button!');
		console.log('Here is the list: ');
		console.log(el.innerText);
		console.log(el.children);
	}
}














//
