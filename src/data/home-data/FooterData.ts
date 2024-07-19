interface DataType {
   id: number;
   page: string;
   widget_title: string;
   widget_title_en?: string;
   widget_class?: string;
   widget_class2?: string;
   footer_link: {
      link: string;
      link_title: string;
      link_title_en?: string;
   }[];

}

const footer_data: DataType[] = [
   {
      id: 2,
      widget_class: "xs-mt-30",
      page: "home_1",
      widget_title: "Legal:",
      widget_title_en: "Legal:",
      footer_link: [
         { link: "/faq#Privacidad", link_title: "Política de privacidad", link_title_en: "Privacy Policy" },
         { link: "/faq#Costos", link_title: "Términos & condiciones", link_title_en: "Terms & Conditions" },
         { link: "/faq", link_title: "FAQ", link_title_en: "FAQ" }
      ]
   },
   {
      id: 3,
      widget_class: "xs-mt-30",
      page: "home_1",
      widget_title: "Más información:",
      widget_title_en: "More info:",
      footer_link: [
         { link: "/about_us_02", link_title: "La empresa", link_title_en: "The Company" },
         { link: "/search_property", link_title: "Buscar piso", link_title_en: "Search Property" },
         { link: "/service_details_rent", link_title: "Servicio Alquiler", link_title_en: "Rental Service" },
         { link: "/service_details_furniture", link_title: "Servicio Amueblamiento", link_title_en: "Furniture Service" },
         { link: "/listing_details_justicia", link_title: "Casos reales", link_title_en: "Real Cases" },
         { link: "/contact", link_title: "Contacto", link_title_en: "Contact" }
      ]
   },

   // home two

   {
      id: 1,
      page: "home_3",
      widget_title: "Links",
      footer_link: [{ link: "/", link_title: "Home" }, { link: "/dashboard/membership", link_title: "Membership" }, { link: "/about_us_01", link_title: "About Company" }, { link: "/blog_01", link_title: "Blog" }, { link: "/blog_02", link_title: "Explore Careers" }, { link: "/pricing_02", link_title: "Pricing" }, { link: "/dashboard/dashboard-index", link_title: "Dashboard" },]
   },
   {
      id: 2,
      widget_class: "col-xxl-3 col-xl-4",
      page: "home_3",
      widget_title: "Legal",
      footer_link: [{ link: "/faq", link_title: "Terms & conditions" }, { link: "/faq", link_title: "Cookie" }, { link: "/faq", link_title: "Privacy policy" }, { link: "/faq", link_title: "FAQ" },]
   },
   {
      id: 3,
      page: "home_3",
      widget_title: "New Listing",
      footer_link: [{ link: "/listing_01", link_title: "​Buy Apartments" }, { link: "/listing_02", link_title: "Buy Condos" }, { link: "listing_03", link_title: "Rent Houses" }, { link: "listing_04", link_title: "Rent Industrial" }, { link: "/listing_05", link_title: "Buy Villas" }, { link: "/listing_06", link_title: "Rent Office" },]
   },

   // home four

   {
      id: 1,
      page: "home_4",
      widget_class: "col-lg-2",
      widget_title: "Links",
      footer_link: [{ link: "/", link_title: "Home" }, { link: "/dashboard/membership", link_title: "Membership" }, { link: "/about_us_01", link_title: "About Company" }, { link: "/blog_01", link_title: "Blog" },]
   },
   {
      id: 2,
      widget_class: "col-xl-2 col-lg-3",
      page: "home_4",
      widget_title: "New Listing",
      footer_link: [{ link: "/listing_01", link_title: "​Buy Apartments" }, { link: "/listing_02", link_title: "Buy Condos" }, { link: "listing_03", link_title: "Rent Houses" }, { link: "listing_04", link_title: "Rent Industrial" }, { link: "/listing_05", link_title: "Buy Villas" }, { link: "/listing_06", link_title: "Rent Office" },]
   },
   {
      id: 3,
      widget_class: "col-xl-2 col-lg-3",
      page: "home_4",
      widget_title: "Legal",
      footer_link: [{ link: "/faq", link_title: "Terms & conditions" }, { link: "/faq", link_title: "Cookie" }, { link: "/faq", link_title: "Privacy policy" }, { link: "/faq", link_title: "FAQ" },]
   },

   // home five

   {
      id: 1,
      page: "home_5",
      widget_class: "col-lg-3 ms-auto",
      widget_class2: "ps-xl-5",
      widget_title: "Links",
      footer_link: [{ link: "/", link_title: "Home" }, { link: "/dashboard/membership", link_title: "Membership" }, { link: "/about_us_01", link_title: "About Company" }, { link: "/blog_01", link_title: "Blog" }, { link: "/blog_02", link_title: "Explore Careers" }, { link: "/pricing_02", link_title: "Pricing" }, { link: "/dashboard/dashboard-index", link_title: "Dashboard" },]
   },
   {
      id: 2,
      widget_class: "col-lg-3",
      page: "home_5",
      widget_title: "Legal",
      footer_link: [{ link: "/faq", link_title: "Terms & conditions" }, { link: "/faq", link_title: "Cookie" }, { link: "/faq", link_title: "Privacy policy" }, { link: "/faq", link_title: "FAQ" },]
   },
   {
      id: 3,
      widget_class: "col-lg-2",
      page: "home_5",
      widget_title: "New Listing",
      footer_link: [{ link: "/listing_01", link_title: "​Buy Apartments" }, { link: "/listing_02", link_title: "Buy Condos" }, { link: "listing_03", link_title: "Rent Houses" }, { link: "listing_04", link_title: "Rent Industrial" }, { link: "/listing_05", link_title: "Buy Villas" }, { link: "/listing_06", link_title: "Rent Office" },]
   },
]

export default footer_data;