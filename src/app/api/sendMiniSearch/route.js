import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, fullName, phone, propertyType, duration, month, minPrice, maxPrice, selectedBarrios } = await request.json();

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
    to: 'mventura@loopstudio.dev',
    subject: 'Web Moviit: Formulario de búsqueda rápida',
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

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email enviado exitosamente' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json({ error: 'Error enviando email' }, { status: 500 });
  }
}
