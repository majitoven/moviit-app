import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_CLIENT_SECRET,
  process.env.OAUTH_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN
});

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'moviitmad@gmail.com',
      subject: 'Web Moviit: Formulario de contacto',
      text: `Nombre: ${name}\nEmail: ${email}\nTelefono: ${phone}\nMensaje: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Mensaje enviado exitosamente' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json({ error: 'Error enviando email' }, { status: 500 });
  }
}
