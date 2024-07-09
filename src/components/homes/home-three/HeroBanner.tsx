"use client"
import Image from "next/image";
import titleShape from "@/assets/images/shape/eye.svg";
import bannerShape_1 from "@/assets/images/shape/nube_3.svg";
import bannerShape_2 from "@/assets/images/shape/nube_4.svg";
import Slider from "react-slick";
import DropdownOne from "@/components/search-dropdown/home-dropdown/DropdownOne";

const setting = {
   dots: false,
   arrows: false,
   centerPadding: '0px',
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   fade: true,
   autoplaySpeed: 7000,
}

const HeroBanner = () => {
   return (
      <div className="hero-banner-three position-relative  pt-130 lg-pt-100 pb-170 xl-pb-130 lg-pb-100">
         <Slider {...setting} className="hero-slider-one m0">
            <div className="item m0"><div className="hero-img" style={{ backgroundImage: `url(/assets/images/media/A1.jpg)` }}></div></div>
            <div className="item m0"><div className="hero-img" style={{ backgroundImage: `url(/assets/images/media/A2.jpg)` }}></div></div>
            <div className="item m0"><div className="hero-img" style={{ backgroundImage: `url(/assets/images/media/A3.jpg)` }}></div></div>
         </Slider>

         <div className="container position-relative">
            <div className="row">
               <div className="col-lg-10 m-auto">
                  <h1 className="hero-heading text-center text-white font-garamond fw-500 wow fadeInUp"><span><Image src={titleShape} alt="" className="lazy-img" /> Encontraremos un lugar</span> <br />  perfecto para ti</h1>
                  <p className="fs-24 text-white text-center pt-35 md-pt-20 pb-55 lg-pb-40 wow fadeInUp" data-wow-delay="0.1s">Sólo tienes que llegar, dormir y disfrutar de Madrid.</p>
               </div>
            </div>
				<div className="row">
					<div className="col-xxl-10 m-auto">
						<div className="search-wrapper-one layout-one position-relative wow fadeInUp" data-wow-delay="0.2s">
							<div className="bg-wrapper">
                        <DropdownOne style={true} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Image src={bannerShape_1} alt="" className="lazy-img shapes shape_01" />
         <Image src={bannerShape_2} alt="" className="lazy-img shapes shape_02" />
      </div>
   )
}

export default HeroBanner
