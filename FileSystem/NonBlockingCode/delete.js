import fs from "fs";

// delete a file
fs.unlink("../../FileSystem/employee.txt",(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("File is deleted!!");
    }
});

console.log("This is another operation being performed.")