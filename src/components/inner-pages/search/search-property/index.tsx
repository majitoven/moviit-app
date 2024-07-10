import DashboardHeaderOne from "@/layouts/headers/dashboard/DashboardHeaderOne"
import SearchPropertyBody from "./SearchPropertyBody"
import BreadcrumbFour from '@/components/common/breadcrumb/BreadcrumbFour'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import FancyBanner from '@/components/common/FancyBanner'
import BreadcrumbTwo from '@/components/common/breadcrumb/BreadcrumbTwo'

const SearchProperty = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbTwo title="Búsqueda" sub_title="Encuentra tu hogar" background={`url(/assets/images/media/prueba3-transformed-copy.jpeg)`} />
         <SearchPropertyBody />
         <FooterOne style={true} />
      </>
   )
}

export default SearchProperty
