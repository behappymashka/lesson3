//Определить, является ли число a делителем числа b ? И наоборот. (Дать два ответа)
let a = parseInt(prompt("Введите число a"));
let b = parseInt(prompt("Введите число b"));

if (b % a === 0){
    document.write(`Число a = ${a} является делителем числа b = ${b}`);
}
else if (a % b === 0){
    document.write(`Число b = ${b} является делителем числа a = ${a}`);
}
else {
    document.write(" Деление с остатком:( ");
}