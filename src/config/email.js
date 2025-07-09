import nodemailer from "nodemailer";
import logger from "../utils/logger.js";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (to, subject, text, html) => {
  try {
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
    logger.info(`Email sent to ${to}`);
    return true;
  } catch (error) {
    logger.error(`Error sending email: ${error.message}`);
    return false;
  }
};

export { sendEmail };
