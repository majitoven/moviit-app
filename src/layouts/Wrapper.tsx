"use client";

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { animationCreate } from "@/utils/utils";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ScrollToTop from "@/components/common/ScrollToTop";

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: any) => {
    useEffect(() => {
        // animation
        const timer = setTimeout(() => {
            animationCreate();
        }, 100);

        return () => clearTimeout(timer);
    }, []);


    return <>
        {children}
        {/* <ScrollToTop /> */}
        <FloatingWhatsApp buttonStyle={{background: '#3BB17C'}} avatar="https://i.ibb.co/WcBhrjf/mar-cara.jpg" phoneNumber="+34611877027" accountName="Moviit Madrid" chatMessage="Hola! 🤝 ¿Cómo podemos ayudarte?" placeholder="Escribe tu consulta..." statusMessage="Responderemos en menos de 24hrs."/>
        <ToastContainer position="top-center" />
    </>;
}

export default Wrapper
