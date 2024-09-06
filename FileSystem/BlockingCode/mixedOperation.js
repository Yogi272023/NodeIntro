// Please don't change the pre-written code
// Import the necessary modules here
import fs from "fs";

  // Write your code here
  fs.writeFileSync("notes.txt","The world has enough coders");
  const buffer=fs.readFileSync("notes.txt",{encoding: "utf-8"});
  console.log(buffer);
  fs.appendFileSync("notes.txt"," BE A CODING NINJA!");
  const updatedBuffer=fs.readFileSync("notes.txt",{encoding: "utf-8"});
  console.log(updatedBuffer);
  fs.unlinkSync("notes.txt");


