import HeaderTwo from "@/layouts/headers/HeaderTwo"
import ListingDetailsOneArea from "./ListingDetailsOneArea"
import FancyBanner from "@/components/common/FancyBanner"
import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo"
import FooterOne from "@/layouts/footers/FooterOne"

const ListingDetailsOne = () => {
  return (
    <>
      <HeaderTwo style_1={true} style_2={false} />
      <BreadcrumbTwo title="Casos de éxito" background={`url(/assets/images/media/A2_short.jpg)`} />
      <ListingDetailsOneArea />
      <FooterOne style={true} />
    </>
  )
}

export default ListingDetailsOne
