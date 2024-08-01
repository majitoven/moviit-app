import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import seviceDetailsThumb_1 from "@/assets/images/media/A3.jpg";
import seviceDetailsThumb_2 from "@/assets/images/media/friendz.jpg";

import seviceDetailsIcon_1 from "@/assets/images/icon/icon_contact.png";
import seviceDetailsIcon_2 from "@/assets/images/icon/lupa.png";
import seviceDetailsIcon_3 from "@/assets/images/icon/icon_homy.png";
import seviceDetailsIcon_4 from "@/assets/images/icon/timbre.png";


interface ContentType {
   title_1: string;
   title_2: string;
   title_3: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   desc_4: JSX.Element;
   service_features: {
      icon: StaticImageData;
      title: string;
      desc: string
   }[];
   service_list: string[];
   sidebar_list: string[];
}[];

const content_data: ContentType = {
   title_1: "Encontramos tu piso / habitación.",
   title_2: "Solo tienes que seguir estos simples pasos:",
   title_3: "Costos y condiciones del servicio:",
   desc_1: (<>Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations & reputation.They can actually generate value and create opportunities.</>),
   desc_2: (<>Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects. We work collaboratively with organizations to identify & leverage the potential within their risk and compliance functions, enabling them to thrive in ever-changing business landscape.</>),
   desc_3: (<>Your leading real estate advocate, transforming houses into dreams. Trust us to expertly guide you home.</>),
   desc_4: (<>Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects.</>),
   service_features: [
      {
         icon: seviceDetailsIcon_1,
         title: "TE CONOCEMOS",
         desc: "Describe tu necesidad/preferencias rellenando el formulario de búsqueda."
      },
      {
         icon: seviceDetailsIcon_2,
         title: "BUSCAMOS",
         desc: "Con toda la información recopilada, comienza la búsqueda de tu lugar perfecto."
      },
      {
         icon: seviceDetailsIcon_4,
         title: "VISITAMOS",
         desc: "Visitamos tus apartamentos/habitaciones favoritos y te enviamos fotos y videos."
      },
      {
         icon: seviceDetailsIcon_3,
         title: "APLICAMOS",
         desc: "Te asesoramos sobre los documentos que debes presentar para aplicar a tu apartamento ideal."
      },
   ],
   service_list: ["Contrato temporal (1 - 6 meses): 50% de 1 mes de alquiler + Seña de 200 Euros (1 persona)",
      "Contrato temporal (7 - 11 meses): 70% de 1 mes de alquiler + Seña de 200 Euros (1 persona)",
      "Contrato anual (1 año): 1 mes de alquiler + Seña de 200 Euros (por persona persona)",],
   sidebar_list: ["Property & Loan", "Sell Home", "Consulting Service", "Rent Home", "Mortgage",],
}

const { title_1, title_2, title_3, desc_1, desc_2, desc_3, desc_4, service_features, service_list, sidebar_list } = content_data;

const ServiceDetailsArea = () => {
   return (
      <div className="service-details mt-120 xl-mt-100 mb-100 xl-mb-100 pl-40 pr-40 md-mt-60">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="service-post">
                     <h3 className="mb-30">{title_1}</h3>
                     <h4 className="font-garamond special-title">¿Qué hacemos?</h4>
                     <p className="fs-20 lh-lg pb-25 mt-20"> Nos aseguramos de que llegues directamente a tu hogar ideal. </p>
                     <h4 className="font-garamond special-title">¿Cómo lo hacemos?</h4>
                     <p className="fs-20 lh-lg mt-20">A través de una búsqueda 360º de apartamentos y habitaciones en Madrid, te presentamos todas las opciones disponibles que se ajustan a tus necesidades y circunstancias. Negociamos en tu nombre con la agencia inmobiliaria o el propietario del apartamento y te asesoramos sobre la documentación necesaria para ser el mejor perfil y aumentar tus posibilidades de ser aceptado.</p>
                  </div>
               </div>

               <div className="col-lg-4">
                  <div className="ms-xl-5">
                     <div className="service-sidebar md-mt-80">
                        <div className="service-category">
                           <Image src={seviceDetailsThumb_2} alt="" className="lazy-img w-100 mt-20" />
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
                              <Image src={seviceDetailsThumb_1} alt="" className="lazy-img  w-100 mt-20" />
                           </div>
                           <div className="col-xl-4 col-md-12">
                              <div className="ms-xl-5">
                                 <div className="service-sidebar md-mt-80">
                                    <div className="contact-banner text-center mt-20" style={{ borderRadius: '16px', border: '1px solid #ccf4f475', background: '#ccf4f475' }}>
                                       <h4 className="mb-35 text-black font-garamond"> Para empezar, nos gustaría conocerte mejor.</h4>
                                       <Link href="/search-property" className="btn-six">Comenzar la búsqueda</Link>
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
                                    <div className="icon" style={{height: '150px', width: '185px'}}><Image src={item.icon} alt="" className="lazy-img w-100 h-100" /></div>
                                    <h5 className="mt-20 mb-20 font-garamond special-title">{`${index + 1}. ${item.title}`}</h5>
                                    <p>{item.desc}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <h4 className="mb-30">{title_3}</h4>
                     <p className="fs-20 lh-lg pb-25">Nuestra tarifa depende del tipo de contrato:</p>
                     <ul className="list-style-one fs-22 color-dark style-none">
                        {service_list.map((list, i) => <li key={i}>{list}</li>)}
                     </ul>
                     <p className="fs-10 lh-lg ">Para ver toda la información haz click en el siguiente link:</p>
                     <Link href="/faq#Costos" className="btn-two">Ver Términos & Condiciones</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ServiceDetailsArea
