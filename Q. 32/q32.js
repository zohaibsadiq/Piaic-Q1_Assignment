"use strict";
/*
32. Checking Usernames: Do the following to create a program that simulates how websites ensure that
everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames
are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a
message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
let current_users = ['ramish', 'Mudasir', 'Anas', 'hadi', 'Umair', 'zohaib', 'Ahmed', 'sadiq'];
let new_users = ['Hassan', 'Anas', 'Ramish', 'Umair', 'talha'];
let found = 0;
for (let i = 0; i < new_users.length; i++) {
    for (let j = 0; j < current_users.length; j++) {
        found = 0;
        if (new_users[i] == current_users[j]) {
            console.log(`please enter a new username because \"${new_users[i]}\"  is already registered.\n `);
            found = 1;
            break;
        }
    }
    if (found == 0) {
        console.log(`${new_users[i]} name is avaliable for Registration. \n `);
    }
}
