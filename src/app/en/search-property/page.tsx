import SearchProperty from "@/components/en/inner-pages/search/search-property";

import Wrapper from "@/layouts/Wrapper_en";

export const metadata = {
   title: "Moviit | Search",
};
const index = () => {
   return (
      <Wrapper>
         <SearchProperty />
      </Wrapper>
   )
}

export default index