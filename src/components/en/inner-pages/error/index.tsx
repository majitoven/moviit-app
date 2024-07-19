import HeaderTwo from "@/layouts/headers/HeaderTwo"
import ErrorArea from "./ErrorArea"
import FooterOne from '@/layouts/footers/FooterOne'

const Error = () => {
   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <ErrorArea />
         <FooterOne style={true} />

      </>
   )
}

export default Error
