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
        link: "/sss",
    },
    {
        id: 2,
        has_dropdown: false,
        title: "¿Quienes somos?",
        link: "/about_us_01",
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Servicios",
        link: "#",
        sub_menus: [
            { link: "/blog_01", title: "Alquileres" },
            { link: "/blog_02", title: "Amueblamiento" },
        ],
    },
    {
        id: 4,
        has_dropdown: true,
        title: "Clientes felices",
        link: "#",
        sub_menus: [
            { link: "/blog_01", title: "Fulanita / Chueca" },
            { link: "/blog_01", title: "Fulanita / Almagro" },
            { link: "/blog_01", title: "Fulanita / Chamberí" },
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
