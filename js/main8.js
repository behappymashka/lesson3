//Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)

let number = parseInt(prompt("Введите число от 100000 до 999999"));

let firstNumber = parseInt(number / 100000 % 10);
let secondNumber = parseInt(number / 10000 % 10);
let thirdNumber = parseInt(number / 1000 % 10);
let fourthNumber = parseInt(number / 100 % 10);
let fiveNumber = parseInt(number / 10 % 10);
let sixNumber = number % 10;

if (firstNumber === sixNumber && secondNumber === fiveNumber && thirdNumber === fourthNumber) {
    document.write(`Число ${number} зеркальное`);
} else {
    document.write(`Число ${number} незеркальное`);
}
if (999999 < number || number < 100000) {
    document.write("<p>Было введено не шестизначное число</p>");
}
