import HeaderTwo from "@/layouts/headers/HeaderTwo"
import ListingDetailsOneArea from "./ListingDetailsOneArea"
import FancyBanner from "@/components/common/FancyBanner"
import FooterOne from "@/layouts/footers/FooterOne"

const ListingDetailsOne = () => {
  return (
    <>
      <HeaderTwo style_1={true} style_2={false} />
      <ListingDetailsOneArea />
      <FooterOne style={true} />
    </>
  )
}

export default ListingDetailsOne
