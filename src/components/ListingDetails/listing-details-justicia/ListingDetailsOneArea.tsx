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
const ammenities_data: string[] = ["Aire Acondicionado", "Wifi", "Ascensor", "Luminoso", "Lavarropa"];
import thumb1 from "@/assets/images/listing/mati/02.jpg"
import thumb2 from "@/assets/images/listing/isa/01.jpg"
import thumb3 from "@/assets/images/listing/lu/01.jpg"
import Image, { StaticImageData } from "next/image"

interface DataType {
   id: number;
   page: string;
   tag: string;
   thumb?: StaticImageData
   title: string;
   link: string;
   address: string;
   price: number;
}[];
const property_data: DataType[] = [
   {
      id: 1,
      page: "home_3_property_2",
      tag: "ALQUILER",
      thumb: thumb1,
      link: '/listing_details_malasana',
      title: "Malasaña",
      address: "2 cuartos, 1 baño, 75mts²",
      price: 2200,
   },
   {
      id: 2,
      page: "home_3_property_2",
      tag: "ALQUILER",
      thumb: thumb2,
      link: '/listing_details_chamberi',
      title: "Chamberí",
      address: "1 cuarto, 1 baño, 55mts²",
      price: 1300,
   },
   {
      id: 3,
      page: "home_3_property_2",
      tag: "ALQUILER",
      thumb: thumb3,
      link: '/listing_details_bernabeu',
      title: "Bernabéu",
      address: "3 cuartos, 1 baño, 75mts²",
      price: 1550,
   },
];

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
                     <p className="fs-20 lh-lg">Paly llegó desde Argentina directo a su piso en Madrid. Vino a estudiar un Máster.</p>
                  </div>
                  <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
                     <CommonAmenities amenities={ammenities_data} />
                  </div>
                  <div className="property-video-tour mb-50">
                     <CommonPropertyVideoTour />
                  </div>
                  <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
                     <CommonNearbyList />
                  </div>
                  <CommonSimilarProperty propertyData={property_data} />
               </div>
               <Sidebar />
            </div>
         </div>
      </div>
   )
}

export default ListingDetailsOneArea
