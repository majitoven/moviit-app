import Image from "next/image";
import Link from "next/link";

import fanchyBannerShape_1 from "@/assets/images/shape/shape_51.svg";
import fanchyBannerShape_2 from "@/assets/images/media/patas.jpg";
import fanchyBannerShape_3 from "@/assets/images/shape/shape_50.svg";

const IgBanner = () => {
  return (
    <div className="fancy-banner-eight wow fadeInUp xl-mt-100 mb-60 xl-mb-100 lg-mb-80">
      <div className="container container-large">
        <div
          className="bg-wrapper border-30 bg-pink-two overflow-hidden position-relative z-1"
          style={{ background: "#ccf4f475" }}
        >
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-7 col-md-7">
              <div className="pb-80 lg-pb-40">
                <h3>
                  Learn all about us on{" "}
                  <span className="fw-normal fst-italic">Instagram.</span>
                </h3>
                <div className="d-inline-flex flex-wrap align-items-center position-relative mt-15">
                  <Link href="/en/contact" className="btn-eight mt-10 me-4">
                    <span>Contact Us</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/moviitt/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="btn-two rounded-0 border-0 mt-10"
                  >
                    <span>Follow Us</span>
                  </Link>
                  <Image
                    src={fanchyBannerShape_1}
                    alt=""
                    className="lazy-img shapes shape_02 wow fadeInRight"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-5 text-center text-md-end">
              <div className="media-wrapper position-relative z-1 d-inline-block">
                <Image
                  src={fanchyBannerShape_2}
                  alt=""
                  className="lazy-img rounded"
                />
                <Image
                  src={fanchyBannerShape_3}
                  alt=""
                  className="lazy-img shapes shape_01"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IgBanner;
