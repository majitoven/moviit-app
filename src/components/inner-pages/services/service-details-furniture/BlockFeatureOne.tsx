import Image from "next/image"
import Link from "next/link";

import featureImg_1 from "@/assets/images/shape/eye.svg";
import featureImg_2 from "@/assets/images/perfil-2.png";
import featureImg_3 from "@/assets/images/shape/nube_1_alt.svg";
import featureImg_4 from "@/assets/images/perfil-1.png";
import featureImg_5 from "@/assets/images/shape/title_shape_05.svg";

const BlockFeatureOne = () => {
   return (
      <div className="block-feature-eight position-relative z-1 mt-120 xl-mt-120 pr-40 pl-40 md-mt-80 mb-100">
         <div className="container">
            <div className="position-relative">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="pe-xl-5 wow fadeInLeft">
                        <div className="row align-items-end mb-30">
                           <div className="col-6">
                              <div className="media-block position-relative z-1">
                                 <Image src={featureImg_2} alt="" className="lazy-img main-img w-100" />
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="media-block position-relative z-1">
                                 <Image src={featureImg_4} alt="" className="lazy-img main-img w-100" />
                              </div>
                           </div>
                        </div>
           
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="block-two ms-xxl-5 wow fadeInRight">
                        <div className="bg-wrapper md-mt-60">
                           <div className="title-one m0">
                              <h3>Además de la búsqueda, la <span>asesoría<Image src={featureImg_5} alt="" className="lazy-img" /></span> es incluso más importante.</h3>
                           </div>
                           <p className="fs-22 mt-45 mb-50 xl-mb-40 pe-xxl-5">Además de ayudarte a elegir la mejor opción te asesoramos para aumentar tus
                           posibilidades de ser aceptado por el propietario.</p>
                           <h4 className="font-garamond special-title">Perfil del inquilino:</h4>
                           <ul className="list-style-one fs-22 color-dark style-none mt-30 mb-50">
                              <li>Te damos la oportunidad de ser tu mejor versión.</li>
                              <li>Te ayudamos a filtrar la documentación a presentar.</li>
                              <li>Elaboramos la mejor estrategia para que seas aceptado. </li>
                              
                           </ul>
               
                           <div className="mt-40 lg-mt-40">
                              <Link href="/contact" className="btn-two">Quiero asesorarme</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlockFeatureOne
