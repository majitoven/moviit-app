import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const {
    phone,
    email,
    fullName,
    country,
    propertyType,
    duration,
    minPrice,
    maxPrice,
    selectedBarrios,
    bedrooms,
    bathrooms,
    furnished,
    interiorExterior,
    minSqFeet,
    maxSqFeet,
    amenities,
    description,
    month
  } = await request.json();

  // Configurar el transporte de Nodemailer
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
    subject: 'Web Moviit: Formulario de búsqueda completo',
    text: `
      Nombre completo: ${fullName}
      País: ${country}
      Teléfono móvil: ${phone}
      Email: ${email}
      Tipo de propiedad: ${propertyType}
      Mes entrante: ${month}
      Duración: ${duration}
      Min precio: ${minPrice}
      Max precio: ${maxPrice}
      Barrios: ${selectedBarrios?.length ? selectedBarrios.join(', ') : '-'}
      Habitaciones: ${bedrooms}
      Baños: ${bathrooms}
      Amueblado: ${furnished}
      Interior/Exterior: ${interiorExterior}
      Min metros cuadrados: ${minSqFeet}
      Max metros cuadrados: ${maxSqFeet}
      Amenities: ${Object.entries(amenities).filter(([key, value]) => value).map(([key]) => key).join(', ')}
      Descripción: ${description}
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
