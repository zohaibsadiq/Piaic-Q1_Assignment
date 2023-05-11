"use strict";
/*
44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
*/
function make_sandwich(items) {
    console.log(`Using these igredients.\n${items}\nYou  sandwich is ready.\n\n`);
}
console.log(`\t\t sandwiches`);
make_sandwich(['Bread', 'Tamato', 'Cheeze', 'Cucumber', 'Eggs']);
make_sandwich(['turkey', 'apple slices', 'honey mustard']);
make_sandwich(['mayonnaise', 'bread', 'bacon', 'salad']);
