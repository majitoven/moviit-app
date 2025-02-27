import Image, { StaticImageData } from "next/image";
import Fancybox from "@/components/common/Fancybox";
import { useState, useEffect } from "react";

import bigCarousel_1 from "@/assets/images/listing/isa/01.jpg"
import bigCarousel_2 from "@/assets/images/listing/isa/02.jpg"
import bigCarousel_3 from "@/assets/images/listing/isa/03.jpg"
import bigCarousel_4 from "@/assets/images/listing/isa/04.jpg"
import bigCarousel_5 from "@/assets/images/listing/isa/05.jpg"
import bigCarousel_6 from "@/assets/images/listing/isa/06.jpg"

import smallCarousel_1 from "@/assets/images/listing/isa/01.jpg"
import smallCarousel_2 from "@/assets/images/listing/isa/02.jpg"
import smallCarousel_3 from "@/assets/images/listing/isa/03.jpg"
import smallCarousel_4 from "@/assets/images/listing/isa/04.jpg"
import smallCarousel_5 from "@/assets/images/listing/isa/05.jpg"
import smallCarousel_6 from "@/assets/images/listing/isa/06.jpg"

const largeThumb: string[] = ["01", "02", "03", "04", "05", "06"];

interface DataType {
  big_carousel: StaticImageData[];
  small_carousel: StaticImageData[];
}

const gallery_data: DataType = {
  // big_carousel: [bigCarousel_1, bigCarousel_2],
  // small_carousel: [smallCarousel_1, smallCarousel_2],
  big_carousel: [bigCarousel_1, bigCarousel_2, bigCarousel_3, bigCarousel_4, bigCarousel_5, bigCarousel_6],
  small_carousel: [smallCarousel_1, smallCarousel_2, smallCarousel_3, smallCarousel_4, smallCarousel_5, smallCarousel_6],
};

const { big_carousel, small_carousel } = gallery_data;

const MediaGallery = ({ style }: any) => {
  const [aspectRatios, setAspectRatios] = useState<number[]>([]);

  useEffect(() => {
    const calculateAspectRatios = async () => {
      const ratios = await Promise.all(
        big_carousel.map(async (image) => {
          const img = document.createElement("img");
          img.src = image.src;
          await new Promise((resolve) => {
            img.onload = resolve;
          });
          return img.naturalWidth / img.naturalHeight;
        })
      );
      setAspectRatios(ratios);
    };

    calculateAspectRatios();
  }, []);

  return (
    <div className="media-gallery mt-100 xl-mt-80 lg-mt-20">
      <div id="media_slider" className="carousel slide row">
        <div className="col-lg-10">
          <div className={`bg-white border-20 md-mb-20 ${style ? "" : "shadow4 p-30"}`}>
            <div className="position-relative z-1 overflow-hidden border-20">
              <div className="img-fancy-btn border-10 fw-500 fs-16 color-dark">
                Ver todas las imágenes
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: true,
                    },
                  }}
                >
                  {largeThumb.map((thumb: any, index: any) => (
                    <a
                      key={index}
                      className="d-block"
                      data-fancybox="img2"
                      href={`/assets/images/listing/isa/${thumb}.jpg`}
                    ></a>
                  ))}
                </Fancybox>
              </div>

              <div className="carousel-inner">
                {big_carousel.map((carousel, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div
                      className={`image-wrapper ${aspectRatios[index] > 1 ? "horizontal" : "vertical"
                        }`}
                    >
                      <Image src={carousel} alt="" className="image border-20" layout="fill" objectFit="contain" />
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#media_slider" data-bs-slide="prev">
                <i className="bi bi-chevron-left"></i>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#media_slider" data-bs-slide="next">
                <i className="bi bi-chevron-right"></i>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-2">
          <div className={`carousel-indicators position-relative p-15 w-100 h-100 ${style ? "" : "border-15 bg-white shadow4"}`}>
            {small_carousel.map((carousel, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#media_slider"
                data-bs-slide-to={`${i}`}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              >
                <Image src={carousel} alt="" className="w-100 border-10" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .image-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          position: relative;
          background-color: white;
        }
        .image-wrapper.horizontal {
          padding-top: 56.25%; /* 16:9 aspect ratio */
        }
        .image-wrapper.vertical {
          padding-top: 133.33%; /* 3:4 aspect ratio */
        }
        .image-wrapper .image {
          position: absolute;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default MediaGallery;
