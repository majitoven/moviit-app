"use client"
import NiceSelect from "@/ui/NiceSelect"
import MediaGallery from "./MediaGallery"
import Review from "@/components/inner-pages/agency/agency-details/Review"
import Sidebar from "./Sidebar"
import CommonBanner from "./CommonBanner"
import CommonPropertyOverview from "./CommonPropertyOverview"
import CommonPropertyFeatureList from "../listing-details-common/CommonPropertyFeatureList"
import CommonAmenities from "../listing-details-common/CommonAmenities"
import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour"
import CommonPropertyFloorPlan from "../listing-details-common/CommonPropertyFloorPlan"
import CommonNearbyList from "./CommonNearbyList"
import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty"
import CommonProPertyScore from "../listing-details-common/CommonProPertyScore"
import CommonLocation from "../listing-details-common/CommonLocation"
import CommonReviewForm from "../listing-details-common/CommonReviewForm"

const ListingDetailsOneArea = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="listing-details-one theme-details-one  pt-100 pl-40 pr-40 lg-pt-150 pb-150 xl-pb-120">
         <div className="container">
            <CommonBanner />
            <MediaGallery />
            <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
               <h4 className="sub-title-one mb-40 lg-mb-20">Detalles</h4>
               <CommonPropertyOverview />
            </div>
            <div className="row">
               <div className="col-xl-8">
                  <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
                     <h4 className="mb-20">Descripción</h4>
                     <p className="fs-20 lh-lg">Lu y Gastón llegaron directo a su piso en Madrid con sus perritas. Vinieron a trabajar.
</p>
                  </div>
                  <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
                     <CommonAmenities />
                  </div>
                  <div className="property-video-tour mb-50">
                     <CommonPropertyVideoTour />
                  </div>
                  <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
                     <CommonNearbyList />
                  </div>
                  <CommonSimilarProperty />
               </div>
               <Sidebar />
            </div>
         </div>
      </div>
   )
}

export default ListingDetailsOneArea
