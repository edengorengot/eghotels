const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const sendResetEmail = (email, resetPassword) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAILUSERNAME,
        pass: process.env.MAILPASSWORD
      },
    });

    let mailOptions = {
      from: process.env.MAILUSERNAME,
      to: email,
      subject: 'Reset password for EG Hotels',
      html: `
        <h1>Here is a link to reset your password:</h1>
        <div><a href="http://localhost:3000/reset-password/${resetPassword}/${email}">click here!</a></div>
        <h3>Have a nice day from EG Hotels!</h3>`,
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 
    
  } catch (error) {
    console.log("We had some error:", error);
  }
};

module.exports = {
  sendResetEmail,
};
