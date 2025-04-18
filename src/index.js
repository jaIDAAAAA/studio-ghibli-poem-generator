function showPoem(response) {
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 10,
		cursor: "",
	});
}

function makePoem(event) {
	event.preventDefault();
	let instructionsInput = document.querySelector("#user-instructions");

	let apiKey = "006e1d3aa42ft5cc55o041daac8db188";
	let context =
		"you are an inspirational poet who loves to write. Your instructions are to create a four-line poem about Studio Ghibli movies in basic HTML. Do not add a title. Please follow the user instructions";
	let prompt = `User instructions: Create a poem inspired by ${instructionsInput.value}`;

	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

	console.log("Making poem");
	console.log(`Prompt: ${prompt}`);
	console.log(`Context: ${context}`);

	axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", makePoem);
