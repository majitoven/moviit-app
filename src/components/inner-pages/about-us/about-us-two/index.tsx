'use client'

import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import BLockFeatureOne from "./BLockFeatureOne";
import BLockFeatureTwo from "./BLockFeatureTwo";
import Feedback from "@/components/homes/home-six/Feedback";
import Brand from "./Brand";
import IgBanner from "./IgBanner";
import FooterOne from "@/layouts/footers/FooterOne";
import VideoBanner from "@/components/homes/home-seven/VideoBanner";
import { InstagramEmbed } from 'react-social-media-embed';

const AboutUsTwo = () => {

   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbTwo title="¿Quiénes somos?" sub_title="Nosotros" />
         <BLockFeatureOne />
         <IgBanner />
         <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ padding: '30px', borderRadius: '16px', border: '1px solid #CCF4F4', margin: '40px', background: '#CCF4F4' }}>
               <InstagramEmbed url="https://www.instagram.com/reel/C7NQqNDolhd/?igsh=aW96ZTl2Z3lpMm11" width={328} />
            </div>
            <div style={{ padding: '30px', borderRadius: '16px', border: '1px solid #CCF4F4', margin: '40px', background: '#CCF4F4' }}>
               <InstagramEmbed url="https://www.instagram.com/reel/C5ULADUITmO/?igsh=MW82Y3MyeDIyanhuNg==" width={328} />
            </div>
            <div style={{ padding: '30px', borderRadius: '16px', border: '1px solid #CCF4F4', margin: '40px', background: '#CCF4F4' }}>
               <InstagramEmbed url="https://www.instagram.com/reel/C5wvvEYIddt/?igsh=MXBkMWIwMmo0eTJ4OA==" width={328} />
            </div>
         </div>
         <VideoBanner />

         {/* <BLockFeatureTwo /> */}
         <Feedback />
         {/* <Brand /> */}
         <FooterOne style={true} />
      </>
   )
}

export default AboutUsTwo;
