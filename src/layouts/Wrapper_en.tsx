"use client";

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { animationCreate } from "@/utils/utils";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

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
        <FloatingWhatsApp buttonStyle={{background: '#3BB17C'}} avatar="https://i.ibb.co/WcBhrjf/mar-cara.jpg" phoneNumber="+34611877027" accountName="Moviit Madrid" chatMessage={"Hi! We are Moviit 🤝 \nHow can we help you?"} placeholder="Write a message..." statusMessage="We answer within 24hs."/>
        <ToastContainer position="top-center" />
    </>;
}

export default Wrapper
