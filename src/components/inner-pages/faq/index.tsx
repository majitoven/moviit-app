import BreadcrumbFour from '@/components/common/breadcrumb/BreadcrumbFour'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import FaqArea from './FaqArea'
import FancyBanner from '@/components/common/FancyBanner'
import BreadcrumbTwo from '@/components/common/breadcrumb/BreadcrumbTwo'

const Faq = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         {/* <BreadcrumbFour title="FAQ's" subTitle="¿Tienes dudas?" subTitle2="Respondemos todas las preguntas y respuestas." style={false} background={`url(/assets/images/media/contacto3.jpg)`}/> */}
         <BreadcrumbTwo title="FAQ" sub_title="¿Tienes dudas?" background={`url(/assets/images/media/contacto3.jpg)`}/>
         <FaqArea />
         <FooterOne style={true} />
      </>
   )
}

export default Faq
