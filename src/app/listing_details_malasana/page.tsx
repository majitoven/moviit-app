import ListingDetailsOne from "@/components/ListingDetails/listing-details-malasaña";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Casos Reales Moviit Madrid",
};
const index = () => {
   return (
      <Wrapper>
         <ListingDetailsOne />
      </Wrapper>
   )
}

export default index