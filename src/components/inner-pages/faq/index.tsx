import BreadcrumbFour from '@/components/common/breadcrumb/BreadcrumbFour'
import FooterFour from '@/layouts/footers/FooterFour'
import HeaderTwo from '@/layouts/headers/HeaderTwo'
import FaqArea from './FaqArea'
import FancyBanner from '@/components/common/FancyBanner'

const Faq = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbFour title="FAQ's" subTitle="¿Tienes dudas?" subTitle2="Respondemos todas las preguntas y respuestas." style={false} background={`url(/assets/images/media/contacto3.jpg)`}/>
         <FaqArea />
         <FancyBanner style={false} />
         <FooterFour />
      </>
   )
}

export default Faq
