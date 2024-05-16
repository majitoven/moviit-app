import FooterOne from "@/layouts/footers/FooterOne"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import Banner from "../home-three/HeroBanner"
import Feedback from "../home-two/FeedbackOne"
import BLockFeatureThree from "./BLockFeatureThree"
import Property from "./Property"
import FancyBannerOne from "./FancyBannerOne"
import BLockFeatureTwo from "../home-two/BLockFeatureTwo"
import AgentArea from "./AgentArea"
import BLockFeatureFour from "./BLockFeatureFour"
import BLockFeatureFive from "./BLockFeatureFive"
import FancyBannerThree from "../home-two/FancyBannerTwo"
import FancyBanner from "@/components/common/FancyBanner"
import FancyBannerTwo from "../home-two/FancyBannerOne"
import AgentBanner from "../home-four/FancyBanner"


const HomeOne = () => {
  return (
    <>
      <HeaderTwo style_1={true} style_2={false} />
      <Banner />
      <Feedback />
      <BLockFeatureFive style={false} />
      <FancyBannerTwo />
      <BLockFeatureFour />
      <FancyBannerOne style={false} />
      {/* <FancyBanner style={false} /> */}
      <AgentBanner style={false} />
      <BLockFeatureTwo />
      {/* <BLockFeatureThree /> */}
      {/* <Property /> */}
      {/* <AgentArea style={false} /> */}
      {/* <FancyBannerThree /> */}
      <FancyBannerThree/>
      <FooterOne style={true} />
    </>
  )
}

export default HomeOne
