"use client"
import NiceSelect from "@/ui/NiceSelect";
import Link from "next/link";

const BreadcrumbFour = ({ title, link, link_title, subTitle, subTitle2, style, background }: any) => {

   const selectHandler = (e: any) => { };

   return (
      <div className={`inner-banner-four inner-banner position-relative ${style ? "z-1 pt-170 xl-pt-150 md-pt-130 pb-100 xl-pb-80 md-pb-50" : "pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80"}`} style={{ backgroundImage: background }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <h3 className={`${style ? "xl-mb-30 md-mb-20" : "xl-mb-20 pt-15"} mb-35 special`}>{title}</h3>
               </div>
               {subTitle && (
             <div className="col-lg-6" >
             <div>
                <p className="sub-heading special" style={{ color: 'white', fontWeight: 450 }}>{subTitle}
                </p>

             </div>
             <div>
                <p className="sub-heading special" style={{ color: 'white', fontSize: '22px' }}>
                   {subTitle2}
                </p>
             </div>

          </div>
               )}
  
            </div>

         </div>
      </div>
   )
}

export default BreadcrumbFour
