import ServiceDetailsRent from "@/components/en/inner-pages/services/service-details-rent";
import Wrapper from "@/layouts/Wrapper_en";

export const metadata = {
   title: "Moviit | Rentals",
};
const index = () => {
   return (
      <Wrapper>
         <ServiceDetailsRent />
      </Wrapper>
   )
}

export default index