interface DataType {
   id: number;
   id_name: string;
   title: string;
   md_pt?: boolean;
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
            question: "Contrato temporal (de 1 - 5 meses): 50% de 1 mes de alquiler",
            answer: "Seña de 200€ que se descontará del % (1 persona)",
         },
         {
            id: 10,
            question: "Contrato temporal (de 6 - 11 meses): 70% de 1 mes de alquiler",
            answer: "Seña de 200€ que se descontará del % (1 persona)",
         },
         {
            id: 11,
            question: "Contrato anual (1 año): 1 mes de alquiler",
            answer: "Seña de 200€ que se descontará del % (1 persona)",
         },
         {
            id: 12,
            question: "En caso de ser más de 1 persona:",
            answer: "200€ de seña por persona que se descontará del % .",
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
      id_name: "Asesoramiento",
      title: "SERVICIO DE ASESORAMIENTO INMOBILIARIO",
      faq: [
         {
            id: 16,
            question: "¿El servicio de asesoramiento inmobiliario está incluido en el servicio de alquiler?",
            answer: "El servicio de asesoramiento inmobiliario está incluido en el paquete de alquiler. Es un beneficio adicional que ofrecemos a nuestros clientes de Moviit.",
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
      id_name: "Privacidad",
      title: "POLÍTICA DE PRIVACIDAD",
      faq: [
         {
            id: 21,
            question: "¿Qué información recopilan?",
            answer: "Recopilamos los siguientes datos personales a través de nuestro formulario de contacto: nombre completo, dirección de correo electrónico, número de teléfono, tipo de propiedad buscada, mes de inicio de búsqueda, duración de la estancia, rango de precios (mínimo y máximo), y barrios preferidos.",
         },
         {
            id: 22,
            question: "¿Para qué usan la información?",
            answer: "Los datos personales que recopilamos se utilizan exclusivamente para los siguientes fines: permitir que nuestros agentes inmobiliarios inicien la búsqueda de apartamentos en base a sus requisitos y contactar con usted para proporcionar información sobre los apartamentos disponibles que coincidan con su búsqueda.",
         },
         {
            id: 23,
            question: "¿Compartirán mi información con terceros?",
            answer: "No compartimos, vendemos ni alquilamos sus datos personales a terceros. Su información se comparte únicamente con nuestros agentes inmobiliarios internos para los fines descritos en esta Política de Privacidad.",
         },
         {
            id: 24,
            question: "¿Cómo protegen mi información personal?",
            answer: "Tomamos medidas razonables para proteger sus datos personales contra pérdida, robo y uso no autorizado. Sin embargo, ningún sistema de seguridad es infalible y no podemos garantizar la seguridad absoluta de su información.",
         },
         {
            id: 25,
            question: "¿Cuáles son mis derechos sobre mi información?",
            answer: "Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. Para ejercer estos derechos, por favor, póngase en contacto con nosotros a través del correo electrónico: moviitmad@gmail.com.",
         },
         {
            id: 26,
            question: "¿Pueden cambiar esta política de privacidad?",
            answer: "Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en nuestro sitio web. Le recomendamos revisar esta política periódicamente para estar informado sobre cómo protegemos su información.",
         },
         {
            id: 27,
            question: "¿Cómo puedo contactar con ustedes?",
            answer: "Si tiene alguna pregunta o inquietud sobre esta Política de Privacidad o sobre nuestras prácticas de manejo de información, por favor, póngase en contacto con nosotros en: Moviit, Correo electrónico: moviitmad@gmail.com, Teléfono: +34 611 877 027.",
         },
      ]
   },
   {
      id: 7,
      id_name: "Otros",
      title: "OTROS",
      faq: [
         {
            id: 28,
            question: "¿Pueden ayudarme con la documentación legal necesaria para alquilar un piso?",
            answer: "Sí, te ayudamos a preparar y revisar toda la documentación legal necesaria para el proceso de alquiler.",
         },
      ]
   },
]

export default inner_faq_data;
