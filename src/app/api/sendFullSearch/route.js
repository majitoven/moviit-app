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
