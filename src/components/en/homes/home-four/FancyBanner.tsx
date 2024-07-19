import Image from "next/image";
import Link from "next/link";

import fancyImg_1 from "@/assets/images/media/mar.jpg";
import fancyShape_1 from "@/assets/images/shape/shape_51.svg";
import fancyShape_2 from "@/assets/images/shape/shape_50.svg";

const FancyBanner = ({ style }: any) => {
  return (
    <div className="fancy-banner-eight wow fadeInUp xl-mt-120 md-mt-40 md-mb-40">
      <div className="container container-large">
        <div className={`bg-wrapper bg-pink-two overflow-hidden position-relative z-1 ${style ? "border-30" : ""}`}>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 col-md-7">
              <div className="pb-80 lg-pb-40">
                <h3>Our mission is to help you <span className="fw-normal fst-italic">find your place.</span></h3>
                <div className="d-inline-flex flex-wrap align-items-center position-relative mt-15">
                  <Link href="/contact" className="btn-two rounded-0 border-0 mt-10"><span style={{ fontSize: '36px' }}>Contact Us</span></Link>
                  <Image src={fancyShape_1} alt="" className="lazy-img shapes shape_02 wow fadeInRight" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-5 text-center text-md-end">
              <div className="media-wrapper position-relative z-1 d-inline-block">
                <Image src={fancyImg_1} alt="" className="lazy-img" />
                <Image src={fancyShape_2} alt="" className="lazy-img shapes shape_01" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FancyBanner;
