import HomeOne from "@/components/homes/home-one";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Moviit Madrid - Alquiler de Apartamentos en Madrid",
  description: "En Moviit Madrid, te ofrecemos el mejor servicio para encontrar tu apartamento ideal en la capital española. Descubre nuestra amplia oferta de alquileres en Madrid, ajustados a tus necesidades y presupuesto.",
  keywords: "inmobiliaria en Madrid, alquiler de apartamentos en Madrid, buscar piso en Madrid, pisos en alquiler Madrid, apartamentos baratos Madrid, alquileres Madrid, mudanza a Madrid, inmuebles en Madrid, moviit Madrid",
};
const index = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default index;
