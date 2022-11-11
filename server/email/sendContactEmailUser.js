const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const sendContactEmailUser = (email, userFormInformation, userData) => {
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
      subject: 'Hi friend, EG Hotels will contact you shortly',
      html: `
        <h1>Thank you ${userFormInformation.firstName} for reaching out to EG Hotels.</h1>
        <p>We will get in touch with you very soon.</p>

        <h6>Here is a copy of what you filled:</h6>
        <p>${userFormInformation.body}</p>

        <h3>Have a nice day from EG Hotels!</h3>`,
    };

    let companyMailOptions = {
      from: process.env.MAILUSERNAME,
      to: process.env.MAILUSERNAME,
      subject: 'A new form has been filled at EG Hotels contact page from an existing user',
      html: `
      <h1>New contact form was filled at EG Hotels contact page at the website</h1>

      <h3>Here are the information:</h3>
      <p>First Name: ${userFormInformation.firstName}</p>
      <p>Last Name: ${userFormInformation.lastName}</p>
      <p>Email: ${userFormInformation.email}</p>
      <p>Message: ${userFormInformation.body}</p>

      <h3>Here are his user information:</h3>
      <p>First Name: ${userData.firstName}</p>
      <p>Last Name: ${userData.lastName}</p>
      <p>Email: ${userData.email}</p>
      <p>Phone: ${userData.mobilePhone}</p>
      <p>admin tier: ${userData.admin}</p>

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
  sendContactEmailUser,
};
