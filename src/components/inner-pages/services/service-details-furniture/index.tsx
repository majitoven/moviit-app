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
         <BreadcrumbTwo title="Amueblamiento" sub_title="Amueblamos tu casa" background={`url(/assets/images/media/silla.jpg)`} />
         <BlockFeatureOne />
         <HomeBLockFeatureOne />
         <BlockFeatureTwo style={false} />
         <FancyBanner />
         <Feedback />
         <BLockFeatureTwo style={true} />
         <FancyBannerCommon />
         <FooterOne style={true} />
      </>
   )
}

export default ServiceFurniture;
