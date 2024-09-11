import HomeOne from "@/components/homes/home-one";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Moviit Madrid - Encuentra tu apartamento ideal en Madrid",
  description: "Moviit Madrid te ayuda a encontrar el apartamento perfecto en la capital. Descubre opciones adaptadas a tus necesidades.",
  keywords: "inmobiliaria Madrid, buscar piso Madrid, apartamentos Madrid, alquiler Madrid, moviit",
};
const index = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}

export default index