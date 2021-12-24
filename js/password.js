
let passwordOne = document.getElementById('popup__password-one');
let passwordTwo = document.getElementById('popup__password-two');

function showPassword(e) {
	let input = document.getElementById('popup__password');
	if (input.getAttribute('type') == 'password') {
		e.target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		e.target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
}

function showPasswordDubl(e) {
	let inputDubl = document.getElementById('popup__password-dubl');
	if (inputDubl.getAttribute('type') == 'password') {
		e.target.classList.add('view');
		inputDubl.setAttribute('type', 'text');
	} else {
		e.target.classList.remove('view');
		inputDubl.setAttribute('type', 'password');
	}
}

passwordOne.addEventListener('click', showPassword);
passwordTwo.addEventListener('click', showPasswordDubl);
