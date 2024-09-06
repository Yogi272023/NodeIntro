import fs from "fs";

  fs.appendFile("note.txt", " new data",(err)=>{
    if(err){
      console.log(err);
    } else{
      console.log("file updated successfully!")
    }
  });
 
  fs.readFile("note.txt","utf-8",(err, data)=>{
    if(err){
      console.log(err);
    }else{
      console.log(data.toString());
    }
  })

  fs.unlink("note.txt",(err)=>{
    if(err){
        console.log(err);
    }
  })

