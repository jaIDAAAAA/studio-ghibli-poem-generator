function makePoem(event) {
	event.preventDefault();

	new Typewriter("#poem", {
		strings: ["With the anger of San..."],
		autoStart: true,
		delay: 10,
		cursor: "",
	});
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", makePoem);
