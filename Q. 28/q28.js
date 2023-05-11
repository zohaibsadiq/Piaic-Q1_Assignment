"use strict";
/*
28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the
variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.
*/
let p_age = 65;
//• If the person is less than 2 years old, print a message that the person is a baby
if (p_age < 2) {
    console.log(`person is baby `);
}
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler. 
else if (p_age >= 2 && p_age < 4) {
    console.log(`person is toddler `);
}
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid. 
else if (p_age >= 4 && p_age < 13) {
    console.log(`person is a kid `);
}
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager. 
else if (p_age >= 13 && p_age < 20) {
    console.log(`person is a teenager `);
}
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult. 
else if (p_age >= 20 && p_age < 65) {
    console.log(`person is an adult  `);
}
//• If the person is age 65 or older, print a message that the person is an elder. 
else {
    console.log(`person is an elder `);
}
