import ServiceFurniture from "@/components/en/inner-pages/services/service-details-furniture";
import Wrapper from "@/layouts/Wrapper_en";

export const metadata = {
   title: "Madrid | Furnish",
};
const index = () => {
   return (
      <Wrapper>
         <ServiceFurniture />
      </Wrapper>
   )
}

export default index