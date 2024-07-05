import HeaderTwo from "@/layouts/headers/HeaderTwo"
import ListingDetailsOneArea from "./ListingDetailsOneArea"
import FancyBanner from "@/components/common/FancyBanner"
import FooterOne from "@/layouts/footers/FooterOne"
import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo"

const ListingDetailsOne = () => {
  return (
    <>
      <HeaderTwo style_1={true} style_2={false} />
      <BreadcrumbTwo title="Clientes felices" background={`url(/assets/images/media/A2_short.jpg)`} />
      <ListingDetailsOneArea />
      <FooterOne style={true} />
    </>
  )
}

export default ListingDetailsOne
