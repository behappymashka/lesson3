//Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?

let number = parseInt(prompt("Введите число от 10 до 99"));
let firstNumber = parseInt(number / 10 % 10);
let secondNumber = number % 10;
console.log(firstNumber);
console.log(secondNumber);
document.write(`<p>${number}</p>`);

if (99 < number || number < 10) {
    document.write("Было введено не двухзначное число");
} else if (firstNumber > secondNumber) {
    document.write("Первая цифра больше чем вторая");
} else if (firstNumber < secondNumber) {
    document.write("Вторая цифра больше чем первая");
} else if (firstNumber === secondNumber) {
    document.write("Первая цифра = Второй цифре");
}