import AgencyFormTwo from "@/components/en/forms/AgencyFormTwo";
import Link from "next/link"

const AgencyDetailsSidebar = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="col-lg-4">
         <div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 md-mt-60">
            <div className="tour-schedule bg-white p-30 mb-40">
               <h5 className="mb-40">Contact Form</h5>
               <AgencyFormTwo />
               <Link href="tel:+34611877027" className="btn-eight sm text-uppercase w-100 rounded-0 tran3s">LLAMAR AHORA</Link>
            </div>

         </div>
      </div>
   )
}

export default AgencyDetailsSidebar
