import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import titleShape from "@/assets/images/shape/title_shape_04.svg";

const FancyBannerOne = ({ style }: any) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`fancy-banner-one position-relative z-1 pl-40 pt-160 xl-pt-140 lg-pt-80 pb-140 xl-pb-120 lg-pb-100 ${style ? "mt-200 xl-mt-150 lg-mt-120" : ""}`}
      >
        <div className={`container ${style ? "container-large" : ""}`}>
          <div className="row">
            <div className={`col-lg-5 wow fadeInLeft ${style ? "col-xxl-5" : ""}`}>
              <div className="title-one mb-45 lg-mb-30">
                <h3 className="text-white">
                  We{" "}
                  <span>
                    furnish{" "}
                    {style ? (
                      ""
                    ) : (
                      <Image src={titleShape} alt="" className="lazy-img" />
                    )}
                  </span>
                  your home in Madrid.
                </h3>
                <p className="fs-24 text-white pe-xl-5 me-xxl-5">
                  Not only do we find you a home, but we also furnish it with the essentials so you can arrive and sleep comfortably.
                </p>
              </div>
              <Link href="/en/service_details_furniture" className="btn-six">
                I'm interested
              </Link>
            </div>

            <div className={`col-lg-7 wow fadeInRight ${style ? "ms-auto" : ""}`}>
              <div className={`property-item md-mt-60 position-relative z-1 ${style ? "rounded-0" : ""}`}>
                <div className="row gx-0">
                  <div className="col-md-8 d-flex">
                    <div className="gutter border-right w-100 h-100">
                      <div className="tag mb-20"><strong>Process</strong></div>
                      <strong className="d-block color-dark fw-500 fs-20">
                        What's included:
                      </strong>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Selection of essential furniture from our catalog (mattresses, sofa, bedding, towels, and tableware).
                      </p>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Cleaning of the apartment.
                      </p>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Reception of furniture.
                      </p>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Assembly and placement of furniture.
                      </p>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Creation of photographic material: photos and videos.
                      </p>
                      {/* <ul className="style-none d-flex action-icons">
                        <SocialIcon />
                      </ul> */}
                    </div>
                  </div>

                  <div className="col-md-4 d-flex">
                    <div className="gutter w-100 h-100">
                      <div className="tag mb-20"><strong>COST</strong></div>
                      <div style={{ height: '80%' }} className="d-flex align-items-center justify-content-center flex-column">
                        <h2
                          className="price text-center"
                          style={{ fontSize: "40px" }}
                        >
                          450€
                        </h2>
                        <p
                          className="fs-16"
                          style={{
                            fontStyle: "italic",
                            fontSize: '14px',
                            margin: "0px",
                            textAlign: "end",
                          }}
                        >
                          *Payment in advance.
                        </p>
                      </div>

                      {/* <strong className="d-block color-dark fw-500 fs-20">
                        Breakdown:
                      </strong>
                      <p style={{ fontSize: "15px", margin: "0px" }}>
                        - Cleaning of the apartment: 50€
                      </p>
                      <p style={{ fontSize: "15px", margin: "0px" }}>
                        - Assembly and placement: 200€
                      </p>
                      <p style={{ fontSize: "15px", margin: "0px" }}>
                        - Reception and selection: 200€
                      </p> */}
                    </div>
                  </div>
                </div>

                <div className="button-group gutter d-flex justify-content-between align-items-center">
                  <Link href="/en/service_details_rent" className="btn-three">
                    <span>Discover all our services</span>
                  </Link>
                  <Link
                    href="/en/service_details_rent"
                    className="btn-four rounded-circle"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FancyBannerOne;
