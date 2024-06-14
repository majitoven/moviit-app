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

const inner_faq_data:DataType[] = [
   {
      id: 1,
      id_name: "Empresa",
      title: "LA EMPRESA",
      md_pt:true,
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
            question: "PRUEBA: Ustedes me pagan las expensas mensualmente?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
            answer: " -Seña de 200 Euros (1 persona)",
         },
         {
            id: 11,
            question: "En caso de ser más de 1 persona:",
            answer: "400 Euros de seña.",
         },
         {
            id: 11,
            question: "Extras firmado el contrato:",
            answer: "Una vez firmado el contrato de alquiler se requiere el resto del monto total. Aplica para todos los casos.",
         },
         {
            id: 11,
            question: "Reembolsos y/o devoluciones",
            answer: "En caso de querer abandonar el proceso, la seña de Moviit será totalmente perdida debido al trabajo realizado hasta la fecha. Aplica para todos los casos.",
         },
         {
            id: 11,
            question: "PRUEBA: Como se abona el servicio?",
            answer: "Transferencia????",
         },
      ]
   },
   {
      id: 4,
      id_name: "Amoblamiento",
      title: "COSTOS Y PAGOS AMOBLAMIENTO",
      faq: [
         {
            id: 12,
            question: "El servicio de amueblamiento está incluido en el servicio de alquiler?",
            answer: "No. Es un servicio aparte. ",
         },
         {
            id: 13,
            question: "Cual el costo de este servicio extra?",
            answer: "450 Euros. Pago por adelantado.",
         },
         {
            id: 14,
            question: "Que incluye el servicio?",
            answer: "Los 450 Euros se desglosan en: \nLimpieza de piso 50 Euros \nArmado y colocación 200 Euros \nRecibimiento y selección de muebles 200 Euros",
         },
      ]
   },
   {
      id: 5,
      id_name: "Terminos",
      title: "TERMINOS & CONDICIONES",
      faq: [
         {
            id: 15,
            question: "PRUEBA 1?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 16,
            question: "PRUEBA 2?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
      ]
   },
   {
      id: 6,
      id_name: "Otros",
      title: "OTROS",
      faq: [
         {
            id: 17,
            question: "PRUEBA: ??",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 18,
            question: "PRUEBA: ??",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
      ]
   },
]

export default inner_faq_data;