let a;
let b;
let c;
let d;  
let x;
let x1;
let x2;

a = prompt("Please insert the 1st value", 1);
while( (isNaN(a)) || (Number.isInteger(a)) ) {
    a = prompt("Invalid input data. Please enter a valid and integer number", 1);
}

b = prompt("Please insert the 2nd value", 2);
while( (isNaN(b)) || (Number.isInteger(b)) ) {
    b = prompt("Invalid input data. Please enter a valid and integer number", 2);
}

c = prompt("Please insert the 3rd value", 1);
while( (isNaN(c)) || (Number.isInteger(c)) ) {
    c = prompt("Invalid input data. Please enter a valid and integer number", 3);
}

d = b * b - 4 * a * c;
console.log(`Discriminant = ${d}`);

if ( d > 0 ) {
   x1 = Math.round((-b + Math.sqrt(d)) / 2 * a);
   x2 = Math.round((-b - Math.sqrt(d)) / 2 * a);
   console.log(`x1 =  ${x1}, x2 = ${x2}`)
} else if (d == 0) {
    x = (-b / (2 * a));
    console.log(`x = ${x}`);
} else {
    console.log("No solution");
}
