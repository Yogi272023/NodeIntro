// Import readline
import readline from "readline";

// Configure interface to connect with terminal/command line
const interfaceValue=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Reading Values.
interfaceValue.question("Enter first number",(num1)=>{
    interfaceValue.question("Enter second number",(num2)=>{
        // num1, num2
        const sum=Number(num1) + Number(num2);
        console.log(sum);
    })
})