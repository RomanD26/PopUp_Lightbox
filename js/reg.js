
let fonPopup = document.querySelector('.popup');
let openPopup = document.querySelector('.container__butt');
let closePopup = document.querySelector('.popup-close');

let fonForm = document.getElementById('forma');
let openForm = document.querySelector('.container__btn');
let closeForm = document.getElementById('close');

// форма регистрации
openPopup.addEventListener('click', (e) => {
	// e.preventDefault();
	fonPopup.classList.add('active');
});

closePopup.addEventListener('click', (e) => {
	fonPopup.classList.remove('active');
});

document.addEventListener('click', (e) => {
	if (e.target === fonPopup) {
		fonPopup.classList.remove('active');
	}
});

// Форма заказа звонка
openForm.addEventListener('click', (e) => {
	// e.preventDefault();
	fonForm.classList.add('show');
});

closeForm.addEventListener('click', () => {
	fonForm.classList.remove('show');
});

document.addEventListener('click', (e) => {
	if (e.target === fonForm) {
		fonForm.classList.remove('show');
	}
});
