/*
Q18. Seeing the World: Think of at least five places in the world you’d like to visit. 
• Store the locations in a array. Make sure the array is not in alphabetical order. 
• Print your array in its original order. 
• Print your array in alphabetical order without modifying the actual list. 
• Show that your array is still in its original order by printing it. 
• Print your array in reverse alphabetical order without changing the order of the original list. 
• Show that your array is still in its original order by printing it again. 
• Reverse the order of your list. Print the array to show that its 
order has changed. 
• Reverse the order of your list again. Print the list to show it’s back to its original order. 
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed. 
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
order has changed. 
*/

 const places : string[] = ["Saudi Arabia","Turkey","Afganistan","Iran","England"];



console.log(`original arry`);
console.log(places);

console.log(`alphabatically`);
console.log([...places].sort());
console.log(`original arry with same order`);
console.log(places);

console.log(`reverse order`)
console.log([...places].reverse());
console.log(`original arry with same order`);
console.log(places);

console.log(`Again reverse`)
console.log(places.reverse());
console.log(`Order of original array has changed`);
console.log(places);

console.log(`arry come in original position by again reverse`);
console.log(places.reverse());

places.sort();
console.log(`Array order change and become alphabatically`);
console.log(places);

places.reverse();
console.log(`Array order change and become reverse alphabatically`);
console.log(places);