"use client"
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";

import feedbackImg_1 from "@/assets/images/media/img_01.jpg";
import feedbackImg_2 from "@/assets/images/media/img_02.jpg";
import feedbackImg_3 from "@/assets/images/media/img_03.jpg";

interface DataType {
   id: number;
   blockquote: JSX.Element;
   name: string;
   country: string;
   img: StaticImageData;
}

const feedback_data: DataType[] = [
   {
      id: 1,
      blockquote: (<>Tu espacio <span>perfecto</span>, esperando por ti.</>),
      name: "Musa Delimuza",
      country: "Miami, USA",
      img: feedbackImg_1,
   },
   {
      id: 2,
      blockquote: (<>Llega, duerme y <span>disfruta.</span> Nosotros nos encargamos.</>),
      name: "Alina Cruse",
      country: "Miami, USA",
      img: feedbackImg_2,
   },
   {
      id: 3,
      blockquote: (<>Aterriza <span>directo </span> en tu nuevo hogar</>),
      name: "Musa Delimuza",
      country: "Rashed Ka.",
      img: feedbackImg_3,
   },
]

const setting = {
   dots: true,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true,
   autoplay: true,
   autoplaySpeed: 300000
}

import qouteIcon from "@/assets/images/icon/icon_38.svg"
import ShapeIcon from "@/assets/images/shape/eye_rotation.svg"

const Feedback = () => {
   return (
      <div className="feedback-section-seven mt-40 xl-mt-120 md-mt-80 pl-40">
         <div className="container container-large">
            <div className="position-relative z-1">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="title-one mt-30 md-mb-50 pe-xxl-4 wow fadeInLeft">
                        <h3>Madrid a tu alcance: tu hogar perfecto te espera.</h3>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="content-wrapper position-relative z-1 ms-xxl-3">
                        <div className="icon d-flex align-items-center justify-content-center rounded-circle mb-35"><Image src={qouteIcon} alt="" className="lazy-img" /></div>
                        <Slider {...setting} className="feedback-slider-one">
                           {feedback_data.map((item) => (
                              <div key={item.id} className="item">
                                 <div className="feedback-block-five">
                                    <blockquote>{item.blockquote}</blockquote>
                                 </div>
                              </div>
                           ))}
                        </Slider>
                     </div>
                  </div>
               </div>
               <div className="rating-box">
                  <Image src={ShapeIcon} alt="" className="lazy-img" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Feedback
