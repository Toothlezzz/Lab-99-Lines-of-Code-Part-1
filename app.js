let friends = ["Justin", "Bryan", "Caitlyn", "Ryu", "Trevor"];
for(let i = 0; i < friends.length; i++){
    console.log(friends[i]+ ":");
    for(let j = 99; j > 0; j--){
        if(j != 1){
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + j + " lines of code in the file")
        }
        else{
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file")
        }
        
    }
}