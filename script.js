const nameInput = document.getElementById("name");
nameInput.addEventListener("input", () => {
	const nameValue = nameInput.value.trim();
	const nameRegex = /^[A-Za-z\s\-'\.]{2,}$/;

	const errorDisplay = nameInput.nextElementSibling;

	if (nameValue === "") {
		errorDisplay.innerText = "Name cannot be blank";
		nameInput.style.backgroundColor = "#f193da";
	} else if (nameRegex.test(nameValue)) {
		errorDisplay.innerText = "";
		nameInput.style.backgroundColor = "#a6e44e";
	} else {
		errorDisplay.innerText = "Invalid name format";
		nameInput.style.backgroundColor = "#f193da";
	}
});

const emailInput = document.getElementById("email");

emailInput.addEventListener("input", validateEmail);

function validateEmail() {
	const emailValue = emailInput.value.trim();

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const errorDisplay = emailInput.nextElementSibling;

	if (emailValue === "") {
		errorDisplay.innerText = "Email cannot be blank";
		emailInput.style.backgroundColor = "#f193da";
	} else if (emailRegex.test(emailValue)) {
		errorDisplay.innerText = "";
		emailInput.style.backgroundColor = "#a6e44e";
	} else {
		errorDisplay.innerText = "Invalid email format";
		emailInput.style.backgroundColor = "#f193da";
	}
}

const cardInput = document.getElementById("card");

cardInput.addEventListener("input", () => {
	const cardValue = cardInput.value.trim().replace(/\s/g, "");
	const errorDisplay = cardInput.nextElementSibling; 

	let sum = 0;
	let shouldDouble = false;
	for (let i = cardValue.length - 1; i >= 0; i--) {
		let digit = parseInt(cardValue[i]);
		if (shouldDouble) {
			digit *= 2;
			if (digit > 9) digit -= 9;
		}
		sum += digit;
		shouldDouble = !shouldDouble;
	}
	const isValidCard = sum % 10 === 0;

	const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
	const masterCardPattern = /^5[1-5][0-9]{14}$/;
	const amexPattern = /^3[47][0-9]{13}$/;

	let cardType = null;
	if (visaPattern.test(cardValue)) cardType = "Visa";
	else if (masterCardPattern.test(cardValue)) cardType = "MasterCard";
	else if (amexPattern.test(cardValue)) cardType = "American Express";

	
	if (!isValidCard) {
		errorDisplay.textContent = "Invalid card number.";
		cardInput.style.backgroundColor = "#f193da";
	} else if (!cardType) {
		errorDisplay.textContent = "Please enter Visa, MasterCard or American Exress.";
		cardInput.style.backgroundColor = "#f193da";
	} else {
		cardInput.style.backgroundColor = "#a6e44e";
	}
});

const holderInput = document.getElementById("holder");
holderInput.addEventListener("input", () => {
	const holderValue = holderInput.value.trim();
	const holderRegex = /^[A-Za-z\s\-'\.]{2,}$/;

	const errorDisplay = holderInput.nextElementSibling;

	if (holderValue === "") {
		errorDisplay.innerText = "Card holder cannot be blank";
		holderInput.style.backgroundColor = "#f193da";
	} else if (holderRegex.test(holderValue)) {
		
		errorDisplay.innerText = "";
		holderInput.style.backgroundColor = "#a6e44e";
	} else {
		errorDisplay.innerText = "Invalid name format";
		holderInput.style.backgroundColor = "#f193da";
	}
});


const sendEmail = () => {
    let params = {
        name: document.getElementById("name").value, 
        email: document.getElementById("email").value, 
    };

    emailjs
			.send("test@dn-uk.com ", "template_kh891d1", params)
			.then(
				alert("Your information was sent successfully!"));
			
};