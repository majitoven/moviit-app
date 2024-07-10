"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import UseSticky from "@/hooks/UseSticky"
import LoginModal from "@/modals/LoginModal"
import Offcanvas from "./Menu/Offcanvas"
import HeaderSearchbar from "./Menu/HeaderSearchbar"

import logo_1 from "@/assets/images/logo/logo_02.svg";
import logo_2 from "@/assets/images/logo/moviit-logo.png";
import logo_3 from "@/assets/images/logo/logo_06.svg";
import spainFlag from "@/assets/images/icon/spain.png";
import ukFlag from "@/assets/images/icon/united-kingdom.png";

const HeaderTwo = ({ style_1, style_2 }: any) => {
   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);
   const [language, setLanguage] = useState("es");
   const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

   const changeLanguage = (lang: string) => {
      setLanguage(lang);
      // Add logic to handle language change, e.g., reload page or update content
   };

   const handleOutsideClick = (e: MouseEvent) => {
      const navbarElement = document.getElementById('navbarNav');
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarElement && !navbarElement.contains(e.target as Node) && !navbarToggler?.contains(e.target as Node)) {
         setNavbarOpen(false);
      }
   };

   useEffect(() => {
      if (navbarOpen) {
         document.addEventListener('click', handleOutsideClick);
      } else {
         document.removeEventListener('click', handleOutsideClick);
      }

      return () => {
         document.removeEventListener('click', handleOutsideClick);
      };
   }, [navbarOpen]);

   return (
      <>
         <div className={`theme-main-menu menu-overlay sticky-menu ${style_2 ? "menu-style-four" : style_1 ? "menu-style-three" : "menu-style-two"} ${sticky ? "fixed" : ""}`}>
            <div className={`inner-content ${style_2 ? "gap-two" : "gap-one"}`}>
               <div className="top-header position-relative">
                  <div className="d-flex align-items-center">
                     <div className="logo-moviit order-lg-0">
                        <Link href="/" className="d-flex align-items-center">
                           <Image src={style_2 ? logo_3 : style_1 ? logo_2 : logo_2} alt="" />
                        </Link>
                     </div>

                     <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
                        <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={navbarOpen ? "true" : "false"}
                           aria-label="Toggle navigation" onClick={() => setNavbarOpen(!navbarOpen)}>
                           <span></span>
                        </button>
                        <div className={`collapse navbar-collapse ${style_2 ? "ms-xl-5" : ""} ${navbarOpen ? "show" : ""}`} id="navbarNav">
                           <NavMenu />
                        </div>
                     </nav>
                     <div className="language-switcher d-block d-lg-none">
                        <div className="dropdown">
                           <a className="nav-link dropdown-toggle" id="languageDropdownMobile" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{
                              display: 'flex',
                              alignItems: 'center'
                           }}>
                              <Image src={language === "en" ? ukFlag : spainFlag} alt="language flag" width={24} height={24} />
                           </a>
                           <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdownMobile">
                              <li><a className="dropdown-item" onClick={() => changeLanguage("en")} style={{
                                 display: 'flex',
                                 alignItems: 'center'
                              }}><Image src={ukFlag} alt="English" width={24} height={24} style={{ marginRight: '10px' }} /> English</a></li>
                              <li><a className="dropdown-item" onClick={() => changeLanguage("es")} style={{
                                 display: 'flex',
                                 alignItems: 'center'
                              }}><Image src={spainFlag} alt="Spanish" width={24} height={24} style={{ marginRight: '10px' }} /> Español</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {navbarOpen && <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998
         }} onClick={() => setNavbarOpen(false)} />}

         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <LoginModal />
         <HeaderSearchbar isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default HeaderTwo;
