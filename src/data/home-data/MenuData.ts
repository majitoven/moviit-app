interface MenuItem {
    id: number;
    title: string;
    class_name?:string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
    menu_column?: {
        id: number;
        mega_title: string;
        mega_menus: {
            link: string;
            title: string;
        }[];
    }[]
}[];

const menu_data: MenuItem[] = [
    {
        id: 1,
        has_dropdown: false,
        title: "Buscá tu hogar",
        link: "/search-property",
    },
    {
        id: 2,
        has_dropdown: false,
        title: "¿Quiénes somos?",
        link: "/about_us_02",
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Servicios",
        link: "#",
        sub_menus: [
            { link: "/service_details_rent", title: "Alquileres" },
            { link: "/service_details_furniture", title: "Amueblamiento" },
        ],
    },
    {
        id: 4,
        has_dropdown: true,
        title: "Clientes felices",
        link: "#",
        sub_menus: [
            { link: "/listing_details_justicia", title: "Justicia" }, //Paly
            { link: "/listing_details_malasana", title: "Malasaña" }, //Mati & Nico
            { link: "/listing_details_chamberi", title: "Chamberí" }, //Isa
            { link: "/listing_details_bernabeu", title: "Bernabéu" }, // Lu & Gaston
        ],
    },
    {
        id: 5,
        has_dropdown: false,
        title: "FAQ",
        link: "/faq",
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contacto",
        link: "/contact",
    },
];
export default menu_data;
