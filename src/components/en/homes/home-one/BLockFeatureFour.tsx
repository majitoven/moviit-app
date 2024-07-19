"use client"
import Image from "next/image"
import titleShape from "@/assets/images/shape/title_shape_06.svg";
import Link from "next/link";
import { useState } from 'react';

const BLockFeatureFour = () => {
   const [whatsAppNumber, setWhatsAppNumber] = useState('');

   const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Check if the number is not empty
      if (whatsAppNumber) {
         const businessWhatsAppNumber = "+34611877027";
         const message = `Hello! I am interested in learning about your services in Madrid. My number is ${whatsAppNumber}`;
         const whatsappUrl = `https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent(message)}`;
         window.open(whatsappUrl, '_blank');
      }
   };

   return (
      <div className="block-feature-four mt-100 mb-100 xl-mt-130 md-mt-40">
         <div className="container">
            <div className="row">
               <div className="col-lg-6 d-flex order-lg-last">
                  <div className="ps-xxl-5 ms-xl-4 pt-100 xl-pt-80 md-pt-40 pb-45 w-100 h-100 wow fadeInRight">
                     <div className="title-one mb-40 lg-mb-40">
                        <div className="upper-title">TO START:</div>
                        <h3>We would like to <span>get to know you<Image src={titleShape} alt="" className="lazy-img" /></span> better.</h3>
                        <p className="fs-24 color-dark"> Are you a worker or a student? Do you know the areas of Madrid? Are you coming alone or with company? </p>
                        <p style={{margin: '0px'}}>Leave us your WhatsApp number and we will contact you:</p>
                     </div>
                     <form onSubmit={handleWhatsAppRedirect} className="me-xl-4">
                        <input 
                           type="tel" 
                           placeholder="Your WhatsApp number..." 
                           value={whatsAppNumber}
                           onChange={(e) => setWhatsAppNumber(e.target.value.replace(/\D/g, ''))}  // Accept only digits
                        />
                        <button type="submit">Send</button>
                     </form>
                     <div className="fs-16 mt-10 opacity-75">*You can also <Link href="/en/contact" className="fst-italic color-dark text-decoration-underline">fill out the full form and we will contact you.</Link></div>
                  </div>
               </div>

               <div className="col-lg-6 d-flex">
                  <div className="img-gallery position-relative z-1 w-100 h-100 me-lg-5 wow fadeInLeft">
                     <div className="img-bg" style={{ backgroundImage: `url(/assets/images/media/perro.jpg)` }}></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureFour;
