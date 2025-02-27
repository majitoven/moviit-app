"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import logo from "@/assets/images/logo/moviit-logo.png";
import spainFlag from "@/assets/images/icon/spain.png";
import ukFlag from "@/assets/images/icon/united-kingdom.png";

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
        title: "Find your home",
        link: "/en/search-property",
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About us",
        link: "/en/about_us_02",
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Services",
        link: "#",
        sub_menus: [
            { link: "/en/service_details_rent", title: "Rentals" },
            { link: "/en/service_details_furniture", title: "Furnishing" },
        ],        
    },
    {
        id: 4,
        has_dropdown: true,
        title: "Successful cases",
        link: "#",
        sub_menus: [
            { link: "/en/listing_details_justicia", title: "Justicia" }, //Paly
            { link: "/en/listing_details_malasana", title: "Malasaña" }, //Mati & Nico
            { link: "/en/listing_details_chamberi", title: "Chamberí" }, //Isa
            { link: "/en/listing_details_bernabeu", title: "Bernabéu" }, // Lu & Gaston
        ],
    },
    {
        id: 5,
        has_dropdown: false,
        title: "FAQ",
        link: "/en/faq",
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact",
        link: "/en/contact",
    },
];

const NavMenu = () => {
    const pathname = usePathname();
    const currentRoute = usePathname();
    const [navTitle, setNavTitle] = useState("");
    const [language, setLanguage] = useState("en");
    const router = useRouter();

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
    };

    const openMobileMenu = (menu: any) => {
        if (navTitle === menu) {
            setNavTitle("");
        } else {
            setNavTitle(menu);
        }
    };

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
        if (typeof window !== 'undefined') {
            if (lang === "es") {
                window.location.href = "https://www.moviitmadrid.com/";
            } else {
                window.location.href = "https://www.moviitmadrid.com/en";
            }
        }
    };

    return (
        <div className="navbar-container">
            <ul className="navbar-nav align-items-lg-center">
                <li className="d-block d-lg-none">
                    <div className="logo">
                        <Link href="/en" className="d-block">
                            <Image src={logo} alt="" style={{ maxWidth: '40%' }} />
                        </Link>
                    </div>
                </li>
                {menu_data.map((menu: any, index) => (
                    <li key={menu.id} className={`nav-item dropdown ${menu.class_name} ${index == 0 && 'dashboard-menu'}`}>
                        <Link href={menu.link} className={`nav-link ${menu.has_dropdown && 'dropdown-toggle'} ${pathname === menu.link ? 'active' : ''}
                     ${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)}>
                            {menu.title}
                        </Link>
                        {menu.has_dropdown && (
                            <>
                                <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>
                                    {menu.sub_menus && menu.sub_menus.map((sub_m: any, i: any) => (
                                        <li key={i}>
                                            <Link href={sub_m.link} className={`dropdown-item ${pathname === sub_m.link ? 'active' : ''}`}>
                                                <span>{sub_m.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                    {menu.menu_column && (
                                        <li className="row gx-1">
                                            {menu.menu_column.map((item: any) => (
                                                <div key={item.id} className="col-lg-4">
                                                    <div className="menu-column">
                                                        <h6 className="mega-menu-title">{item.mega_title}</h6>
                                                        <ul className="style-none mega-dropdown-list">
                                                            {item.mega_menus.map((mega_m: any, i: any) => (
                                                                <li key={i}><Link href={mega_m.link} className={`dropdown-item ${pathname === mega_m.link ? 'active' : ''}`}><span>{mega_m.title}</span></Link></li>))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </li>
                                    )}
                                </ul>
                            </>
                        )}
                    </li>
                ))}
            </ul>
            <div className="language-switcher d-none d-lg-block">
                <div className="dropdown">
                    <a className="nav-link dropdown-toggle" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Image src={language === "en" ? ukFlag : spainFlag} alt="language flag" width={24} height={24} />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                        <li><a className="dropdown-item" onClick={() => changeLanguage("es")} style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}><Image src={spainFlag} alt="Spanish" width={24} height={24} style={{ marginRight: '10px' }} /> Spanish</a></li>
                        <li><a className="dropdown-item" onClick={() => changeLanguage("en")} style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}><Image src={ukFlag} alt="English" width={24} height={24} style={{ marginRight: '10px' }} /> English</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;
