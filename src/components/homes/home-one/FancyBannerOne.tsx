import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import featureImg_4 from "@/assets/images/perfil.png";

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
                  <span>
                   Perfil{" "}
                    {style ? (
                      ""
                    ) : (
                      <Image src={titleShape} alt="" className="lazy-img" />
                    )}
                  </span>
                del inquilino
              </h3>
                <p className="fs-24 text-white pe-xl-5 me-xxl-5">
                 Te damos la oportunidad de ser el mejor perfil para el propietario.
              </p>
              </div>
              <Link href="/service_details_consulting" className="btn-six">
                Conocer más
            </Link>
            </div>

            <div className={`col-lg-7 wow fadeInRight ${style ? "ms-auto" : ""}`}>
              <div
                className={`property-item md-mt-60 position-relative z-1 ${style ? "rounded-0" : ""
                  }`}
              >
                <div className="row gx-0">
                  <div className="col-md-7 d-flex">
                    <div className="gutter border-right w-100 h-100">
                      <div className="tag mb-20"><strong>Beneficios</strong></div>
                      <strong className="d-block color-dark fw-500 fs-20">
                        Por qué es importante:
                    </strong>
                    <ul style={{ fontSize: "16px", margin: "0px", paddingLeft: "20px", marginTop: '15px' }}>
    <li style={{ fontWeight: 500, color: 'black' }}>Te ahorramos tiempo:
      <ul>
        <li style={{ fontWeight: 400 }}>Ahora estás al tanto de los requisitos y restricciones de alquiler en Madrid, por lo que no te verás sorprendido.</li>
      </ul>
    </li>
    <li style={{ fontWeight: 500, color: 'black' }}>Te ahorramos dinero:
      <ul>
        <li style={{ fontWeight: 400 }}>Te informarás con antelación sobre los posibles desafíos o problemas que podrías enfrentar, lo que te permitirá evitar imprevistos que puedan resultar costosos.</li>
      </ul>
    </li>
    <li style={{ fontWeight: 500, color: 'black' }}>Te ayudamos a no perder oportunidades:
      <ul>
        <li style={{ fontWeight: 400 }}>Gracias al asesoramiento, podrás aprovechar al máximo todas las oportunidades para ser aceptado.</li>
      </ul>
    </li>
  </ul>           
              
                    </div>
                  </div>
                  <div className="col-md-5 d-flex">
                    <div className="gutter border-right w-100 h-100">
                      <div className="tag mb-20"><strong>Modelo</strong></div>
                      <Image src={featureImg_4} alt="" className="lazy-img main-img w-100" />

                    </div>
                  </div>

               
                </div>

                <div className="button-group gutter d-flex justify-content-between align-items-center">
                  <Link href="/service_details_rent" className="btn-three">
                  <span>Descubrí más de nuestros servicios</span>
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
