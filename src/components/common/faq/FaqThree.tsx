"use client"
import faq_data from '@/data/home-data/FaqData';

const FaqThree = () => {

   return (
      <>
         {faq_data.filter((items) => items.page === "home_six").map((item) => (
            <div key={item.id} className="accordion-item accordion-item-mobile">
               <h2 className="accordion-header">
                  <div style={{fontSize: '40px'}} className={`accordion-button-special font-garamond special-title special-title-mobile`}
                >
                     {item.question}
                  </div>
               </h2>
               <div id={`collapse${item.id}`} className={`accordion-collapse collapse show`}
                  data-bs-parent="#accordionThree">
                  <div className="accordion-body">
                     <p>{item.answer}</p>
                  </div>
               </div>
            </div>
         ))}
      </>
   )
}

export default FaqThree
