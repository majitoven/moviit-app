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
      desc: "Martina was so patient and helpful finding my friend and I a place in Madrid. She gave us lots of options, was always available to answer questions, and was easy to communicate with. She listened to our needs and acted fast when we picked a place we liked! Thank you!",
      rating_count: 4.7,
      total_rating: 13,
   },
   {
      id: 2,
      img: feadbackImg_1,
      title: "Sofia Rena",
      country: "New York, USA",
      desc: "Martina is absolutely amazing. I contacted her a few days before arriving in Madrid, and two weeks after my arrival, I already had an apartment. Highly recommended!",
      rating_count: 4.5,
      total_rating: 10
    },
    {
      id: 3,
      img: feadbackImg_1,
      title: "Rashed Kabir",
      country: "Dhaka, BD",
      desc: "Fast and efficient service to find an apartment. They presented me with several options, and the communication was simple and transparent. Highly recommended for people searching for a place from another country – they take care of everything!",
      rating_count: 4.8,
      total_rating: 11
    },
    {
      id: 4,
      img: feadbackImg_1,
      title: "Lucia Fernández",
      country: "Buenos Aires, Argentina",
      desc: "I was super satisfied with Movitt's service. From the first session, they understood exactly what I was looking for and sent me different options. I even requested more alternatives, and within a week, I had a new list of accommodations. Martina helped me with everything—from payment and the contract to the platform and any questions I had after confirming my accommodation. I’m very happy with the apartment we found; a reliable service that I 100% recommend!",
      rating_count: 4.9,
      total_rating: 12
    },
    {
      id: 5,
      img: feadbackImg_1,
      title: "Mariana Torres",
      country: "Mexico City, Mexico",
      desc: "Marti is amazing! Super attentive and responsible. She makes sure to find the perfect place for you, coordinating and attending the visits herself, then sending you photos and videos. Everything was very organized and professional. I highly recommend her!",
      rating_count: 4.8,
      total_rating: 11
    }
    
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
                              <Link href="https://www.google.com/maps/place/Moviit/@40.4378373,-3.8443451,11z/data=!4m18!1m9!3m8!1s0x232038d432a6bc45:0xac54e151e4f136d6!2sMoviit!8m2!3d40.4379543!4d-3.6795366!9m1!1b1!16s%2Fg%2F11vjpj5qy7!3m7!1s0x232038d432a6bc45:0xac54e151e4f136d6!8m2!3d40.4379543!4d-3.6795366!9m1!1b1!16s%2Fg%2F11vjpj5qy7?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D" className="btn-two">Read more reviews</Link>
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
