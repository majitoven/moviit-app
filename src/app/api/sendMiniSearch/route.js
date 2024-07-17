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
  const { email, fullName, phone, propertyType, duration, month, minPrice, maxPrice, selectedBarrios } = await request.json();

  try {
    const accessTokenResponse = await oauth2Client.getAccessToken();
    const accessToken = accessTokenResponse.token;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mventura@loopstudio.dev',
      subject: 'Web Moviit: Formulario de search rápido',
      text: `
        Nombre completo: ${fullName}
        Email: ${email}
        Tipo de propiedad: ${propertyType}
        Mes entrante: ${month}
        Teléfono móvil: ${phone}
        Duración: ${duration}
        Min precio: ${minPrice}
        Max precio: ${maxPrice}
        Barrios: ${selectedBarrios?.length ? selectedBarrios.join(', ') : '-'}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);

    if (error.response && error.response.data) {
      // Handle specific errors, such as token expiration or revocation
      if (error.response.data.error === 'invalid_grant') {
        console.error('Refresh token has expired or been revoked. Re-authentication is required.');
        // Logic to prompt user re-authentication
      }
    }

    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
