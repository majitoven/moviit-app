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
      <div className="block-feature-eight position-relative z-1 mt-170 xl-mt-120">
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
                              <h3>No solo te buscamos casa, también te la <span>amueblamos<Image src={featureImg_5} alt="" className="lazy-img" /></span>.</h3>
                           </div>
                           <p className="fs-22 mt-45 mb-50 xl-mb-40 pe-xxl-5">Preparamos tu casa con los muebles imprescindibles para que luego le des tu toque personal.</p>
                           <h4 className="font-garamond special-title">Proceso:</h4>
                           <ul className="list-style-one fs-22 color-dark style-none mt-30 mb-50">
                              <li>Selección de muebles imprescindibles de nuestro catálogo (colchones, sofá, ropa de cama, toallas y vajilla).</li>
                              <li>Limpieza de piso.</li>
                              <li>Recibimiento de muebles. </li>
                              <li>
                                 Armado y colocación de muebles.</li>
                              <li>
                                 Realización de material fotográfico: fotos y videos.</li>
                           </ul>
                           <h4 className="font-garamond special-title">Costo: 450 €</h4>
                           <ul className="list-style-one fs-22 color-dark style-none mt-30">
                              <li>Pago por adelantado.</li>
                              <li>El presupuesto incluye: Limpieza de piso (50€) + Armado y colocación (200€) + Recibimiento y selección de muebles (200€)</li>
                           </ul>
                           <div className="mt-40 lg-mt-40">
                              <Link href="/contact" className="btn-two">Me interesa</Link>
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
