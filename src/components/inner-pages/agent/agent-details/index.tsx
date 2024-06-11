import BreadcrumbFour from "@/components/common/breadcrumb/BreadcrumbFour"

import HeaderTwo from "@/layouts/headers/HeaderTwo"
import FooterOne from "@/layouts/footers/FooterOne"
import AgencyDetailsArea from "../../agency/agency-details/AgencyDetailsArea"
import FancyBanner from "@/components/common/FancyBanner"

const AgentDetails = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbFour title="Contactanos" subTitle="¿En qué podemos ayudarte?" subTitle2="Ponte en contacto y te responderemos de inmediato." style={false} background={`url(/assets/images/media/contacto.jpg)`}/>
         <AgencyDetailsArea style={true} />
         <FooterOne style={true} />
      </>
   )
}

export default AgentDetails
