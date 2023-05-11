/*
41. Magicians: Make a array of magician’s names. Pass the array to a function 
called show_magicians(), which prints the name of each magician in the array. 
*/



let magician_name : string[] = ['S. S. ADAMS','CRISS ANGEL','ANVERDI','ARGUS'];


function show_magicians(magician_name:string[]){

    for(const i of magician_name){
        console.log(i);
    }

}

show_magicians(magician_name);



