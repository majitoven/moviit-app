import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, fullName, phone, propertyType, duration, month, minPrice, maxPrice, selectedBarrios } = await request.json();

  // Configurar el transporte de Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'mail.morphe.com.uy',  // Cambia esto al servidor SMTP de cPanel
    port: 465,                   // Puerto SMTP seguro (según la imagen)
    secure: true,                // true para 465 (SSL/TLS)
    auth: {
      user: 'hola@morphe.com.uy', // Tu email cPanel
      pass: 'Morphe2025!', // Usa una variable de entorno para la contraseña
    },
  });

  const mailOptions = {
    from: 'hola@morphe.com.uy',
    to: 'moviitmad@gmail.com',
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
