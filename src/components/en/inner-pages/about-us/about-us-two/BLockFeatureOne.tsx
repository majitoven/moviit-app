import Image from "next/image"
import Link from "next/link"
const faq_data = [{
   id: 1,
   page: "home_six",
   question: "MISSION",
   answer: "Through a comprehensive approach, our mission is to transform the rental experience, providing trust and transparency for those seeking a new home in Madrid remotely.",
   showAnswer: false,
},
{
   id: 2,
   page: "home_six",
   question: "VISION",
   answer: "We are fully dedicated to protecting and promoting our clients' interests, acting as their eyes before intermediaries and agencies. We provide them with our honest advice on every rental opportunity.",
   showAnswer: false,
},
{
   id: 3,
   page: "home_six",
   question: "OUR SOCIAL NETWORK",
   answer: "Join our community by following us on our social media to stay updated with the latest news in Madrid.",
   showAnswer: false,
}
]

import titleShape from "@/assets/images/shape/shape_37.svg"
import featureImg from "@/assets/images/shape/eye.svg"

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-fifteen mt-120 xl-mt-100 mb-140 xl-mb-80 md-mt-60">
         <div className="container">
            <div className="row gx-xl-5">
               <div className="col-xl-6 col-lg-7 order-lg-last wow fadeInRight">
                  <div className="ms-xxl-5 ps-xl-4 ps-lg-5 md-mb-50">
                     <div className="title-one mb-45 lg-mb-20">
                        <h2 className="font-garamond star-shape">Renting remotely is easier with Moviit. <span className="star-shape"><Image src={titleShape} alt="" className="lazy-img" /></span></h2>
                     </div>
                     <div className="accordion-style-three">
                        <div className="accordion" id="accordionThree">
                           {faq_data.filter((items) => items.page === "home_six").map((item) => (
                              <div key={item.id} className="accordion-item accordion-item-mobile">
                                 <h2 className="accordion-header">
                                    <div style={{ fontSize: '40px' }} className={`accordion-button-special font-garamond special-title special-title-mobile`}
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
                        </div>
                     </div>
                     <Link href="/en/contact" className="btn-five mt-75 lg-mt-50">Contact Us</Link>
                  </div>
               </div>
               <div className="col-xl-6 col-lg-5 d-lg-flex wow fadeInLeft">
                  <div className="media-block h-100 w-100 pe-xl-5">
                     <div className="bg-img position-relative" style={{ backgroundImage: `url(/assets/images/media/perrito.jpg)` }}>
                        <Image src={featureImg} style={{ boxShadow: 'none' }} alt="" className="lazy-img shapes screen_01" />
                     </div>
                  </div>
               </div>
            </div>

            {/* <div className="wrapper mt-90 lg-mt-40">
               <div className="row justify-content-center">
                  <div className="col-md-4 col-sm-6">
                     <div className="counter-block-two text-center dark mt-30">
                        <div className="main-count sm font-garamond fw-500"><span className="counter"><Count number={720} /></span>k+</div>
                        <p className="fs-20 mt-15 md-mt-10">Project handover</p>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                     <div className="counter-block-two text-center dark mt-30">
                        <div className="main-count sm font-garamond fw-500"><span className="counter"><Count number={1.3} /></span>%</div>
                        <p className="fs-20 mt-15 md-mt-10">Low Interest</p>
                     </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                     <div className="counter-block-two text-center dark mt-30">
                        <div className="main-count sm font-garamond fw-500"><span className="counter">{<Count number={1.9} />}</span>mil+</div>
                        <p className="fs-20 mt-15 md-mt-10">Happy customers</p>
                     </div>
                  </div>
               </div>
            </div> */}
         </div>
      </div>
   )
}

export default BLockFeatureOne
