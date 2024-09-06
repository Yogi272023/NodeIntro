import fs from "fs";

// append data
fs.appendFile("../../FileSystem/employee.txt","\nName: Kim Doe, Age: 55, position: COO",(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("File is updated!!");
    }
});

console.log("This is another operation being performed.")