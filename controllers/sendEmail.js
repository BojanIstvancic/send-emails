const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
// sendGrid service NPM package

const sendEmailEthereal = async (req, res) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email", // when working on real app use .env file here
    port: 587,
    auth: {
      user: "yasmin.johnston@ethereal.email",
      pass: "mFVshcZ675RCPFpZSm",
    },
  });

  let info = await transporter.sendMail({
    from: '"Bojan Istvancic" <bojan.dev@gmail.com>', // sender Adress
    to: "istvelock@yahoo.com",
    subject: "Hello Title",
    html: "<h2>Sending Emails with node.js</h2>",
  });
  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const message = {
    to: "istvelock@yahoo.com", // who to send the email to
    from: "sendGridEmail@example.com", // sendgrir email
    subject: "Some ranom subjet",
    text: "Some random text",
    html: "<h2>Sending Emails with node.js</h2>",
  };

  const info = await sgMail.send(message); // don't do this in real life this is just for testing purposes

  res.json(info);
};

module.exports = { sendEmail };
