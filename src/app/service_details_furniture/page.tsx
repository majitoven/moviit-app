import ServiceFurniture from "@/components/inner-pages/services/service-details-furniture";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Service One Moviit Madrid",
};
const index = () => {
   return (
      <Wrapper>
         <ServiceFurniture />
      </Wrapper>
   )
}

export default index