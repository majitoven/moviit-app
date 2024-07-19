'use client'

import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import BLockFeatureOne from "./BLockFeatureOne";
import Feedback from "@/components/en/homes/home-six/Feedback";
import IgBanner from "./IgBanner";
import FooterOne from "../../../layouts/footers/FooterOne";
import VideoBanner from "@/components/homes/home-seven/VideoBanner";
import { InstagramEmbed } from 'react-social-media-embed';

const AboutUsTwo = () => {

   return (
      <>
         <HeaderTwo style_1={true} style_2={false} />
         <BreadcrumbTwo title="About Us" sub_title="Who are we?" />
         <BLockFeatureOne />
         <IgBanner />
         <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ padding: '30px', borderRadius: '16px', border: '1px solid #ccf4f475', margin: '40px', background: '#ccf4f475' }}>
               <InstagramEmbed url="https://www.instagram.com/reel/C7NQqNDolhd/?igsh=aW96ZTl2Z3lpMm11" width={328} />
            </div>
            <div style={{ padding: '30px', borderRadius: '16px', border: '1px solid #ccf4f475', margin: '40px', background: '#ccf4f475' }}>
               <InstagramEmbed url="https://www.instagram.com/reel/C5ULADUITmO/?igsh=MW82Y3MyeDIyanhuNg==" width={328} />
            </div>
            <div style={{ padding: '30px', borderRadius: '16px', border: '1px solid #ccf4f475', margin: '40px', background: '#ccf4f475' }}>
               <InstagramEmbed url="https://www.instagram.com/reel/C5wvvEYIddt/?igsh=MXBkMWIwMmo0eTJ4OA==" width={328} />
            </div>
         </div>
         <Feedback />
         <VideoBanner />
         {/* <BLockFeatureTwo /> */}
         {/* <Brand /> */}
         <FooterOne style={true} />
      </>
   )
}

export default AboutUsTwo;
