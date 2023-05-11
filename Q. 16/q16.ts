/*
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a 
bigger dinner table. 

• Add one new guest to the beginning of your array. 
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. 
 */

                    // list of people
let person : string[] =["Talha","Umair","Asjad"];              
                    
                    // print message
console.log(`${person[0]} would you come to my home for dinner.\n`);
console.log(`${person[1]} you have to come to my home for dinner.\n`);
console.log(`${person[2]} would you like to take tomorrow dinner with me.\n\n`);

                    // person who cannot come
console.log(`\' ${person[1]} \' cannot come for dinner\n\n `);

                    // replce that person
person[1] = "Sohail";
                    // print message again
console.log(`${person[0]} would you come to my home for dinner again.\n`);
console.log(`${person[1]} you have to come to my home for dinner .\n`);
console.log(`${person[2]} would you like to take tomorrow dinner with me again.\n`);

                    // informing something who came 
console.log(`\tGentle men you found a bigger dinner table.\n`)
 
                    // add on first
person.unshift("Hassan");
                    // add in middle
person.splice(2,0,"Ramish");
                    // add in last
person.push("Anas");


                    // print message but this time i use loop
for(let i = 0; i < person.length; i++){
    console.log(`${person[i]} would you come to my home for dinner.\n`);
}











export{}