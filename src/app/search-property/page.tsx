import SearchProperty from "@/components/inner-pages/search/search-property";

import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Moviit Madrid | Buscar",
};
const index = () => {
   return (
      <Wrapper>
         <SearchProperty />
      </Wrapper>
   )
}

export default index