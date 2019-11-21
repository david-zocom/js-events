// Do not trust the computer. Check that the functions really are executing, using console.log.
console.log('JavaScript is executing');

// whenLoaded should run after the page is fully loaded. Otherwise we will get NULL when we try to get DOM elements.
window.addEventListener('load', whenLoaded);

function whenLoaded() {
	// när man klickar på knappen ska det visas information om ett DOM element i konsolen
	// 1. välja ut elementet (använda #infoButton)
	// 2. spara det i en variabel
	// 3. registrera en funktion som ska anropas när man klickar på knappen
	// 4. inuti funktionen: console.log
	let infoButton = document.getElementById('infoButton');
	infoButton.addEventListener('click', whenInfoClick);

	let el = document.querySelector('ul');

	function whenInfoClick(event) {
		// When the button is clicked: display some properties of the <ul> element
		console.log('You clicked the info button!');
		console.log('Here is the list: ');
		console.log(el.innerText);
		console.log(el.children);
	}

	// Test mouse events
	let mouseDivs = document.getElementsByClassName('mouse-events');
	let mouseDiv = mouseDivs[0];
	console.log('Preparing mouse events! ', mouseDiv);

	mouseDiv.addEventListener('click', mouseEventCallback);
	mouseDiv.addEventListener('mouseenter', mouseEventCallback);
	mouseDiv.addEventListener('mouseleave', mouseEventCallback);
	// mouseDiv.addEventListener('mousemove', mouseEventCallback);
	// mousemove was commented out because it's too spammy

	// Test keyboard events
	// Make sure you learn the difference between KEYDOWN and KEYPRESS!
	let inputKey = document.getElementById('inputKeyEvents');
	inputKey.addEventListener('keydown', keyEventCallback);
	inputKey.addEventListener('keypress', keyEventCallback);
	inputKey.addEventListener('keyup', keyEventCallback);

	// Test focus and blur events. (Try the Tab and Shift+Tab keys)
	let inputFocus = document.querySelector('#focusEvent');
	inputFocus.addEventListener('focus', e => {
		console.log('Focused!');
	})
	inputFocus.addEventListener('blur', e => {
		console.log('Blurred!');
	})

	// Change events occur when the user changes the value of a form element. (input types: text, checkbox, radio for example)
	let inputChange = document.querySelector('#changeEvent');
	inputChange.addEventListener('change', e => {
		console.log(`Input CHANGED. value=${e.target.value}.`, e);
	})
}

// Moving functions out like this makes a cleaner structure. Try to avoid having a function in a function in a function...

function mouseEventCallback(event) {
	console.log('A mouse event has occurred!', event.type);
}

function keyEventCallback(event) {
	console.log(`A key event occurred. Type: ${event.type}, key: ${event.key}.`);
	const forbiddenLetters = 'åäö';
	if( forbiddenLetters.includes(event.key.toLowerCase()) ) {
		console.log('You are not allowed to type ' + forbiddenLetters);
		event.preventDefault();
	}
}


//
