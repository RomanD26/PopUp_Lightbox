

const phoneInputs = document.querySelectorAll('input[data-tel-input]');

// функция фильтрует ввод и возвращает только числа
let getInputNumbersValue = function (input) {
	return input.value.replace(/\D/g, '');
}

// функция срабатывает при вставке копированием
let onPhonePaste = function (e) {
	let input = e.target,
	inputNumbersValue = getInputNumbersValue(input);
	let pasted = e.clipboardData || window.clipboardData;
	if (pasted) {
		let pastedText = pasted.getData('Text');
		if (/\D/g.test(pastedText)) {
		// Попытка вставить нечисловой символ — удалит все нечисловые символы,
			input.value = inputNumbersValue;
			return;
		}
	}
}

let onPhoneInput = function (e) {
	let input = e.target,
	inputNumbersValue = getInputNumbersValue(input), // сохраняем значения инпута в переменную
	selectionStart = input.selectionStart,
	formattedInputValue = "";

	if (!inputNumbersValue) input.value = "";

	if (input.value.length != selectionStart) {
		// Редактирование в середине ввода
		if (e.data && /\D/g.test(e.data)) {
			// Попытка ввода нечислового символа
			input.value = inputNumbersValue;
	}
	return;
}

// логика маски
if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
	if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
		let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
		formattedInputValue = input.value = firstSymbols + " ";
		if (inputNumbersValue.length > 1) {
			formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
		} 
		if (inputNumbersValue.length >= 5) {
			formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
		}
		if (inputNumbersValue.length >= 8) {
			formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
		}
		if (inputNumbersValue.length >= 10) {
			formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
		}
	} else {
		formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
	}
	input.value = formattedInputValue;
}

let onPhoneKeyDown = function (e) {
// Очистить ввод при удаления последнего символа
	let inputValue = e.target.value.replace(/\D/g, '');
	if (e.keyCode == 8 && inputValue.length == 1) e.target.value = "";
}

// Обходим все inputs и вешаем обработчик события
for (let phoneInput of phoneInputs) {
	phoneInput.addEventListener('keydown', onPhoneKeyDown);
	phoneInput.addEventListener('input', onPhoneInput, false);
	phoneInput.addEventListener('paste', onPhonePaste, false);
}

// keydown — отслеживаются нажатия клавиш Backspace и Delete — с целью изменения текущей маски ввода перед тем как основной обработчик удалит один символ из текста.
// paste, input — вставка текста из буфера обмена. Перед передачей обработки производится подбор маски ввода для строки, получившейся в результате вставки текста из буфера обмена.
