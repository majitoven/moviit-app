import Image from "next/image"
import Link from "next/link";
import feature3Icon_1 from "@/assets/images/icon/icon_contact.png";
import feature3Icon_2 from "@/assets/images/icon/icon_homy.png";
import titleShape from "@/assets/images/shape/title_shape_07_alt.svg";
import featureShape_1 from "@/assets/images/shape/shape_07.svg";
import featureShape_2 from "@/assets/images/shape/shape_08.svg";

const BLockFeatureFive = ({ style }: any) => {

   const feature_data = [
      {
         id: 1,
         page: "home_1_feature_3",
         icon: feature3Icon_1,
         title: "We get to know you",
         desc: "To begin the search, please fill out the form so we can understand your needs: areas, characteristics, prices, and other parameters. We will then contact you to start the advisory process.",
      },
      {
         id: 2,
         page: "home_1_feature_3",
         class_name: "arrow position-relative",
         icon: feature3Icon_2,
         title: "We find your place",
         desc: "After a thorough search through real estate portals, agencies, and off-market properties, we will provide you with a list of options that meet your needs. From there, we will advocate for your interests, acting as your representative with intermediaries and agencies to help you find your ideal home.",
      }
   ];
   
   return (
      <div className={`block-feature-five position-relative z-1 md-pb-40 md-mt-40 pb-80 xl-pb-100 lg-pb-80 ${style ? " pt-170 xl-pt-120" : "lg-pt-70 pt-100 xl-mt-200 lg-mt-150"}`}>
         <div className="container">
            <div className="row">
               <div className="col-xl-8 m-auto">
                  <div className="title-one text-center mb-35 lg-mb-20">
                     <h3>What do we do? <br /> and <span>How do we do it?<Image src={titleShape} alt="" className="lazy-img" /></span></h3>
                     <p className="fs-24 color-dark">It's very easy to use our service:</p>
                  </div>
               </div>
            </div>

            <div className="row justify-content-between">
               <div className="col-xxl-11 m-auto">
                  <div className="row gx-xl-5 justify-content-center">
                     {feature_data.filter((items) => items.page === "home_1_feature_3").map((item) => (
                        <div key={item.id} className="col-lg-6 col-sm-6">
                           <div className={`card-style-one text-center wow fadeInUp ${item.class_name}`}>
                              <Image src={item.icon ? item.icon : ""} alt="" style={{ maxHeight: '200px', maxWidth: '200px' }} className="lazy-img m-auto icon" />
                              <h4 className="mt-20 lg-mt-30 mb-15">{item.title}</h4>
                              <p style={{ fontSize: '20px' }} className="pe-xxl-4 ps-xxl-4">{item.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className="col-xl-8 m-auto text-center">
               <Link href="/en/search-property" className="btn-nine text-uppercase"><span>START</span></Link>
            </div>
         </div>
         <Image src={featureShape_1} alt="" className="lazy-img shapes shape_01" />
         <Image src={featureShape_2} alt="" className="lazy-img shapes shape_02" />
      </div>
   )
}

export default BLockFeatureFive
