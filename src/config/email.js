import nodemailer from "nodemailer";
import logger from "../utils/logger.js";
import { generateNewEmergencyEmailToAmbulanceStaff } from "../views/email/newEmergencyEmailToAmbulanceStaff.js";
import { generateAssignedStaffEmailToPatient } from "../views/email/generateAssignedStaffEmailToPatient.js";
import { generateUpdatedEmergencyStatusEmailToPatient } from "../views/email/generateUpdatedEmergencyStatusEmailToPatient.js";

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

const sendEmailtoAmbulanceStaff = async ({
  email,
  staffName,
  emergencyId,
  patientName,
  location,
  note,
}) => {
  const { subject, text, html } = generateNewEmergencyEmailToAmbulanceStaff({
    staffName,
    emergencyId,
    patientName,
    location,
    note,
  });

  return await sendEmail(email, subject, text, html);
};

const sendAssignedStaffEmailtoPatient = async ({
  email,
  staffName,
  emergencyId,
  patientName,
  location,
  note,
  status,
}) => {
  const { subject, text, html } = generateAssignedStaffEmailToPatient({
    staffName,
    emergencyId,
    patientName,
    location,
    note,
    status,
  });

  return await sendEmail(email, subject, text, html);
};

const sendUpdatedEmergencyStatusEmailToPatient = async ({
  email,
  staffName,
  emergencyId,
  patientName,
  location,
  note,
  status,
}) => {
  const { subject, text, html } = generateUpdatedEmergencyStatusEmailToPatient({
    staffName,
    emergencyId,
    patientName,
    location,
    note,
    status,
  });

  return await sendEmail(email, subject, text, html);
};

export {
  sendEmail,
  sendEmailtoAmbulanceStaff,
  sendAssignedStaffEmailtoPatient,
  sendUpdatedEmergencyStatusEmailToPatient,
};
