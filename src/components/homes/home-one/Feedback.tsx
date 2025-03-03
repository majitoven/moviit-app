"use client"
import Image, { StaticImageData } from "next/image"
import Slider from 'react-slick'
import Link from "next/link";


import rating from "@/assets/images/assets/rating_01.png";
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
      country: "Milan, Itlay",
      desc: "Servicio muy personalizado, excelente comunicación y muy buenas recomendaciones. No solo te encuentran alojamiento, sino también te ayudan con trámites y todo lo necesario para llegar a Madrid de la mejor manera. Muy recomendado!",
      rating_count: 4.7,
      total_rating: 13,
   },
   {
      id: 2,
      img: feadbackImg_2,
      title: "Sofia Rena",
      country: "New York, USA",
      desc: "Martina una genia total. Le escribí algunos días antes de llegar a Madrid y dos semanas después de mi llegada ya tenía piso. Super recomendada!.",
      rating_count: 4.5,
      total_rating: 10
   },
   {
      id: 3,
      img: feadbackImg_3,
      title: "Rashed Kabir",
      country: "Dhaka, BD",
      desc: "Gestión rápida y eficiente para encontrar piso. Me presentaron varias opciones y la comunicación fue sencilla y transparente. Muy recomendado para personas que busquen piso desde otro país, te solucionan todo.",
      rating_count: 4.8,
      total_rating: 11
   },
   {
      id: 4,
      img: feadbackImg_3,
      title: "Rashed Kabir",
      country: "Dhaka, BD",
      desc: "Quede super conforme con el servicio de Movitt, desde la primer sesion entiendio que era lo que buscaba y me envio distintas alternativas, incluso pedi mas opciones y a la semana ya tenia un listado nuevo de alojamientos. Martina me ayudo a confrimar todo, desde el pago, el contrato, la plataforma y dudas que me surgieron post confirmacion de alojamiento. Me quedo super satisfecha con el apartamento que encontramos, un servicio confiable que recomiendo 100%!",
      rating_count: 4.8,
      total_rating: 11
   },
   {
      id: 5,
      img: feadbackImg_3,
      title: "Rashed Kabir",
      country: "Dhaka, BD",
      desc: "Una genia Marti!! Super atenta y responsable. Se preocupa por encontrarte el piso que necesitas, ella coordina y va las visitas, luego te envía fotos y videos. Todo muy prolijo y profesional. La recomiendo!!",
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
                              <a 
  href="https://www.google.com/maps/place/Moviit/@40.4378373,-3.8443451,11z/data=!4m18!1m9!3m8!1s0x232038d432a6bc45:0xac54e151e4f136d6!2sMoviit!8m2!3d40.4379543!4d-3.6795366!9m1!1b1!16s%2Fg%2F11vjpj5qy7!3m7!1s0x232038d432a6bc45:0xac54e151e4f136d6!8m2!3d40.4379543!4d-3.6795366!9m1!1b1!16s%2Fg%2F11vjpj5qy7?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D" 
  className="btn-two"
  target="_blank" 
  rel="noopener noreferrer"
>
  Ver más reviews
</a>

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
