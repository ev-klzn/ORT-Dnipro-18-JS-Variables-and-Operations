let a = +prompt(`катет а:`);
console.log(`катет а: ${a}.`);
let b = +prompt(`катет b:`);
console.log(`катет b: ${b}.`);
let c = Math.sqrt(a * a + b * b);
c = c * 100;
c = Math.round(c);
c = c / 100;
console.log(`гипотенуза: ${c}.`);
alert(`гипотенуза: ${c}.`);