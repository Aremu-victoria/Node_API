require("dotenv").config();
const nodemailer = require('nodemailer');
const sendMail = (req, res) => {
    // res.send('Sending email...');
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "aremuvictoria222@gmail.com",
            pass: "oevp flpl aqls jkxv",
        },
    });

    const mailoptions = {
        from: "kemiopeyemi38@gmail.com",
        to: "aremuvictoria222@gmail.com",
        subject: "Debug completed",
        text: "The body of the message",
        html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
        <h2 style="text-align: center; color: #4CAF50;">Debug Completed Successfully</h2>
        <p style="font-size: 16px;">Hello,</p>
        <p style="font-size: 16px;">We are pleased to inform you that the debugging process has been completed successfully. Below are the details:</p>
        <ul style="font-size: 16px; padding-left: 20px;">
        <li><strong>Status:</strong> Success</li>
        <li><strong>Date:</strong> ${new Date().toLocaleDateString()}</li>
        <li><strong>Time:</strong> ${new Date().toLocaleTimeString()}</li>
        </ul>
        <p style="font-size: 16px;">If you have any questions or need further assistance, feel free to reach out to us.</p>
        <p style="font-size: 16px;">Best regards,</p>
        <p style="font-size: 16px; font-weight: bold;">Your Team</p>
        <div style="text-align: center; margin-top: 20px;">
        <a href="https://example.com" style="display: inline-block; background-color: #4CAF50; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px;">Visit Our Website</a>
        </div>
    </div>
    `,
    };
    transporter
        .sendMail(mailoptions)
        .then(() => {
            res.status(200).json({ message: "success" });
            console.log(result);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = sendMail;
