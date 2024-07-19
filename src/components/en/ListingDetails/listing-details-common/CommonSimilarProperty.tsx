"use client"
import property_data from "@/data/home-data/PropertyData";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const setting = {
   dots: true,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 3,
   slidesToScroll: 2,
   autoplay: true,
   autoplaySpeed: 3000,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 2
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2
         }
      },
      {
         breakpoint: 768,
         settings: {
            slidesToShow: 1
         }
      }
   ]
};

interface StaticImageData {
   src: string;
   height: number;
   width: number;
   placeholder?: string;
}

interface DataType {
   id: number;
   page: string;
   tag: string;
   thumb?: StaticImageData;
   title: string;
   link: string;
   address: string;
   price: number;
}

interface CommonSimilarPropertyProps {
   propertyData: DataType[];
}

const CommonSimilarProperty: React.FC<CommonSimilarPropertyProps> = ({ propertyData }) => {
   const finalData = propertyData?.length ? propertyData : property_data;
   return (
      <div className="similar-property">
         <h4 className="mb-40">Similar flats</h4>
         <Slider {...setting} className="similar-listing-slider-one">
            {finalData.filter((items) => items.page == "home_3_property_2").map((item) => (
               <div key={item.id} className="item">
                  <div className="listing-card-one shadow4 style-three border-30 mb-50">
                     <div className="img-gallery p-15">
                        <div className="position-relative border-20 overflow-hidden">
                           <div className="tag bg-white text-dark fw-500 border-20">{item.tag}</div>
                           <div className="image-container" style={{
                              position: 'relative',
                              width: '100%',
                              height: '300px', /* Set the desired height */
                              overflow: 'hidden'
                           }}>
                              <Image src={item.thumb ? item.thumb.src : ""} className="property-image border-20" alt="..." layout="fill" style={{
                                 objectFit: 'cover'
                              }} />
                           </div>
                           <Link href={item.link} className="btn-four inverse rounded-circle position-absolute">
                              <i className="bi bi-arrow-up-right"></i>
                           </Link>
                        </div>
                     </div>
                     <div className="property-info pe-4 ps-4">
                        <Link href={item.link} className="title tran3s">{item.title}</Link>
                        <div className="address m0 pb-5">{item.address}</div>
                        <div className="pl-footer m0 d-flex align-items-center justify-content-between">
                           <strong className="price fw-500 color-dark">€{item.price}</strong>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </Slider>
      </div>
   );
};

export default CommonSimilarProperty;
