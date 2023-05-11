/*
17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the 
dinner, and you have space for only two guests. 
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
invite only two people for dinner. 
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop 
a name from your list, print 
a message to that person letting them know you’re sorry you can’t invite them to dinner. 
• Print a message to each of the two people still on your list, letting them know they’re still invited. 
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end 
of your program. 
*/

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

                    // message for only two people
console.log(`\tYou can invite only two people for dinner\n`);
                   //  message those who you dont want to come         
console.log(`${person.pop()} sorry the dinner is cancelled due to some reason.`);
console.log(`${person.pop()} sorry the dinner is cancelled due to some reason.`);
console.log(`${person.pop()} sorry the dinner is cancelled due to some reason.`);
console.log(`${person.pop()} sorry the dinner is cancelled due to some reason.\n\n`);

                   // message those who are still invited 
console.log(`${person[0]} you are still invited please come in time.`);
console.log(`${person[1]} you are still invited please come in time.\n`);
                  // remove two people form list
person.pop();
person.pop();
                // print list
console.log(person);




export{};

