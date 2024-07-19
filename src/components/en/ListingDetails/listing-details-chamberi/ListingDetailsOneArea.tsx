"use client"
import MediaGallery from "./MediaGallery"
import Sidebar from "../listing-details-justicia/Sidebar"
import CommonBanner from "./CommonBanner"
import CommonPropertyOverview from "./CommonPropertyOverview"
import CommonAmenities from "../listing-details-common/CommonAmenities"
import CommonPropertyVideoTour from "../listing-details-common/CommonPropertyVideoTour"
import CommonNearbyList from "./CommonNearbyList"
import CommonSimilarProperty from "../listing-details-common/CommonSimilarProperty"

const amenities_data: string[] = ["Air Cond.", "Heating", "Balcony", "Wifi", "Elevator", "Bright", "Washer"];
import thumb1 from "@/assets/images/listing/mati/02.jpg"
import thumb2 from "@/assets/images/listing/paly/01.jpg"
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
      tag: "RENT",
      thumb: thumb1,
      link: '/listing_details_malasana',
      title: "Malasaña",
      address: "2 rooms, 1 bath, 75m²",
      price: 2200,
   },
   {
      id: 2,
      page: "home_3_property_2",
      tag: "RENT",
      thumb: thumb2,
      link: '/listing_details_malasana',
      title: "Justicia",
      address: "2 rooms, 2 baths, 60m²",
      price: 1650,
   },
   {
      id: 3,
      page: "home_3_property_2",
      tag: "RENT",
      thumb: thumb3,
      link: '/listing_details_bernabeu',
      title: "Bernabéu",
      address: "3 rooms, 1 bath, 75m²",
      price: 1550,
   },
];

const ListingDetailsOneArea = () => {

   const selectHandler = (e: any) => { };

   return (
      <div className="listing-details-one theme-details-one  pt-100 pl-40 pr-40 lg-pt-150 pb-150 xl-pb-120 md-pt-100">
         <div className="container">
            <CommonBanner />
            <MediaGallery />
            <div className="property-feature-list bg-white shadow4 border-20 p-40 mt-50 mb-60">
               <h4 className="sub-title-one mb-40 lg-mb-20">Details</h4>
               <CommonPropertyOverview />
            </div>
            <div className="row">
               <div className="col-xl-8">
                  <div className="property-overview mb-50 bg-white shadow4 border-20 p-40">
                     <h4 className="mb-20">Description</h4>
                     <p className="fs-20 lh-lg">Isa contacted us from Madrid to find an apartment because she didn't want to live in the dorm anymore.</p>
                  </div>
                  <div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
                     <CommonAmenities amenities={amenities_data}/>
                  </div>
                  <div className="property-video-tour mb-50">
                  <CommonPropertyVideoTour videoId="lWf9eGUYKBs"/>
                  </div>
                  <div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
                     <CommonNearbyList />
                  </div>
                  <CommonSimilarProperty propertyData={property_data}/>
               </div>
               <Sidebar />
            </div>
         </div>
      </div>
   )
}

export default ListingDetailsOneArea
