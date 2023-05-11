/*
29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
statements that check for certain fruits in your array. 
• Make a array of your three favorite fruits and call it favorite_fruits. 
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is 
in your array, the if block should print a statement, 
such as You really like bananas!
*/

let favorite_fruits : string[] = ['Mango','Banana','Strawberry'];



/*• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is 
in your array, the if block should print a statement,*/



if (favorite_fruits.indexOf('Banana') != -1){
    console.log(`You really like banana `);
}

if (favorite_fruits.indexOf('pine Apple') != -1){
    console.log(`You really like pine Apple `);
}

if (favorite_fruits.indexOf('Mango') != -1){
    console.log(`You really like MAngo `);

}
if (favorite_fruits.indexOf('Strawberry') != -1){
    console.log(`You really like Strawberry `);
}

if (favorite_fruits.indexOf('Apple') != -1){
    console.log(`You really like Apple `);
}