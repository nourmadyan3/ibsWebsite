// app/api/send-email/route.ts
// IMPORTANT: You will need to install Nodemailer: npm install nodemailer
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, telephone, subject, message, to } = await request.json();

    console.log("Received form data:", { name, email, telephone, subject, message, to });

    // Basic validation
    if (!name || !email || !subject || !message || !to) {
        console.error("Missing required fields in form data.");
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Configure your email transporter
    // IMPORTANT: Ensure these environment variables are correctly set in your .env.local
    // and that you restart your server after changing them.
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587', 10),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        },
        // Add a debug option to see more verbose logs from Nodemailer
        logger: true, // Logs to console
        debug: true // Enables debug output
    });

    console.log("Nodemailer Transporter Config:", {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE,
        user: process.env.EMAIL_USER,
        // WARNING: Do NOT log process.env.EMAIL_PASSWORD in production!
        // pass: process.env.EMAIL_PASSWORD ? '[REDACTED]' : 'NOT SET'
    });

    try {
        const mailOptions = {
            from: process.env.EMAIL_FROM || 'no-reply@yourdomain.com', // Your 'from' email address
            to: to, // The recipient email from the form
            replyTo: email, // Set the user's email as reply-to
            subject: `New Contact Form Inquiry: ${subject}`,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telephone:</strong> ${telephone || 'N/A'}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        console.log("Sending mail with options:", mailOptions);

        await transporter.sendMail(mailOptions);

        console.log("Email sent successfully!");
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        // Log more details about the error if available
        if (error instanceof Error) {
            console.error('Nodemailer error details:', error.message);
        }
        return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
}
