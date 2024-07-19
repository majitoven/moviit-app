import Image from "next/image"
import Link from "next/link";

import featureImg_1 from "@/assets/images/shape/eye.svg";
import featureImg_2 from "@/assets/images/media/canasto.jpg";
import featureImg_3 from "@/assets/images/shape/nube_1_alt.svg";
import featureImg_4 from "@/assets/images/media/camadesordenada.jpg";
import featureImg_5 from "@/assets/images/shape/title_shape_05.svg";
import featureImg_6 from "@/assets/images/media/planta.jpg";

const BlockFeatureOne = () => {
   return (
      <div className="block-feature-eight position-relative z-1 mt-120 xl-mt-120 pr-40 pl-40 md-mt-80">
         <div className="container">
            <div className="position-relative">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="pe-xl-5 wow fadeInLeft">
                        <div className="row align-items-end mb-30">
                           <div className="col-6">
                              <div className="media-block position-relative z-1">
                                 <Image src={featureImg_1} alt="" className="lazy-img shapes shape_03" />
                                 <Image src={featureImg_2} alt="" className="lazy-img main-img w-100" />
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="media-block position-relative z-1">
                                 <Image src={featureImg_4} alt="" className="lazy-img main-img w-100" />
                              </div>
                           </div>
                        </div>
                        <div className="row align-items-end">
                           <div className="col-12">
                              <div className="media-block position-relative z-1">
                                 <Image src={featureImg_6} alt="" className="lazy-img main-img w-100" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="block-two ms-xxl-5 wow fadeInRight">
                        <div className="bg-wrapper md-mt-60">
                           <div className="title-one m0">
                              <h3>We don't just find you a home, we also <span>furnish it<Image src={featureImg_5} alt="" className="lazy-img" /></span>.</h3>
                           </div>
                           <p className="fs-22 mt-45 mb-50 xl-mb-40 pe-xxl-5">We prepare your home with essential furniture so that you can then add your personal touch.</p>
                           <h4 className="font-garamond special-title">Process:</h4>
                           <ul className="list-style-one fs-22 color-dark style-none mt-30 mb-50">
                              <li>Selection of essential furniture from our catalog (mattresses, sofa, bedding, towels, and dishes).</li>
                              <li>Cleaning of the apartment.</li>
                              <li>Receiving furniture. </li>
                              <li>Assembly and placement of furniture.</li>
                              <li>Creation of photographic material: photos and videos.</li>
                           </ul>
                           <h4 className="font-garamond special-title">Cost: 450 €</h4>
                           <ul className="list-style-one fs-22 color-dark style-none mt-30">
                              <li>Payment in advance.</li>
                              <li>The budget includes: Cleaning of the apartment, Assembly and placement, Receiving and selection of furniture.</li>
                           </ul>
                           <div className="mt-40 lg-mt-40">
                              <Link href="/contact" className="btn-two">I'm interested</Link>
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
