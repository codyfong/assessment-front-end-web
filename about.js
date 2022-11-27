console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully.');
}

function handleCatMouse(evt) {
	// evt.preventDefault();
	alert('Cat says user is cool')
}

{/* <img onmouseover="bigImg(this)" src="cat.jpg" alt="Smiley"></img> */}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);