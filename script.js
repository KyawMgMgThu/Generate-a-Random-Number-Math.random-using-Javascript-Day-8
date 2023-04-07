//Using Math.random() method.
    // syntax: Math.random();
//Math.random() returns a random floating-point number ranging from 0 to less than 1.


var x = Math.random();
console.log("Before Calculation "+x);

x = x * (100 - 1) + 1;

console.log("After Calculation "+x);

console.log("Floor Calcullation "+ Math.floor(x));