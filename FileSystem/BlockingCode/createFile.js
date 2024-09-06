import fs from "fs";

// Creating and writing a file.

console.log("Starting to read.")

try {
    fs.writeFileSync("../../FileSystem/employee.txt","Name: John Doe, Age: 40, position: Manager");
} catch (error) {
    console.log(error);
}

console.log("This is another operation being performed.")
