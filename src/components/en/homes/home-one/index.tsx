import FooterOne from "../../layouts/footers/FooterOne"
import HeaderTwo from "../../layouts/headers/HeaderTwo"
import Banner from "../home-three/HeroBanner"
import Feedback from "../home-two/FeedbackOne"
import FancyBannerOne from "./FancyBannerOne"
import BLockFeatureTwo from "../home-two/BLockFeatureTwo"
import BLockFeatureFour from "./BLockFeatureFour"
import BLockFeatureFive from "./BLockFeatureFive"
import FancyBannerThree from "../home-two/FancyBannerTwo"
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
      <AgentBanner style={false} />
      <BLockFeatureTwo />
      <FancyBannerThree />
      <FooterOne style={true} />
    </>
  )
}

export default HomeOne
