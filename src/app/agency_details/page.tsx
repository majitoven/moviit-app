import AgencyDetails from "@/components/inner-pages/agency/agency-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Agency Details Moviit Madrid",
};
const index = () => {
   return (
      <Wrapper>
         <AgencyDetails />
      </Wrapper>
   )
}

export default index