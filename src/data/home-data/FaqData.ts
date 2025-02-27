interface DataType {
   id: number;
   page: string
   question: string;
   answer: string;
   showAnswer: boolean;
}

const faq_data:DataType[] = [
   {
      id: 1,
      page: "home_2_faq_1",
      question: "Contrato temporal (1 - 5 meses): 50% de 1 mes de alquiler",
      answer: "Seña de 200€ que se descontará del % (1 persona)",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_2_faq_1",
      question: "Contrato temporal (6 - 11 meses): 70% de 1 mes de alquiler",
      answer: "Seña de 200€ que se descontará del % (1 persona)",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_2_faq_1",
      question: "Contrato anual (1 año): 1 mes de alquiler",
      answer: "Seña de 200€ que se descontará del % (1 persona)",
      showAnswer: false,
   },
   {
      id: 4,
      page: "home_2_faq_1",
      question: "Aclaraciones",
      answer: "*En caso de ser más de 1 persona se requiere 200 Euros por persona de seña. Una vez firmado el contrato de alquiler se requiere el monto restante.",
      showAnswer: false,
   },

   // home_2_faq_2

   {
      id: 1,
      page: "home_2_faq_2",
      question: "How does the free trial work?",
      answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_2_faq_2",
      question: "How find different criteria in your process?",
      answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_2_faq_2",
      question: "What do you look for in a founding team?",
      answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.",
      showAnswer: false,
   },
   {
      id: 4,
      page: "home_2_faq_2",
      question: "Do you recommend Pay as you go or Pre pay?",
      answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.",
      showAnswer: false,
   },

   // home_six
   
   {
      id: 1,
      page: "home_six",
      question: "MISIÓN",
      answer: "A través de un enfoque integral, nuestra misión es transformar la experiencia de alquiler, brindando confianza y transparencia a quienes buscan un nuevo hogar en Madrid a distancia.",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_six",
      question: "VISIÓN",
      answer: "Nos dedicamos por completo a proteger y promover los intereses de nuestros clientes, actuando como sus ojos ante intermediarios y agencias inmobiliarias. Les brindamos nuestro asesoramiento honesto sobre cada oportunidad de alquiler.",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_six",
      question: "NUESTRA RED SOCIAL",
      answer: "Forma parte de nuestra comunidad siguiéndonos en nuestras redes sociales para enterarte de las últimas noticias en Madrid.",
      showAnswer: false,
   },
];

export default faq_data;