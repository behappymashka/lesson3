//Известны два расстояния. Одно в километрах, другое - в футах (1 фут = 0,305м). Какое расстояние меньше?
let distance1 = prompt("Ввести расстояние в км");
let distance2 = prompt("Ввести расстояние в футах");
let distance2ConvertInKm = distance2 * (0.305 / 1000);

if (distance2ConvertInKm < distance1) {
    document.write(`Первое расстояние ${distance1} км > Второго расстояния ${distance2ConvertInKm} км`);
}
else if (distance2ConvertInKm > distance1) {
    document.write(`Первое расстояние ${distance1} км < Второго расстояния ${distance2ConvertInKm} км`);
}
else {
    document.write(`Первое расстояние ${distance1} км = Второму расстоянию ${distance2ConvertInKm} км`);
}
