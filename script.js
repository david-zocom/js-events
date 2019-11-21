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

	let mouseDivs = document.getElementsByClassName('mouse-events');
	let mouseDiv = mouseDivs[0];
	console.log('Preparing mouse events! ', mouseDiv);

	mouseDiv.addEventListener('click', mouseEventCallback);
	mouseDiv.addEventListener('mouseenter', mouseEventCallback);
	mouseDiv.addEventListener('mouseleave', mouseEventCallback);
	// mouseDiv.addEventListener('mousemove', mouseEventCallback);

	let inputKey = document.getElementById('inputKeyEvents');
	inputKey.addEventListener('keydown', keyEventCallback);
	inputKey.addEventListener('keypress', keyEventCallback);
	inputKey.addEventListener('keyup', keyEventCallback);

	let inputFocus = document.querySelector('#focusEvent');
	inputFocus.addEventListener('focus', e => {
		console.log('Focused!');
	})
	inputFocus.addEventListener('blur', e => {
		console.log('Blurred!');
	})

	let inputChange = document.querySelector('#changeEvent');
	inputChange.addEventListener('change', e => {
		console.log(`Input CHANGED. value=${e.target.value}.`, e);
	})
}


function mouseEventCallback(event) {
	console.log('A mouse event has occurred!', event.type);//, event);
}

function keyEventCallback(event) {
	console.log(`A key event occurred. Type: ${event.type}, key: ${event.key}.`);
}











//
