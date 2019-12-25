let a;
let b;
let c;
let d;  
let x;
let x1;
let x2;

a = prompt('Please insert the 1st value', 0);
while( isNaN(a) || Number.isInteger(a) ) {
    a = prompt('Invalid input data. Please enter a valid and integer number', 0);
}

b = prompt('Please insert the 2nd value', 0);
while( isNaN(b) || Number.isInteger(b) ) {
    b = prompt('Invalid input data. Please enter a valid and integer number', 0);
}

c = prompt('Please insert the 3rd value', 0);
while( isNaN(c) || Number.isInteger(c) ) {
    c = prompt('Invalid input data. Please enter a valid and integer number', 0);
}

let q = 4;
d = b * b - q * a * c;
console.log(`Discriminant = ${d}`);

let q1 = 2;
if ( d > 0 ) {
   x1 = Math.round((-b + Math.sqrt(d)) / q1 * a);
   x2 = Math.round((-b - Math.sqrt(d)) / q1 * a);
   console.log(`x1 =  ${x1}, x2 = ${x2}`)
} else if (d === 0) {
    x = -b / (q1 * a);
    console.log(`x = ${x}`);
} else {
    console.log('No solution');
}
