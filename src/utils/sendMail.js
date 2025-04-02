import nodemailer from 'nodemailer';
import { SMTP } from '../constants/index.js';

const transporter = nodemailer.createTransport({
  host: SMTP.SMTP_HOST,  // Убираем повторный вызов getEnvVar()
  port: Number(SMTP.SMTP_PORT),
  secure: Number(SMTP.SMTP_PORT) === 465, // true для 465 (SSL), false для 587 (TLS)
  auth: {
    user: SMTP.SMTP_USER,
    pass: SMTP.SMTP_PASSWORD,
  },
});

export const sendEmail = async (to, subject, content) => {
  try {
    const info = await transporter.sendMail({
      from: SMTP.SMTP_FROM,
      to,
      subject,
      html: content,
    });
    console.log(`✅ Email sent: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw new Error('Failed to send email');
  }
};
