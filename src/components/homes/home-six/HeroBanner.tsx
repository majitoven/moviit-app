import Image from "next/image"
import titleShape from "@/assets/images/shape/shape_58.svg"
import bannerimg from "@/assets/images/assets/screen_06.png"
import Link from "next/link"
import DropdownSix from "@/components/search-dropdown/home-dropdown/DropdownSix"

const HeroBanner = () => {
   return (
      <div className="hero-banner-six z-2 pt-200 lg-pt-150">
         <div className="container container-large">
            <div className="position-relative">
               <div className="row">
                  <div className="col-xxl-7 col-xl-6 col-lg-7">
                     <div className="position-relative pe-xxl-5 wow fadeInLeft">
                        <h1 className="hero-heading">Encontraremos un lugar <span className="d-inline-block position-relative">perfecto <Image src={titleShape} alt="" className="lazy-img" /></span>  para ti.</h1>
                     </div>
                  </div>
                  <div className="col-lg-5 ms-auto">
                     <div className="ps-xxl-5 pt-35 wow fadeInRight">
                        <p className="color-dark sub-heading mb-40 lg-mb-20"> Sólo tienes que llegar, dormir y disfrutar de Madrid.</p>
                        <div className="d-flex flex-wrap justify-content-center align-items-end">
              
                           <Link href="/contact" className="btn-five rounded-0 md mt-20" style={{marginTop: '0px'}}><span>Contactanos</span> <i className="bi bi-arrow-up-right"></i></Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <DropdownSix/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroBanner
