// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

const Solution = () => {
  // Write your code here
  const qInterface=readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  qInterface.question("Please enter your mail: ",(mail)=>{
    qInterface.close();
    const tranporter=nodemailer.createTransport({
      service: "gmail",
      auth:{
        user:"codingninjas2k16@gmail.com",
        pass:"slwvvlczduktvhdj"
      }
    });
  
    const mailOptions={
      from:"codingninjas2k16@gmail.com",
      to: mail,
      subject:"Coding Ninjas",
      text:"The world has enough coders; be a coding ninja!"
    }
  
    tranporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.log("Email is not sent: " + error);
      } else {
        console.log(`Success: Email sent to: ${mail}`);
      }
    });
  })

 
};
Solution();
export default Solution;
