import ServiceDetailsRent from "@/components/inner-pages/services/service-details-rent";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Moviit Madrid | Alquilamos",
};
const index = () => {
   return (
      <Wrapper>
         <ServiceDetailsRent />
      </Wrapper>
   )
}

export default index