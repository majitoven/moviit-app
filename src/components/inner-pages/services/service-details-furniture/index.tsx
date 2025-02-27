import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import BlockFeatureOne from "./BlockFeatureOne"
import HomeBLockFeatureOne from "@/components/homes/home-one/BLockFeatureOne"
import BlockFeatureTwo from "./BlockFeatureTwo"
import Feedback from "@/components/homes/home-one/Feedback"
import FancyBanner from "./FancyBanner"
import BLockFeatureTwo from "@/components/homes/home-four/BLockFeatureTwo"
import FancyBannerCommon from "@/components/common/FancyBanner"

const ServiceFurniture = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbTwo title="Asesoramiento inmobiliario" sub_title="Te asesoramos" background={`url(/assets/images/media/silla.jpg)`} />
         <BlockFeatureOne />
         <FancyBanner />
         <Feedback />
         <FooterOne style={true} />
      </>
   )
}

export default ServiceFurniture;
