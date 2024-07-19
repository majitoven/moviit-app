import Image from "next/image";
import fancyShape from "@/assets/images/icon/icon_homy_2.png";
import Link from "next/link";

const FancyBannerTwo = () => {
   return (
      <div className="fancy-banner-five position-relative z-1 pt-90 lg-pt-70 pb-110 lg-pb-70 xl-mt-120">
         <div className="container">
            <div className="row">
               <div className="col-xl-8 m-auto text-center">
                  <div className="title-one mb-40 lg-mb-20">
                     <h2 className="font-garamond fs-xl text-white">Any questions? Feel free to chat with us.</h2>
                  </div>
                  <Link href="/en/contact" className="btn-nine text-uppercase"><span>CONTACT US</span></Link>
               </div>
            </div>
         </div>
         <Image src={fancyShape} alt="" className="lazy-img shapes shape_01" />
      </div>
   );
}

export default FancyBannerTwo;
