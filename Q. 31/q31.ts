/*
31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty. 
• If the list is empty, print the message We need to find some users! 
• Remove all of the usernames from your array, and make sure the correct message is printed. 
*/


let userNames : string[] = ['Zohaib','Talha','Anas','Admin','Hassan'];

for(const i of userNames){
    if(i === 'Admin'){
        console.log(` Hello admin, would you like to see a status report?\n `);
        continue;
    }

    console.log(` Hello ${i} thank you for logging in again\n `)
}
// Add an if test to Exercise 28 to make sure the list of users is not empty. 

if(userNames.length != 0){
    console.log(`Array is not empty. `);
    console.log(userNames)
}

else {
    console.log(`We need to find some users `);
}


while(userNames.length != 0){

    userNames.pop();
}

// • Remove all of the usernames from your array, and make sure the correct message is printed. 

console.log(`Now the Array is empty. `);
console.log(userNames);













export{};