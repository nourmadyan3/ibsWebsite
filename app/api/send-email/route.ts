// app/api/send-email/route.ts
// IMPORTANT: You will need to install Nodemailer: npm install nodemailer
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, telephone, subject, message, from, to } = await request.json();

        console.log('EMAIL_USER:', process.env.EMAIL_USER);
        console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'SET' : 'NOT SET');

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your Gmail address
                pass: process.env.EMAIL_PASS  // Your Gmail app password
            }
        });

        // Email content
        const mailOptions = {
            from: from, // Sender's email
            to: to,     // Recipient's email
            subject: subject,
            text: `
Name: ${name}
Email: ${email}
Telephone: ${telephone}

Message:
${message}
            `,
            html: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Telephone:</strong> ${telephone}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
