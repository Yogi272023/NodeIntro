import fs from "fs";

// Append another employee data.

fs.appendFileSync("../../FileSystem/employee.txt","Name: David Doe, Age: 55, position: COO");

console.log("This is another operation being performed.")
