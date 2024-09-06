import fs from "fs";

// write data
fs.writeFile("../../FileSystem/employee.txt","Name: John Doe, Age: 40, position: Manager",(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("File is written!!");
    }
});

console.log("This is another operation being performed.")