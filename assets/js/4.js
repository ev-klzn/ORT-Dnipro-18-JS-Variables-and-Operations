let mass = +prompt(`Масса вещества, кг.`);
console.log(`масса вещества: ${mass}кг.`);
let V = +prompt(`объем вещества: m³.`);
console.log(`объем вещества: ${V}m³.`);
let p = mass / V;
p = p * 100;
p = Math.round(p);
p = p / 100;
console.log(`плотность вещества: ${p} кг/m³.`);