import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

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
