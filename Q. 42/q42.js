"use strict";
/*
42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let magician_name = ['S. S. ADAMS', 'CRISS ANGEL', 'ANVERDI', 'ARGUS'];
function show_magicians(magician_name) {
    for (const i of magician_name) {
        console.log(i);
    }
}
function make_great(magician_name) {
    for (let i = 0; i < magician_name.length; i++) {
        magician_name[i] = magician_name[i].concat(` the Great.`);
    }
}
show_magicians(magician_name);
make_great(magician_name);
console.log(`\n`);
show_magicians(magician_name);
