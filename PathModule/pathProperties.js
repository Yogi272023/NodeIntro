import path from "path";

const filePath=path.join("FileSystem", "data.txt");
console.log(filePath);// relative path

const filePathResolved=path.resolve("FileSystem","data.txt");
console.log(filePathResolved);// absolute path

console.log(path.extname(filePath));
// to find extension of file you can provide either absolute path or relative path as you want.