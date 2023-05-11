"use strict";
/*
Q24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
try more comparisons, write more tests. Have at least one True and one False result for each of the
following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
Object.defineProperty(exports, "__esModule", { value: true });
let name_1 = 'zohaib';
console.log(`Is name zohaib?`);
console.log(name_1 == 'zohaib');
console.log(`Is name Anas?`);
console.log(name_1 == 'zohaib');
let car = 'Civic';
console.log("Is car name written as Civic or civic? I guess civic .");
console.log(car.toLowerCase() == car);
let num1 = '8';
console.log(`Is number equal 8?`);
console.log(num1 == '8');
console.log(`Is number equal 8?`);
console.log(num1 == '7');
console.log(`Is number greater then 7?`);
console.log(num1 >= '7');
console.log(`Is number less then 7? `);
console.log(num1 <= '7');
console.log(`Is  number greater or equal 8?`);
console.log(num1 >= '7');
console.log(`Is number less then or equal 7?`);
console.log(num1 <= '7');
console.log(`Is number greater then 3 and less then 7?`);
console.log(num1 > '2' && num1 < '7');
console.log(`Is number greater then 6 and less then 10?`);
console.log(num1 > '6' || num1 < '10');
console.log(`An item is in an array?`);
let p_name = ['Zohaib', 'Anas', 'Saeed', 'Talha'];
for (let i of p_name) {
    if (i == 'Anas') {
        console.log(`Anas is Found in an array.\n `);
        break;
    }
}
console.log(`An item is not in an array?`);
let P_name = ['Zohaib', 'Anas', 'Saeed', 'Talha'];
let found = true;
for (let i of P_name) {
    if (i == 'Umiar') {
        console.log(`Umair  Found in an array. `);
        found = false;
        break;
    }
}
if (found == true) {
    console.log(`Not found`);
}
