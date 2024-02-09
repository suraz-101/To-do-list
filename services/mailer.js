require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  },
});

// async..await is not allowed in global scope, must use a wrapper
const mailer = async (email) => {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"Todo list App" ${process.env.USERNAME} `, // sender address
    to: email, // list of receivers
    subject: "Registration Status", // Subject line
    text: "Congratulations!!", // plain text body
    html: "<b><h1>CONGRATULATIONS!!!<h1/></br><h4>You have successfully registered into our system</h4></b>", // html body
  });

  return info;
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
};

module.exports = { mailer };
