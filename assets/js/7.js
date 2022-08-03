let a = +prompt(`значение a:`);
console.log(`значение a: ${a}.`);
let y = a * a + 10 / Math.sqrt(a * a + 1);
y = y * 100;
y = Math.round(y);
y = y / 100;
console.log(`значение y: ${y}.`);