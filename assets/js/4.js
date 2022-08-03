let mass = +prompt(`Масса вещества, кг`);
console.log(`Масса вещества: ${mass}кг.`);
let V = +prompt(`объем вещества:m3.`);
console.log(`объем вещества: ${V}m3.`);
let p = mass / V;
p = p * 100;
p = Math.round(p);
p = p / 100;
console.log(`плотность вещества: ${p} кг/m3.`);