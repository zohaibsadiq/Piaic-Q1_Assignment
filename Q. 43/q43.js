"use strict";
/*
Q43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let magician_name = ['S. S. ADAMS', 'CRISS ANGEL', 'ANVERDI', 'ARGUS'];
function show_magicians(magician_name) {
    for (const i of magician_name) {
        console.log(i);
    }
}
// first time call
console.log(`   Original Array.`);
show_magicians(magician_name);
function make_great(...magician_name) {
    let arr = [];
    arr = magician_name;
    for (let i = 0; i < magician_name.length; i++) {
        arr[i] = magician_name[i].concat(` the Great.`);
    }
    return arr;
}
// new Array
let newArray = make_great(...magician_name);
//  call after return 
console.log(`\n    Copy of array.`);
show_magicians(newArray);
// ariginal arry call again
console.log(`\n   Original Array is not affected.`);
show_magicians(magician_name);
