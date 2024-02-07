//Даны два различных числа. Определить какое из них больше, а какое меньше
let a = parseInt(prompt("Ввести число a"));
let b = parseInt(prompt("Ввести число b"));
if (a > b) {
    document.write(` Число a = ${a} > числа b = ${b}`);
} else if (a < b) {
    document.write(` Число b = ${b} > числа a = ${a}`);
} else {
    document.write(` Число a = ${a} = числу b = ${b} `);
}