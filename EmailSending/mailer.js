// import nodemailer
import nodemailer from "nodemailer";

// Configure email and send it.
async function sendMail(){
    // 1. create an email transporter
    // SMTP (simple mail transfer protocol)
    // Using 3rd party -google 
const tranporter=nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:"ashakaushik76@gmail.com",
    pass:"sxhe fomw ionb gwfa"
  }
})

// 2. Configure email content
const mailOptions={
    from:"ashakaushik76@gmail.com",
    to:"viratkaushik78@gmail.com",
    subject:"Welcome to NodeJS App.",
    text:"This is an email using nodemailer in NodeJS."
};

// 3. Send email (there may come error that's why wrap in try-catch block)
try {
   const result= await tranporter.sendMail(mailOptions);
   console.log("Email sent successfully!!")
} catch (error) {
    console.log("Email send failed with error: "+error)
}

}

sendMail();