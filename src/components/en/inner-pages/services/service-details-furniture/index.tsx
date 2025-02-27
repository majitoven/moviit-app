import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo"
import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderTwo from "../../../layouts/headers/HeaderTwo"
import BlockFeatureOne from "./BlockFeatureOne"
import Feedback from "@/components/en/homes/home-one/Feedback"
import FancyBanner from "./FancyBanner"

const ServiceFurniture = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbTwo title="Real estate consulting" sub_title="We provide you with guidance" background={`url(/assets/images/media/silla.jpg)`} />
         <BlockFeatureOne />
         <FancyBanner />
         <Feedback />
         <FooterOne style={true} />
      </>
   )
}

export default ServiceFurniture;
