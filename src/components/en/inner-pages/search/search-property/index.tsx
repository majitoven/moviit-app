import SearchPropertyBody from "./SearchPropertyBody"
import FooterOne from '../../../layouts/footers/FooterOne'
import HeaderTwo from '../../../layouts/headers/HeaderTwo'
import BreadcrumbTwo from '@/components/common/breadcrumb/BreadcrumbTwo'

const SearchProperty = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbTwo title="Search" sub_title="Find your home" background={`url(/assets/images/media/prueba3-transformed-copy.jpeg)`} />
         <SearchPropertyBody />
         <FooterOne style={true} />
      </>
   )
}

export default SearchProperty
