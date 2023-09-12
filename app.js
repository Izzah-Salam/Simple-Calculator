const buttonsEl = document.querySelectorAll("button");
const inputScreen = document.querySelector(".screen");

for (let i = 0; i < buttonsEl.length; i++) {
	buttonsEl[i].addEventListener("click", () => {
		const btnValue = buttonsEl[i].textContent;
		if (btnValue === "C") {
			clearResult();
		} else if (btnValue === "=") {
			calculateResult();
		} else {
			AppendValue(btnValue);
		}
	});
}

function clearResult() {
	inputScreen.value = "";
}

function calculateResult() {
	inputScreen.value = eval(inputScreen.value);
}

function AppendValue(btnValue) {
	inputScreen.value += btnValue;
}
