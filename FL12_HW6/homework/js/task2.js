let a;
let b;
let c;

a = prompt("Please insert the 1st value", 1);
while ((isNaN(a)) || (Number.isInteger(a))) {
    a = prompt("Input values should be ONLY numbers. Please enter a valid and integer number", 1);
}

b = prompt("Please insert the 2nd value", 2);
while ((isNaN(b)) || (Number.isInteger(b))) {
    b = prompt("Input values should be ONLY numbers. Please enter a valid and integer number", 2);
}

c = prompt("Please insert the 3rd value", 3);
while ((isNaN(c)) || (Number.isInteger(c))) {
    c = prompt("Input values should be ONLY numbers. Please enter a valid and integer number", 3);
}
console.log(`Side a = ${a}, side b = ${b}, side c = ${c}`);

if (a <= 0 || b <= 0 || c <= 0) {
    alert("A triangle must have 3 sides with a positive definite length");
} else if (a + b >= c || a + c >= b || b + c >= a) {
    alert("Triangle doesn’t exist");
    console.log("Triangle doesn’t exist");
} else if (a === b && b === c) {
    console.log("Equilateral triangle");
} else if (a === b || a === c || b === c) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
} 

/* if (a + b >= c) {
    alert("no");
} else {
    alert("yes");
}
 */
