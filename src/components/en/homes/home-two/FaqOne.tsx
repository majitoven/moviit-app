"use client"

interface DataType {
    id: number;
    page: string;
    question: string;
    answer: string;
    showAnswer: boolean;
 }
 
 const faq_data: DataType[] = [
    {
       id: 1,
       page: "home_2_faq_1",
       question: "Temporary contract (1 - 5 months): 50% of 1 month's rent",
       answer: "Deposit of 200€ from the % (1 person)",
       showAnswer: false,
    },
    {
       id: 2,
       page: "home_2_faq_1",
       question: "Temporary contract (6 - 11 months): 70% of 1 month's rent",
       answer: "Deposit of 200€ from the % (1 person)",
       showAnswer: false,
    },
    {
       id: 3,
       page: "home_2_faq_1",
       question: "Annual contract (1 year): 1 month's rent",
       answer: "Deposit of 200€ from the % (1 person)",
       showAnswer: false,
    },
    {
       id: 4,
       page: "home_2_faq_1",
       question: "Clarifications",
       answer: "If there is more than 1 person, a deposit of 200€ from the % per person is required. Once the rental contract is signed, the remaining balance is due.",
       showAnswer: false,
    },
 ]

const FaqOne = () => {

   return (
      <>
         {faq_data.filter((items) => items.page === "home_2_faq_1").map((item) => (
            <div key={item.id} className="accordion-item">
               <h2 className="accordion-header">
                  <button className={`accordion-button ${item.id === 1 ? "" : "collapsed"}`} type="button"
                     data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="true"
                     aria-controls={`collapse${item.id}`}>
                     {item.question}
                  </button>
               </h2>
               <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${item.id === 1 ? "show" : ""}`}
                  data-bs-parent="#accordionOne">
                  <div className="accordion-body">
                     <p>{item.answer}</p>
                  </div>
               </div>
            </div>
         ))}
      </>
   )
}

export default FaqOne
