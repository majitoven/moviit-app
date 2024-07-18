import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  // Configurar el transporte de Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // true para 465, false para otros puertos
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
  });

  const mailOptions = {
    from: process.env.ZOHO_USER,
    to: 'moviitmad@gmail.com',
    subject: 'Web Moviit: Formulario de contacto',
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Mensaje enviado exitosamente' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json({ error: 'Error enviando email' }, { status: 500 });
  }
}
