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
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
            question: "Can a home depreciate in value?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 6,
            question: "Is an older home as good a value as a new home?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 7,
            question: "What is a broker?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 8,
            question: "Can I pay my own taxes and insurance?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
      ]
   },
   {
      id: 3,
      id_name: "Costos",
      title: "COSTOS",
      faq: [
         {
            id: 9,
            question: "How does the free trial work?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 10,
            question: "How do you weigh different criteria in your process?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 11,
            question: "Refund & Frauds",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
      ]
   },
   {
      id: 4,
      id_name: "Payments",
      title: "PAYMENTS",
      faq: [
         {
            id: 12,
            question: "Which payment method is supported?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 13,
            question: "Is my card is secure here?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 14,
            question: "Can I provide cheque to my client for payment?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
            question: "How does the free trial work?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 16,
            question: "How do you weigh different criteria in your process?",
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
            question: "Can a home depreciate in value?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
         {
            id: 18,
            question: "Is an older home as good a value as a new home?",
            answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
         },
      ]
   },
]

export default inner_faq_data;