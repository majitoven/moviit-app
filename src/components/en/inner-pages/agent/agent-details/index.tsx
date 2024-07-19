
import HeaderTwo from "../../../layouts/headers/HeaderTwo"
import FooterOne from "../../../layouts/footers/FooterOne"
import AgencyDetailsArea from "../../agency/agency-details/AgencyDetailsArea"
import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo"

const AgentDetails = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbTwo title="Contact" sub_title="How can we assist you?" subTitle2="We answer within 24hs." style={false} background={`url(/assets/images/media/contacto.jpg)`}/>
         <AgencyDetailsArea style={true} />
         <FooterOne style={true} />
      </>
   )
}

export default AgentDetails
