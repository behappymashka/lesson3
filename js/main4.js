//Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру.

let number = parseInt(prompt("Введите любое число"));
let lastNumeric =  number % 10;

if (lastNumeric % 2 === 0){
    document.write("Чётное число");
}
else {
    document.write("Нечётное число");
}
document.write (`<p> Последняя цифра ${number} = ${lastNumeric} </p>`);