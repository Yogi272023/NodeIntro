import fs from "fs";

// Reading data

fs.readFile("../../FileSystem/data.txt",(err,data)=>{
    if(err){
        console.log(err);
    } else {
        console.log(data.toString());
    }
})

console.log("This is another operation being performed.")