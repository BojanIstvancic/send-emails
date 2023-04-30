const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
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

module.exports = { sendEmail };
