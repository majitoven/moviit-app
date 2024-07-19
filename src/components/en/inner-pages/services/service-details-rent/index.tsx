import FooterOne from "../../../layouts/footers/FooterOne";
import ServiceDetailsArea from "./ServiceDetailsArea";
import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";

const ServiceDetailsRent = () => {
  return (
    <>
      <HeaderTwo style_1={true} style_2={false} />
      <BreadcrumbTwo title="Rentals" sub_title="Need to rent a flat?" background={`url(/assets/images/media/sillonmarron.jpg)`} />
      <ServiceDetailsArea />
      <FooterOne style={true} />
    </>
  );
};

export default ServiceDetailsRent;
