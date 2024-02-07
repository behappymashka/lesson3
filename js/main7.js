//Дано трехзначное число.
// Верно ли, что все его цифры одинаковые?
// Есть ли среди его цифр одинаковые?
let number = parseInt(prompt("Введите число от 100 до 999"));
let firstNumber = parseInt(number / 100 % 10);
let secondNumber = parseInt(number / 10 % 10);
let thirdNumber = number % 10;

if (999 < number || number < 100) {
    document.write("<p>Было введено не трехзначное число</p>");
}
document.write(`<p>${number}</p>`);
document.write(`<p>${firstNumber}</p>`);
document.write(`<p>${secondNumber}</p>`);
document.write(`<p>${thirdNumber}</p>`);
//----------------------1

if (firstNumber === secondNumber && secondNumber === thirdNumber && firstNumber === thirdNumber) {
    document.write("цифры одинаковые");
} else {
    document.write("разные");
}
//----------------------2

/*if (firstNumber === secondNumber || secondNumber === thirdNumber || firstNumber === thirdNumber) {
    document.write("есть цифры одинаковые");
} else {
    document.write("все разные");
}*/
