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
      question: "De 3 - 6 meses: 50% de 1 mes de alquiler",
      answer: "Seña de 200 Euros ( 1 persona )",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_2_faq_1",
      question: "De 7 - 9 meses: 70% de 1 mes de alquiler",
      answer: "Seña de 200 Euros ( 1 persona )",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_2_faq_1",
      question: "De 10 - 12 meses: 1 mes de alquiler",
      answer: "Seña de 200 Euros (1 persona)",
      showAnswer: false,
   },
   {
      id: 4,
      page: "home_2_faq_1",
      question: "Aclaraciones",
      answer: "En caso de ser más de 1 persona se requiere 400 Euros de seña. Una vez firmado el contrato de alquiler se requiere el resto del monto total.",
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
      question: "Who we are?",
      answer: "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_six",
      question: "What’s our goal",
      answer: "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_six",
      question: "Our vision",
      answer: "Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .",
      showAnswer: false,
   },
];

export default faq_data;