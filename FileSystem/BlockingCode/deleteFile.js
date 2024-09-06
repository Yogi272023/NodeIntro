import fs from "fs";

// Deleting a file

try {
    fs.unlinkSync("../../FileSystem/employee.txt")
} catch (error) {
    console.log("File doesn't exist!!")
}

console.log("This is another operation being performed.")
