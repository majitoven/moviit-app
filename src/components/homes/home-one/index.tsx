import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import Banner from "../home-three/HeroBanner"
import Feedback from "../home-two/FeedbackOne"
import BLockFeatureOne from "./BLockFeatureOne"
import BLockFeatureTwo from "./BLockFeatureTwo"
import BLockFeatureThree from "./BLockFeatureThree"
import Property from "./Property"
import FancyBannerOne from "./FancyBannerOne"
import AgentArea from "./AgentArea"
import BLockFeatureFour from "./BLockFeatureFour"
import BLockFeatureFive from "./BLockFeatureFive"
import FancyBannerThree from "./FancyBannerThree"
import FancyBanner from "@/components/common/FancyBanner"

const HomeOne = () => {
  return (
    <>
      <HeaderTwo style_1={true} style_2={false} />
      <Banner />
      <Feedback />
      <BLockFeatureFive style={false} />
      <FancyBanner style={false} />
      <BLockFeatureOne />
      <BLockFeatureTwo />
      <BLockFeatureThree />
      <Property />
      <FancyBannerOne style={false} />
      <AgentArea style={false} />
      <BLockFeatureFour />
      <FancyBannerThree />
      <FooterOne style={false} />
    </>
  )
}

export default HomeOne
