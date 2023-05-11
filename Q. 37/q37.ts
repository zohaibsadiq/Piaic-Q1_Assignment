/*
. Large Shirts: Modify the make_shirt() function so that shirts are large 
by default with a message that reads I love TypeScript. Make a large shirt and a 
medium shirt with the default message, and a shirt of any size with a different 
message. 
*/

const make_shirt = (size:string = 'large', message:string = 'I love typeScript' )=>{

    console.log(`This shirt is of ${size} size.`)
    console.log(`A beautiful message is written on it (${message}).\n`)

}



make_shirt()
make_shirt('Medium')
make_shirt('Small','welcome to Metaverse')





export{};
