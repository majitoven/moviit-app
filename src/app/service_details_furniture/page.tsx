import ServiceFurniture from "@/components/inner-pages/services/service-details-furniture";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Madrid | Amueblamos",
};
const index = () => {
   return (
      <Wrapper>
         <ServiceFurniture />
      </Wrapper>
   )
}

export default index