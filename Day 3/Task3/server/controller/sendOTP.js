const nodemailer = require("nodemailer");

const sendOTP = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "nicholaus.dibbert@ethereal.email",
      pass: "WMmBx7MmK4ZzcyktHV",
    },
  });

  let info = await transporter.sendMail({
    from: '"viraj raut virajraut123@gmail.com"',
    to: "virajraut089@gmail.com",
    subject: "password reset link sent",
    html: "<h1>0899</h1>",
  });

  console.log("message sent:%s", info.messageId);

  res.json(info);
};

module.exports = sendOTP;
