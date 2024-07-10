interface DataType {
   id: number;
   id_name: string;
   title: string;
   md_pt?:boolean;
   faq: {
      id: number;
      question: string;
      answer: string;
   }[];
}

const inner_faq_data: DataType[] = [
   {
      id: 1,
      id_name: "Empresa",
      title: "LA EMPRESA",
      md_pt: true,
      faq: [
         {
            id: 1,
            question: "¿Qué hacen en Moviit?",
            answer: "Somos Personal Shoppers. Hacemos una búsqueda personalizada de pisos/habitaciones en Madrid. Te presentamos los pisos disponibles que se adapten a tus condiciones. Te ayudamos a firmar contrato online para que llegues directo a tu piso.",
         },
         {
            id: 2,
            question: "¿Quién necesita de Moviit?",
            answer: "Moviit es necesario para todos aquellos que:\nNo están en Madrid. \nEstán en Madrid pero no tienen tiempo para buscar piso. No tienen las herramientas suficientes para encontrarlo.",
         },
         {
            id: 3,
            question: "¿Son una inmobiliaria?",
            answer: "No somos inmobiliaria. En Moviit trabajamos para nuestro cliente. Negociamos en nombre de él con: Inmobiliaria/ Gestor de piso/ Propietario.",
         },

      ]
   },
   {
      id: 2,
      id_name: "Servicios",
      title: "SERVICIOS",
      faq: [
         {
            id: 4,
            question: "¿Qué pasa si decido abandonar el servicio?",
            answer: "Puedes abandonar el servicio cuando quieras. La seña no se devuelve debido al trabajo realizado hasta la fecha.",
         },
         {
            id: 5,
            question: "¿Ustedes me pagan las expensas mensualmente?",
            answer: "No. El objetivo de Moviit es conseguirte un piso luego te ponemos en contacto con la inmobiliaria o propietario de piso para que puedan asistirte durante tu estadía.",
         },
      ]
   },
   {
      id: 3,
      id_name: "Costos",
      title: "COSTOS Y PAGOS ALQUILER",
      faq: [
         {
            id: 9,
            question: "De 3 -6 meses: 50% de 1 mes de alquiler",
            answer: "Seña de 200 Euros (1 persona)",
         },
         {
            id: 10,
            question: "De 7 - 9 meses: 70% de 1 mes de alquiler",
            answer: "Seña de 200 Euros (1 persona)",
         },
         {
            id: 11,
            question: "De 10 - 12 meses: 1 mes de alquiler",
            answer: "Seña de 200 Euros (1 persona)",
         },
         {
            id: 12,
            question: "En caso de ser más de 1 persona:",
            answer: "400 Euros de seña.",
         },
         {
            id: 13,
            question: "Extras firmado el contrato:",
            answer: "Una vez firmado el contrato de alquiler se requiere el resto del monto total. Aplica para todos los casos.",
         },
         {
            id: 14,
            question: "Reembolsos y/o devoluciones",
            answer: "En caso de querer abandonar el proceso, la seña de Moviit será totalmente perdida debido al trabajo realizado hasta la fecha. Aplica para todos los casos.",
         },
         {
            id: 15,
            question: "¿Cómo se abona el servicio?",
            answer: "Mediante transferencia bancaria.",
         },
      ]
   },
   {
      id: 4,
      id_name: "Amueblamiento",
      title: "COSTOS Y PAGOS AMUEBLAMIENTO",
      faq: [
         {
            id: 16,
            question: "¿El servicio de amueblamiento está incluido en el servicio de alquiler?",
            answer: "No. Es un servicio aparte.",
         },
         {
            id: 17,
            question: "¿Cuál es el costo de este servicio extra?",
            answer: "450 Euros. Pago por adelantado.",
         },
         {
            id: 18,
            question: "¿Qué incluye el servicio?",
            answer: "Los 450 Euros incluyen: \nLimpieza de piso \nArmado y colocación \nRecibimiento y selección de muebles",
         },
      ]
   },
   {
      id: 5,
      id_name: "Terminos",
      title: "TÉRMINOS & CONDICIONES",
      faq: [
         {
            id: 19,
            question: "¿Qué datos personales recopilan y cómo los usan?",
            answer: "Recopilamos datos personales como nombre, dirección de correo electrónico y número de teléfono para personalizar nuestros servicios y mantenerte informado. Estos datos no se comparten con terceros sin tu consentimiento.",
         },
         {
            id: 20,
            question: "¿Cómo protegen mi información personal?",
            answer: "Utilizamos medidas de seguridad estándar de la industria, como el cifrado y firewalls, para proteger tu información personal contra accesos no autorizados.",
         },
      ]
   },
   {
      id: 6,
      id_name: "Otros",
      title: "OTROS",
      faq: [
         {
            id: 21,
            question: "¿Pueden ayudarme con la documentación legal necesaria para alquilar un piso?",
            answer: "Sí, te ayudamos a preparar y revisar toda la documentación legal necesaria para el proceso de alquiler.",
         },
      ]
   },
]

export default inner_faq_data;
