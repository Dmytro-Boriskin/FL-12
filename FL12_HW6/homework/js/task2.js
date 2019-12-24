let a;
let b;
let c;

a = parseInt(prompt("Please insert the 1st value", 7));
while ((isNaN(a))) {
    a = parseInt(prompt("Input values should be ONLY numbers. Please enter a valid number", 7));
}

b = parseInt(prompt("Please insert the 2nd value", 8));
while ((isNaN(b))) {
    b = parseInt(prompt("Input values should be ONLY numbers. Please enter a valid number", 8));
} 

c = parseInt(prompt("Please insert the 3rd value", 9));
while ((isNaN(c))) {
    c = parseInt(prompt("Input values should be ONLY numbers. Please enter a valid number", 9));
} 

console.log(`Side a = ${a}, side b = ${b}, side c = ${c}`);

if (a <= 0 || b <= 0 || c <= 0) {
    alert("A triangle must have 3 sides with a positive definite length");
} else if (a + b <= c || a + c <= b || b + c <= a) {
    alert("Triangle doesn’t exist");
    console.log("Triangle doesn’t exist");
} else if (a === b && b === c) {
    console.log("Equilateral triangle");
} else if (a === b || a === c || b === c) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
} 
