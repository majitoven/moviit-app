import Image from "next/image"
import FaqOne from "@/components/common/faq/FaqOne"

import fancyImg_1 from "@/assets/images/shape/eye.svg"
import fancyImg_2 from "@/assets/images/assets/ils_metropolis.png"
import fancyImg_3 from "@/assets/images/assets/screen_02.jpg"

const FancyBannerOne = () => {

   return (
      <div className="fancy-banner-four position-relative z-1 xl-mt-150 lg-mt-120 md-mt-40">
         <div className="container">
            <div className="bg-line position-relative z-1 pt-110 xl-pt-80 pb-140 xl-pb-100">
               <div className="row">
                  <div className="col-xl-8 col-lg-9 ms-auto wow fadeInRight">
                     <div className="ps-xxl-5">
                        <div className="title-one mb-50 lg-mb-30">
                           <h2 className="font-garamond fs-xl">Aseguramos el mejor match para ti.</h2>
                        </div>
                        <div className="row">
                           <div className="col-lg-4">
                              <Image src={fancyImg_1} alt="" className="lazy-img ms-auto d-none d-lg-block me-auto mt-20" />
                           </div>
                           <div className="col-lg-8">
                              <p className="fs-24 color-dark" style={{marginBottom: '0px'}}><b>¿Cuál es el costo de nuestro servicio?</b> </p>
                              <p className="fs-20 color-dark">Nuestra tarifa depende del tipo de contrato:</p>
                              <div className="accordion accordion-style-one mt-40" id="accordionOne">
                                 <FaqOne />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Image src={fancyImg_2} alt="" className="lazy-img shapes illustration" />
      </div>
   )
}

export default FancyBannerOne
