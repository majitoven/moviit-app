import SearchProperty from "@/components/en/inner-pages/search/search-property";

import Wrapper from "@/layouts/Wrapper_en";

export const metadata = {
   title: "Moviit Madrid | Search",
};
const index = () => {
   return (
      <Wrapper>
         <SearchProperty />
      </Wrapper>
   )
}

export default index