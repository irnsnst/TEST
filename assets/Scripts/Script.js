var log = document.getElementById("login");
var reg = document.getElementById("register");
var btn = document.getElementById("btn");
var box = document.querySelector(".form_box");

function register() {
	log.style.left = "-40rem";
	reg.style.left = "5rem";
	btn.style.left = "11rem";
	box.style.height = "90rem";
}

function login() {
	log.style.left = "5rem";
	reg.style.left = "45rem";
	btn.style.left = "0";
	box.style.height = "55rem";
}

const submitBtns = document.querySelectorAll('.submit_btn');
submitBtns.forEach(submitBtn => {
	submitBtn.addEventListener('click', function (e) {
		let x = e.clientX - e.target.getBoundingClientRect().left;
		let y = e.clientY - e.target.getBoundingClientRect().top;

		let ripples = document.createElement('span');
		ripples.style.top = y + 'px';
		ripples.style.left = x + 'px';
		this.appendChild(ripples);

		setTimeout(() => {
			ripples.remove()
		}, 1000);
	})
})


//User Name
let userNameInput = document.getElementById("user_name_input");
let userNameError = document.getElementById("user_name_error");
let userNameEmpty = document.getElementById("user_name_empty");

//Email
let emailInput = document.getElementById("email_input");
let emailError = document.getElementById("email_error");
let emailEmpty = document.getElementById("email_empty");

//Phone
let phoneInput = document.getElementById("phone_input");
let phoneError = document.getElementById("phone_error");
let phoneEmpty = document.getElementById("phone_empty");

//Password
let passwordInput = document.getElementById("password_input");
let passwordError = document.getElementById("password_error");
let passwordEmpty = document.getElementById("password_empty");
let showbtn = document.getElementById("showbtn");

//Submit
let regiterBtn = document.getElementById("submit_btn");

//Valid
let validCls = document.getElementsByClassName("valid");
let invalidCls = document.getElementsByClassName("error");


const textVerify = (text) => {
	const regex = /^[a-zA-Z]{3,}$/;
	return regex.test(text);
};

const emailVerify = (input) => {
	const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
	return regex.test(input);
};

const phoneVerify = (number) => {
	const regex = /^[0-9]{10}$/;
	return regex.test(number);
};


const passwordVerify = (password) => {
	const regex =
		/^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=\?\>\<])/;
	return regex.test(password) && password.length >= 8;
};

let vallowChar = document.getElementById('lowChar');
let valupChar = document.getElementById('upChar');
let valnumber = document.getElementById('number');
let valspeChar = document.getElementById('speChar');
let valeigChar = document.getElementById('eigChar');

function passwordvalidation(data) {
	const lowChar = RegExp('(?=.*[a-z])');
	const upChar = RegExp('(?=.*[A-Z])');
	const number = RegExp('(?=.*[0-9])');
	const speChar = RegExp('(?=.*[!@#\$%\^&\*])');

	if (lowChar.test(data)) {
		vallowChar.classList.add('valid');
	} else {
		vallowChar.classList.remove('valid');
	}

	if (upChar.test(data)) {
		valupChar.classList.add('valid');
	} else {
		valupChar.classList.remove('valid');
	}

	if (number.test(data)) {
		valnumber.classList.add('valid');
	} else {
		valnumber.classList.remove('valid');
	}

	if (speChar.test(data)) {
		valspeChar.classList.add('valid');
	} else {
		valspeChar.classList.remove('valid');
	}

	if (data.length >= 8) {
		valeigChar.classList.add('valid');
	} else {
		valeigChar.classList.remove('valid');
	}
}

showbtn.onclick = function () {
	if (passwordInput.value.length >= 1) {
		if (passwordInput.type === 'password') {
			passwordInput.setAttribute('type', 'text');
			showbtn.classList.remove("fa-eye")
			showbtn.classList.add("fa-eye-slash")
		} else {
			passwordInput.setAttribute('type', 'password');
			showbtn.classList.remove("fa-eye-slash")
			showbtn.classList.add("fa-eye")
		}
	}
}

const emptyUpdate = (inputReference, emptyErrorReference, otherErrorReference) => {
	if (!inputReference.value) {
		emptyErrorReference.classList.remove("hide");
		otherErrorReference.classList.add("hide");
		inputReference.classList.add("error");
	} else {
		emptyErrorReference.classList.add("hide");
	}
};

const errorUpdate = (inputReference, errorReference) => {
	errorReference.classList.remove("hide");
	inputReference.classList.remove("valid");
	inputReference.classList.add("error");
};

const validInput = (inputReference) => {
	inputReference.classList.remove("error");
	inputReference.classList.add("valid");
};

//User Name
userNameInput.addEventListener("input", () => {
	if (textVerify(userNameInput.value)) {
		userNameError.classList.add("hide");
		validInput(userNameInput);
	} else {
		errorUpdate(userNameInput, userNameError);
		emptyUpdate(userNameInput, userNameEmpty, userNameError);
	}
});

//Email
emailInput.addEventListener("input", () => {
	if (emailVerify(emailInput.value)) {
		emailError.classList.add("hide");
		validInput(emailInput);
	} else {
		errorUpdate(emailInput, emailError);
		emptyUpdate(emailInput, emailEmpty, emailError);
	}
});

//Phone
phoneInput.addEventListener("input", () => {
	if (phoneVerify(phoneInput.value)) {
		phoneError.classList.add("hide");
		validInput(phoneInput);
	} else {
		errorUpdate(phoneInput, phoneError);
		emptyUpdate(phoneInput, phoneEmpty, phoneError);
	}
});

passwordInput.addEventListener("input", () => {
	if (passwordVerify(passwordInput.value)) {
		passwordError.classList.add("hide");
		validInput(passwordInput);
		localStorage.setItem('password', passwordInput.value); 
		document.getElementById("password").textContent = passwordInput.value; 
	} else {
		errorUpdate(passwordInput, passwordError);
		emptyUpdate(passwordInput, passwordEmpty, passwordError);
	}
});

regiterBtn.addEventListener("click", function (event) {
	event.preventDefault();
	if (invalidCls.length == 0 && validCls.length == 9) {
		showvalPopup();
	} else {
		showerrorPopup();
	}
});



let Valpopup = document.getElementById("Valpopup");
let errorpopup = document.getElementById("errorpopup");

function showvalPopup() {
	Valpopup.classList.add("open_popup");
	localStorage.setItem('userName', userNameInput.value);
	localStorage.setItem('email', emailInput.value);
	localStorage.setItem('phone', phoneInput.value);
	localStorage.setItem('password', passwordInput.value);
};

function showerrorPopup() {
	errorpopup.classList.add("open_popup");
}

function closevalPopup() {
	Valpopup.classList.remove("open_popup");
	window.location.href = 'registration.html';
}

function closeerrorPopup() {
	Valpopup.classList.remove("open_popup");
	errorpopup.classList.remove("open_popup");
}


document.addEventListener("DOMContentLoaded", function () {
	const loginForm = document.getElementById("login");
	loginForm.addEventListener("submit", function (event) {
		event.preventDefault();
		window.location.href = "login.html";
	});
});


