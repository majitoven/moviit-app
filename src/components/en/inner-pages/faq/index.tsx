import FooterOne from '../../layouts/footers/FooterOne'
import HeaderTwo from '../../layouts/headers/HeaderTwo'
import FaqArea from './FaqArea'
import BreadcrumbTwo from '@/components/common/breadcrumb/BreadcrumbTwo'

const Faq = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbTwo title="FAQ" sub_title="Any question?" background={`url(/assets/images/media/contacto3.jpg)`}/>
         <FaqArea />
         <FooterOne style={true} />
      </>
   )
}

export default Faq
