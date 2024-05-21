import Image from "next/image";
import Link from "next/link";
import footer_data from "@/data/home-data/FooterData";

import footerLogo_1 from "@/assets/images/logo/logo_01.svg";
import footerLogo_2 from "@/assets/images/logo/logo_03.svg";
import footerShape_1 from "@/assets/images/shape/shape_32.svg";
import footerShape_2 from "@/assets/images/shape/shape_33.svg";

const FooterOne = ({ style }: any) => {
  return (
    <div className={`footer-one ${style ? "dark-bg" : ""}`}>
      <div className="position-relative z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div
                className={`footer-intro ${
                  style ? "position-relative z-1" : ""
                }`}
              >
                <div className="bg-wrapper">
                  <div className="logo mb-20">
                    <Link href="/">
                      <Image src={style ? footerLogo_2 : footerLogo_1} alt="" />
                    </Link>
                  </div>
                  <p className="mb-60 lg-mb-40 md-mb-20">Madrid, España</p>
                  <h6>CONTACTO:</h6>
                  <Link
                    href="#"
                    className={`email tran3s ${
                      style
                        ? "font-garamond"
                        : "fs-24 text-decoration-underline"
                    }`}
                  >
                    moviitmad@gmail.com
                  </Link>
                  <p
                    style={{ margin: "0px" }}
                    className={`email tran3s ${
                      style
                        ? "font-garamond"
                        : "fs-24 text-decoration-underline"
                    }`}
                  >
                    +34 611 877 027{" "}
                  </p>
                  <div className="d-flex align-items-end justify-content-start">
                    <p style={{ margin: "0px" }}>
                      <Link href="#">
                        <i
                          className={`fa-brands fa${
                            style ? "" : "-square"
                          }-instagram`}
                        ></i>
                      </Link>
                    </p>
                    <Link
                      href="#"
                      className={`email tran3s  ${
                        style
                          ? "font-garamond"
                          : "fs-24 text-decoration-underline"
                      }`}
                    >
                      @moviitt
                    </Link>
                  </div>
                </div>
                {style && (
                  <Image
                    src={footerShape_1}
                    alt=""
                    className="lazy-img shapes shape_01"
                  />
                )}
              </div>
            </div>

            <div className="col-lg-8">
              <div className={`d-flex flex-wrap ${style ? "h-100" : ""}`}>
                {footer_data
                  .filter((items) => items.page === "home_1")
                  .map((item) => (
                    <div
                      key={item.id}
                      className={`footer-nav mt-100 lg-mt-80 ${item.widget_class}`}
                    >
                      <h5
                        className={`footer-title ${style ? "text-white" : ""}`}
                      >
                        {item.widget_title}
                      </h5>
                      <ul className="footer-nav-link style-none">
                        {item.footer_link.map((li, i) => (
                          <li key={i}>
                            <Link href={li.link}>{li.link_title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        {style && (
          <Image
            src={footerShape_2}
            alt=""
            className="lazy-img shapes shape_02"
          />
        )}
      </div>
    </div>
  );
};

export default FooterOne;
