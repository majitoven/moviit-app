"use client"
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";

const BreadcrumbThree = ({ title, link, link_title, sub_title, style }: any) => {

   const selectHandler = (e: any) => { };

   return (
      <div className={`inner-banner-four inner-banner position-relative ${style ? "z-1 pt-170 xl-pt-150 md-pt-130 pb-100 xl-pb-80 md-pb-50" : "pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80"}`} style={{ backgroundImage: `url(/assets/images/media/contacto.jpg)` }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <h3 className={`${style ? "xl-mb-30 md-mb-20" : "xl-mb-20 pt-15"} mb-35 special`}>{title}</h3>
               </div>
               <div className="col-lg-6" >
                  <div>
                     <p className="sub-heading special" style={{ color: 'white' }}>¿En qué podemos ayudarte? </p>

                  </div>
                  <div>
                     <p className="sub-heading special" style={{ color: 'white', fontSize: '20px' }}>
                        Ponte en contacto y te responderemos de inmediato.
</p>
                  </div>

               </div>
            </div>

         </div>
      </div>
   )
}

export default BreadcrumbThree
