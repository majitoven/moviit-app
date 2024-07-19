"use client"
import Image, { StaticImageData } from "next/image"
import Slider from 'react-slick'
import Link from "next/link";

import feadbackImg_1 from "@/assets/images/media/img_01.jpg";
import feadbackImg_2 from "@/assets/images/media/img_02.jpg";
import feadbackImg_3 from "@/assets/images/media/img_03.jpg";

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   country: string;
   desc: string;
   rating_count: number;
   total_rating: number;
}

const feedback_data: DataType[] = [
   {
      id: 1,
      img: feadbackImg_1,
      title: "Jonathan Harry",
      country: "Milan, Italy",
      desc: "Quick, efficient, and with great taste, they furnished my apartment in Madrid without any hassle.",
      rating_count: 4.7,
      total_rating: 13,
   },
   {
      id: 2,
      img: feadbackImg_2,
      title: "Sofia Rena",
      country: "New York, USA",
      desc: "Excellent value for money, they arrived, cleaned, and furnished my house very quickly.",
      rating_count: 4.5,
      total_rating: 10
   },
   {
      id: 3,
      img: feadbackImg_3,
      title: "Rashed Kabir",
      country: "Dhaka, BD",
      desc: "Highly recommended service! My house looks beautiful and we didn't have time to go out and look for furniture.",
      rating_count: 4.8,
      total_rating: 11
   },
]

const Feedback = () => {

   const settings = {
      dots: true,
      arrows: false,
      centerPadding: '0px',
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 300000
   }

   return (
      <div className="feedback-section-one position-relative z-1 pt-70 md-pt-50 pb-80 md-pb-60">
         <div className="main-content m-auto">
            <Slider {...settings} className="feedback-slider-one position-static">
               {feedback_data.map((item) => (
                  <div key={item.id} className="item">
                     <div className="feedback-block-one text-center">
                        <div className="row align-items-center">

                           <div className="col-md-12">
                              <blockquote>"{item.desc}"</blockquote>
                              <div className="mt-40 lg-mt-40">
                              <Link href="/en/listing_details_justicia" className="btn-two">See real customers</Link>
                           </div>
                           </div>

                        </div>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
   )
}

export default Feedback
