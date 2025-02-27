import Image from "next/image";
import Link from "next/link";

import footerLogo_1 from "@/assets/images/shape/eye.svg";
import footerLogo_2 from "@/assets/images/shape/eye.svg";
import footerShape_1 from "@/assets/images/icon/icon_homy_2.png";
import footerShape_2 from "@/assets/images/shape/nube_4.png";

const footer_data = [
  {
    id: 2,
    widget_class: "xs-mt-30",
    page: "home_1",
    widget_title: "Legal:",
    widget_title_en: "Legal:",
    footer_link: [
      { link: "/faq#Privacidad", link_en: "/faq#Privacy", link_title: "Política de privacidad", link_title_en: "Privacy Policy" },
      { link: "/faq#Costos", link_en: "/faq#Costs", link_title: "Términos & condiciones", link_title_en: "Terms & Conditions" },
      { link: "/faq", link_en: "/faq", link_title: "FAQ", link_title_en: "FAQ" }
    ]
  },
  {
    id: 3,
    widget_class: "xs-mt-30",
    page: "home_1",
    widget_title: "Más información:",
    widget_title_en: "More info:",
    footer_link: [
      { link: "/about_us_02", link_en: "/en/about_us_02", link_title: "La empresa", link_title_en: "The Company" },
      { link: "/search_property", link_en: "/en/search_property", link_title: "Buscar apartamento", link_title_en: "Search Property" },
      { link: "/service_details_rent", link_en: "/en/service_details_rent", link_title: "Servicio Alquiler", link_title_en: "Rental Service" },
      { link: "/service_details_consulting", link_en: "/en/service_details_consulting", link_title: "Asesoramiento inmobiliario", link_title_en: "Real estate consulting" },
      { link: "/listing_details_justicia", link_en: "/en/listing_details_justicia", link_title: "Casos de éxito", link_title_en: "Success stories" },
      { link: "/contact", link_en: "/en/contact", link_title: "Contacto", link_title_en: "Contact" }
    ]
  }]

const FooterOne = ({ style }: any) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`footer-one ${style ? "dark-bg" : ""}`}>
      <div className="position-relative z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div
                className={`footer-intro ${style ? "position-relative z-1" : ""
                  }`}
              >
                <div className="bg-wrapper">
                  <div className="logo mb-20">
                    <Link href="/en">
                      <Image
                        src={style ? footerLogo_2 : footerLogo_1}
                        alt=""
                        style={{ maxHeight: "70px", maxWidth: "70px" }}
                      />
                    </Link>
                  </div>
                  <p className="mb-40 lg-mb-40 md-mb-20">Madrid, Spain.</p>
                  <h6 style={{ margin: '0px', marginBottom: '-5px' }}>EMAIL:</h6>
                  <Link
                    href="mailto:moviitmad@gmail.com"
                    className={`email tran3s ${style
                      ? "font-garamond"
                      : "fs-24 text-decoration-underline"
                      }`}
                  >
                    moviitmad@gmail.com
                  </Link>
                  <h6 style={{ marginTop: '10px', marginBottom: '-5px' }}>PHONE:</h6>
                  <p
                    style={{ margin: "0px" }}
                    className={`email tran3s ${style
                      ? "font-garamond"
                      : "fs-24 text-decoration-underline"
                      }`}
                  >
                    +34 611 877 027{" "}
                  </p>
                  <h6 style={{ marginTop: '10px', marginBottom: '-5px' }}>INSTAGRAM:</h6>
                  <Link
                    href="https://www.instagram.com/moviitt/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`email tran3s  ${style
                      ? "font-garamond"
                      : "fs-24 text-decoration-underline"
                      }`}
                  >
                    @moviitt
                  </Link>
                  <h6 style={{ marginTop: '10px', marginBottom: '-5px' }}>TIKTOK:</h6>
                  <Link
                    href="https://www.tiktok.com/@moviitmad/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`email tran3s  ${style
                      ? "font-garamond"
                      : "fs-24 text-decoration-underline"
                      }`}
                  >
                    @moviitmad
                  </Link>
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
                        {item.widget_title_en}
                      </h5>
                      <ul className="footer-nav-link style-none">
                        {item.footer_link.map((li, i) => (
                          <li key={i}>
                            <Link href={li.link_en}>{li.link_title_en}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <p className="m0 text-center fs-16">Copyright @{`${currentYear}`} Moviit Madrid. Created by                 <Link
              href="https://www.instagram.com/___morphe/"
              rel="noopener noreferrer"
              target="_blank"
              className={`email tran3s  ${style
                ? "font-garamond"
                : "fs-30 text-decoration-underline"
                }`}
              style={{ fontSize: '20px' }}
            >Morphe Studio.</Link> </p>
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
