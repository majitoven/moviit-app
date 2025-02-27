import Image from "next/image";
import Link from "next/link";
import SocialIcon from "@/components/common/SocialIcon";
import Head from "next/head";

import titleShape from "@/assets/images/shape/title_shape_04.svg";

const FancyBannerOne = ({ style }: any) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`fancy-banner-one position-relative z-1 pl-40 pt-160 xl-pt-140 lg-pt-80 pb-140 xl-pb-120 lg-pb-100 ${style ? "mt-200 xl-mt-150 lg-mt-120" : ""
          }`}
      >
        <div className={`container ${style ? "container-large" : ""}`}>
          <div className="row">
            <div
              className={`col-lg-5 wow fadeInLeft ${style ? "col-xxl-5" : ""}`}
            >
              <div className="title-one mb-45 lg-mb-30">
                <h3 className="text-white">
                  Te{" "}
                  <span>
                    amueblamos{" "}
                    {style ? (
                      ""
                    ) : (
                      <Image src={titleShape} alt="" className="lazy-img" />
                    )}
                  </span>
                tu hogar en Madrid.
              </h3>
                <p className="fs-24 text-white pe-xl-5 me-xxl-5">
                  No solo te buscamos casa, también te la amueblamos con lo
                  indispensable para que llegues directo a dormir.
              </p>
              </div>
              <Link href="/service_details_furniture" className="btn-six">
                Me interesa
            </Link>
            </div>

            <div className={`col-lg-7 wow fadeInRight ${style ? "ms-auto" : ""}`}>
              <div
                className={`property-item md-mt-60 position-relative z-1 ${style ? "rounded-0" : ""
                  }`}
              >
                <div className="row gx-0">
                  <div className="col-md-8 d-flex">
                    <div className="gutter border-right w-100 h-100">
                      <div className="tag mb-20"><strong>Beneficios</strong></div>
                      <strong className="d-block color-dark fw-500 fs-20">
                        Qué incluye:
                    </strong>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Te ahorramos tiempo:
                        • Ahora estás al tanto de los requisitos y restricciones de alquiler en Madrid, por lo que no te verás sorprendido.
                    </p>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Te ahorramos dinero:
                        • Te informarás con antelación sobre los posibles desafíos o problemas que podrías enfrentar, lo que te permitirá evitar imprevistos que puedan resultar costosos.
                    </p>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Te ayudamos a no perder oportunidades:
                        •Gracias al asesoramiento, podrás aprovechar al máximo todas las oportunidades para ser aceptado.
                    </p>
                    
                      {/* <ul className="style-none d-flex action-icons">
                      <SocialIcon />
                    </ul> */}
                    </div>
                  </div>
                  <div className="col-md-4 d-flex">
                    <div className="gutter border-right w-100 h-100">
                      <div className="tag mb-20"><strong>Proceso</strong></div>
                      <strong className="d-block color-dark fw-500 fs-20">
                        Qué incluye:
                    </strong>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Selección de muebles imprescindibles de nuestro catálogo
                        (colchones, sofá, ropa de cama, toallas y vajilla).
                    </p>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Limpieza de piso.
                    </p>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Recibimiento de muebles.
                    </p>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Armado y colocación de muebles.
                    </p>
                      <p style={{ fontSize: "16px", margin: "0px" }}>
                        - Realización de material fotográfico: fotos y videos.
                    </p>
                      {/* <ul className="style-none d-flex action-icons">
                      <SocialIcon />
                    </ul> */}
                    </div>
                  </div>

                  {/* <div className="col-md-4 d-flex">
                    <div className="gutter w-100 h-100">
                      <div className="tag mb-20"><strong>COSTO</strong></div>
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
                          *Pago por adelantado.
                      </p>
                      </div>

                      {/* <strong className="d-block color-dark fw-500 fs-20">
                      Desglose:
                    </strong>
                    <p style={{ fontSize: "15px", margin: "0px" }}>
                      - Limpieza de piso: 50€
                    </p>
                    <p style={{ fontSize: "15px", margin: "0px" }}>
                      - Armado y colocación: 200€
                    </p>
                    <p style={{ fontSize: "15px", margin: "0px" }}>
                      - Recibimiento y selección: 200€
                    </p> 
                    </div>
                  </div> */}
                </div>

                <div className="button-group gutter d-flex justify-content-between align-items-center">
                  <Link href="/service_details_rent" className="btn-three">
                    <span>Descubrí todos nuestros servicios</span>
                  </Link>
                  <Link
                    href="/service_details_rent"
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
