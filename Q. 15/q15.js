"use strict";
/*
Q15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// list of people
let person = ["Talha", "Umair", "Asjad"];
// print message to each
console.log(`${person[0]} would you come to my home for dinner.\n`);
console.log(`${person[1]} you have to come to my home for dinner.\n`);
console.log(`${person[2]} would you like to take tomorrow dinner with me.\n\n`);
// person who cannot come
console.log(`\' ${person[1]} \' cannot come for dinner\n\n `);
// replace person
person[1] = "Sohail";
// print message again
console.log(`${person[0]} would you come to my home for dinner again.\n`);
console.log(`${person[1]} you have to come to my home for dinner .\n`);
console.log(`${person[2]} would you like to take tomorrow dinner with me again.\n`);
