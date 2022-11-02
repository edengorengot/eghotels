const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const sendContactEmail = (email, userFormInformation) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAILUSERNAME,
        pass: process.env.MAILPASSWORD
      },
    });

    let userResponseMailOptions = {
      from: process.env.MAILUSERNAME,
      to: email,
      subject: 'Thank you for contacting EG Hotels',
      html: `
        <h1>Thank you for reaching out to EG Hotels</h1>
        <p>We will get in touch with you very soon.</p>

        <h6>Here is a copy of what you filled:</h6>
        <p>${userFormInformation}</p>
        <h3>Have a nice day from EG Hotels!</h3>`,
    };

    let companyMailOptions = {
      from: process.env.MAILUSERNAME,
      to: process.env.MAILUSERNAME,
      subject: 'A new form has been filled at EG Hotels contact page',
      html: `
      <h1>New contact form was filled at EG Hotels contact page at the website</h1>
      <h3>Here are the information:</h3>
      <p>${userFormInformation}</p>
      <h3>Have a nice day from EG Hotels</h3>`,
    };

    transporter.sendMail(companyMailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    transporter.sendMail(userResponseMailOptions, function(error, info){
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
    sendContactEmail,
};
