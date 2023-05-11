"use strict";
/*
Q22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to
make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let person = ["Talha", "Umair", "Asjad"];
// print message to each
console.log(`${person[0]} would you come to my home for dinner.\n`);
console.log(`${person[1]} you have to come to my home for dinner.\n`);
console.log(`${person[2]} would you like to take tomorrow dinner with me.\n`);
// person[0] = 89;  (Error because array is of type string )
person[0] = "saeed";
console.log(`***************** After changing *****************\n`);
// print message to each
console.log(`${person[0]} would you come to my home for dinner.\n`);
console.log(`${person[1]} you have to come to my home for dinner.\n`);
console.log(`${person[2]} would you like to take tomorrow dinner with me.`);
