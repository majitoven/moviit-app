import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import serviceDetailsThumb_1 from "@/assets/images/media/A3.jpg";
import serviceDetailsThumb_2 from "@/assets/images/media/friendz.jpg";

import serviceDetailsIcon_1 from "@/assets/images/icon/icon_contact.png";
import serviceDetailsIcon_2 from "@/assets/images/icon/lupa.png";
import serviceDetailsIcon_3 from "@/assets/images/icon/icon_homy.png";
import serviceDetailsIcon_4 from "@/assets/images/icon/timbre.png";

interface ContentType {
   title_1: string;
   title_2: string;
   title_3: string;
   service_features: {
      icon: StaticImageData;
      title: string;
      desc: string
   }[];
   service_list: string[];
}[];

const content_data: ContentType = {
   title_1: "We find your apartment/room.",
   title_2: "Just follow these simple steps:",
   title_3: "Service costs and conditions:",

   service_features: [
      {
         icon: serviceDetailsIcon_1,
         title: "WE GET TO KNOW YOU",
         desc: "Describe your needs/preferences by filling out the search form."
      },
      {
         icon: serviceDetailsIcon_2,
         title: "WE SEARCH",
         desc: "With all the collected information, we start searching for your perfect place."
      },
      {
         icon: serviceDetailsIcon_4,
         title: "WE VISIT",
         desc: "We visit your favorite apartments/rooms and send you photos and videos."
      },
      {
         icon: serviceDetailsIcon_3,
         title: "WE APPLY",
         desc: "We advise you on the documents you need to present to apply for your ideal apartment."
      },
   ],
   service_list: ["From 3 - 6 months: 50% of 1 month's rent + 200 Euros deposit (1 person)",
      "From 7 - 9 months: 70% of 1 month's rent + 200 Euros deposit (1 person)",
      "From 10 - 12 months: 1 month's rent + 200 Euros deposit (1 person)",],
}

const { title_1, title_2, title_3, service_features, service_list } = content_data;

const ServiceDetailsArea = () => {
   return (
      <div className="service-details mt-120 xl-mt-100 mb-100 xl-mb-100 pl-40 pr-40 md-mt-60">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="service-post">
                     <h3 className="mb-30">{title_1}</h3>
                     <h4 className="font-garamond special-title">What do we do?</h4>
                     <p className="fs-20 lh-lg pb-25 mt-20"> We make sure you arrive directly at your ideal home. </p>
                     <h4 className="font-garamond special-title">How do we do it?</h4>
                     <p className="fs-20 lh-lg mt-20">Through a 360º search of apartments and rooms in Madrid, we present all the available options that fit your needs and circumstances. We negotiate on your behalf with the real estate agency or the apartment owner and advise you on the necessary documentation to be the best profile and increase your chances of being accepted.</p>
                  </div>
               </div>

               <div className="col-lg-4">
                  <div className="ms-xl-5">
                     <div className="service-sidebar md-mt-80">
                        <div className="service-category">
                           <Image src={serviceDetailsThumb_2} alt="" className="lazy-img w-100 mt-20" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-12">
                  <div className="service-post">

                     <div className="img-gallery pt-15 pb-70 lg-pb-50">
                        <div className="row">
                           <div className="col-8">
                              <Image src={serviceDetailsThumb_1} alt="" className="lazy-img  w-100 mt-20" />
                           </div>
                           <div className="col-xl-4 col-md-12">
                              <div className="ms-xl-5">
                                 <div className="service-sidebar md-mt-80">
                                    <div className="contact-banner text-center mt-20" style={{ borderRadius: '16px', border: '1px solid #ccf4f475', background: '#ccf4f475' }}>
                                       <h4 className="mb-35 text-black font-garamond"> To get started, we would like to know you better.</h4>
                                       <Link href="/search-property" className="btn-six">Start the search</Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <h4 className="font-garamond special-title mb-30">{title_2}</h4>
                     <div className="lg-mt-40 mt-20 mb-65 lg-mb-40">
                        <div className="row">
                           {service_features.map((item, index) => (
                              <div key={index} className="col-xl-3 col-lg-3 col-md-3">
                                 <div className="card-style-five mt-30" style={{ padding: '50px 40px 50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div className="icon" style={{ height: '150px', width: '185px' }}><Image src={item.icon} alt="" className="lazy-img w-100 h-100" /></div>
                                    <h5 className="mt-20 mb-20 font-garamond special-title">{`${index + 1}. ${item.title}`}</h5>
                                    <p>{item.desc}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <h4 className="mb-30">{title_3}</h4>
                     <p className="fs-20 lh-lg pb-25">Our fee depends on the rental duration:</p>
                     <ul className="list-style-one fs-22 color-dark style-none">
                        {service_list.map((list, i) => <li key={i}>{list}</li>)}
                     </ul>
                     <p className="fs-10 lh-lg ">To see all the information, click on the following link:</p>
                     <Link href="/faq#Costos" className="btn-two">See Terms & Conditions</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceDetailsArea
