"use client"

import Link from "next/link"

const FaqArea = () => {

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
         id_name: "Company",
         title: "THE COMPANY",
         md_pt: true,
         faq: [
            {
               id: 1,
               question: "What does Moviit do?",
               answer: "We are Personal Shoppers. We conduct a personalized search for apartments/rooms in Madrid. We present available apartments that fit your conditions. We help you sign the contract online so you can arrive directly at your apartment.",
            },
            {
               id: 2,
               question: "Who needs Moviit?",
               answer: "Moviit is necessary for everyone who:\nIs not in Madrid.\nIs in Madrid but doesn't have time to search for an apartment.\nDoesn't have enough tools to find one.",
            },
            {
               id: 3,
               question: "Are you a real estate agency?",
               answer: "We are not a real estate agency. At Moviit, we work for our client. We negotiate on their behalf with the real estate agency/ apartment manager/ owner.",
            },
         ]
      },
      {
         id: 2,
         id_name: "Services",
         title: "SERVICES",
         faq: [
            {
               id: 4,
               question: "What happens if I decide to cancel the service?",
               answer: "You can cancel the service at any time. The deposit is non-refundable due to the work done up to that date.",
            },
            {
               id: 5,
               question: "Do you pay the monthly expenses for me?",
               answer: "No. Moviit's goal is to find you an apartment. Then we put you in touch with the real estate agency or apartment owner so they can assist you during your stay.",
            },
         ]
      },
      {
         id: 3,
         id_name: "Costs",
         title: "RENTAL COSTS AND PAYMENTS",
         faq: [
            {
               id: 9,
               question: "From 3 to 6 months: 50% of one month's rent",
               answer: "Deposit of 200 Euros (1 person)",
            },
            {
               id: 10,
               question: "From 7 to 9 months: 70% of one month's rent",
               answer: "Deposit of 200 Euros (1 person)",
            },
            {
               id: 11,
               question: "From 10 to 12 months: 1 month's rent",
               answer: "Deposit of 200 Euros (1 person)",
            },
            {
               id: 12,
               question: "In case of more than one person:",
               answer: "400 Euros deposit.",
            },
            {
               id: 13,
               question: "Extras after signing the contract:",
               answer: "Once the rental contract is signed, the remaining total amount is required. This applies to all cases.",
            },
            {
               id: 14,
               question: "Refunds and/or returns",
               answer: "In case of wanting to cancel the process, Moviit's deposit will be totally lost due to the work done up to that date. This applies to all cases.",
            },
            {
               id: 15,
               question: "How is the service paid?",
               answer: "By bank transfer.",
            },
         ]
      },
      {
         id: 4,
         id_name: "Furnishing",
         title: "FURNISHING COSTS AND PAYMENTS",
         faq: [
            {
               id: 16,
               question: "Is the furnishing service included in the rental service?",
               answer: "No. It is a separate service.",
            },
            {
               id: 17,
               question: "What is the cost of this extra service?",
               answer: "450 Euros. Payment in advance.",
            },
            {
               id: 18,
               question: "What does the service include?",
               answer: "The 450 Euros include:\nApartment cleaning\nFurniture assembly and placement\nReceipt and selection of furniture",
            },
         ]
      },
      {
         id: 5,
         id_name: "Terms",
         title: "TERMS & CONDITIONS",
         faq: [
            {
               id: 19,
               question: "What personal data do you collect and how do you use it?",
               answer: "We collect personal data such as name, email address, and phone number to personalize our services and keep you informed. This data is not shared with third parties without your consent.",
            },
            {
               id: 20,
               question: "How do you protect my personal information?",
               answer: "We use industry-standard security measures, such as encryption and firewalls, to protect your personal information against unauthorized access.",
            },
         ]
      },
      {
         id: 6,
         id_name: "Privacy",
         title: "PRIVACY POLICY",
         faq: [
            {
               id: 21,
               question: "What information do you collect?",
               answer: "We collect the following personal data through our contact form: full name, email address, phone number, type of property sought, start month of search, duration of stay, price range (minimum and maximum), and preferred neighborhoods.",
            },
            {
               id: 22,
               question: "What do you use the information for?",
               answer: "The personal data we collect is used exclusively for the following purposes: allowing our real estate agents to start the search for apartments based on your requirements and contacting you to provide information on available apartments that match your search.",
            },
            {
               id: 23,
               question: "Will you share my information with third parties?",
               answer: "We do not share, sell, or rent your personal data to third parties. Your information is shared only with our internal real estate agents for the purposes described in this Privacy Policy.",
            },
            {
               id: 24,
               question: "How do you protect my personal information?",
               answer: "We take reasonable measures to protect your personal data against loss, theft, and unauthorized use. However, no security system is infallible, and we cannot guarantee the absolute security of your information.",
            },
            {
               id: 25,
               question: "What are my rights regarding my information?",
               answer: "You have the right to access, rectify, or delete your personal data at any time. To exercise these rights, please contact us via email at: moviitmad@gmail.com.",
            },
            {
               id: 26,
               question: "Can you change this privacy policy?",
               answer: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. We recommend reviewing this policy periodically to stay informed about how we protect your information.",
            },
            {
               id: 27,
               question: "How can I contact you?",
               answer: "If you have any questions or concerns about this Privacy Policy or our information handling practices, please contact us at: Moviit, Email: moviitmad@gmail.com, Phone: +34 611 877 027.",
            },
         ]
      },
      {
         id: 7,
         id_name: "Others",
         title: "OTHERS",
         faq: [
            {
               id: 28,
               question: "Can you help me with the legal documentation necessary to rent an apartment?",
               answer: "Yes, we help you prepare and review all the necessary legal documentation for the rental process.",
            },
         ]
      },
   ]

   return (
      <div className="faq-section-two mt-40 xl-mt-100 mb-150 xl-mb-100 md-mt-60">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 wow fadeInLeft">
                  <div className="faq-sidebar">
                     <div className="bg-wrapper">
                        <ul className="style-none">
                           <li><Link href="#Company">1. <span>The Company</span></Link></li>
                           <li><Link href="#Services">2. <span>Services</span></Link></li>
                           <li><Link href="#Costs">3. <span>Rental Costs and Payments</span></Link></li>
                           <li><Link href="#Furnishing">4. <span>Furnishing Costs and Payments</span></Link></li>
                           <li><Link href="#Terms">5. <span>Terms & Conditions</span></Link></li>
                           <li><Link href="#Privacy">6. <span>Privacy Policies</span></Link></li>
                           <li><Link href="#Others">7. <span>Others</span></Link></li>
                        </ul>
                     </div>
                     <div className="bg-wrapper text-center mt-35">
                        <h4 className="mb-35">Can't find your <br />answer?</h4>
                        <Link href="/contact" className="btn-five">Contact Us</Link>
                     </div>
                  </div>
               </div>

               <div className="col-lg-8">
                  {inner_faq_data.map((item) => (
                     <div key={item.id} className="accordion-style-two no-bg p0 ms-xl-5">
                        <div className={`accordion-title text-uppercase fw-500 ${item.md_pt ? "md-pt-90" : "pt-90"}`} id={item.id_name}>{item.title}</div>
                        <div className="accordion p0" id={`accordion${item.id}`}>
                           {item.faq.map((faq: any, index: any) => (
                              <div key={index} className={`accordion-item ${faq.showAnswer ? "active" : ""}`}>
                                 <h2 className="accordion-header">
                                    <button className={`accordion-button ${faq.id === 1 ? "" : "collapsed"}`} type="button"
                                       data-bs-toggle="collapse" data-bs-target={`#collapse${faq.id}`} aria-expanded="true"
                                       aria-controls={`collapse${faq.id}`}>
                                       {faq.question}
                                    </button>
                                 </h2>
                                 <div id={`collapse${faq.id}`} className={`accordion-collapse collapse ${faq.id === 1 ? "show" : ""}`}
                                    data-bs-parent={`#accordion${item.id}`}>
                                    <div className="accordion-body">
                                       <p >{`${faq.answer}`}</p>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default FaqArea
