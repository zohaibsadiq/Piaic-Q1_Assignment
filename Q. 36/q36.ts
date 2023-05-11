/*
T-Shirt: Write a function called make_shirt() that accepts a size and the 
text of a message that should be printed on the shirt. The function should print 
a sentence summarizing the size of the shirt and the message printed on it. 
Call the function. 
*/

const make_shirt = (size:string, message:string)=>{

    console.log(`This shirt is of ${size} size and also a beautiful message is written on it
(${message}).`)

}



make_shirt("Medium","Once upon a time.")