//Дано трехзначное число.
// 1) Определить является ли четной сумма его цифр.
// 2) Определить, кратна ли сумма его цифр пяти.
// 3) Определить является ли произведение его цифр больше 100.
let number = parseInt(prompt("Введите число от 100 до 999"));

let firstNumber = parseInt(number / 100 % 10);
let secondNumber = parseInt(number / 10 % 10);
let thirdNumber = number % 10;

let sum = firstNumber + secondNumber + thirdNumber;
let mult = firstNumber * secondNumber * thirdNumber;

if (999 < number || number < 100) {
    document.write("<p>Было введено не трехзначное число</p>");
}
document.write(`<p>${number}</p>`);
document.write(`<p>${firstNumber}</p>`);
document.write(`<p>${secondNumber}</p>`);
document.write(`<p>${thirdNumber}</p>`);




if ((sum) % 2 === 0) {
    document.write("<p>Сумма цифр явлется четной</p>");
} else {
    document.write("<p>Не является чётной</p>");
}

if ((sum) % 5 === 0) {
    document.write("<p>Сумма цифр кратна 5</p>");
} else {
    document.write("<p>Не кратна 5</p>");
}

if ((mult) > 100) {
    document.write("<p>Результат больше 100</p>");
} else {
    document.write("<p>Меньше 100</p>");
}

