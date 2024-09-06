// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if(req.method==="POST"){
    let body="";
    req.on("data",(chunk)=>{
    body+=chunk.toString();
    });
    req.on("end",()=>{
      console.log(body);
      fs.appendFileSync("data.txt",body);
      const buffer=fs.readFileSync("data.txt",{encoding:"utf8"});
      console.log(buffer);
      res.end("data recieved")
    }) 
 
  } else {
    console.log("Function end here")
    res.end("Welcome to Node JS!")
  }

});

server.listen(3000, () => {
    console.log("server is listening at port 3000");
  });
