/*
Q3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase.
*/


console.log()
let personname : string = 'Hasan';
let add : string = '';

               // Lower case //
console.log('In lower case ', personname.toLowerCase());
console.log()
               // Upper case //
console.log('In upper case ', personname.toUpperCase());
console.log()


              // Title case //
add += (personname.charAt(0).toUpperCase());

for (let i = 1; i <= personname.length-1; i++) {
    add += personname.charAt(i).toLowerCase();
}

console.log(`In title case ${add}`);

