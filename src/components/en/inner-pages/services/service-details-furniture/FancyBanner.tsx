import Link from "next/link"
import Head from "next/head";

const FancyBanner = () => {
   return (
      <>
         <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
         </Head>
         <div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-70 pb-90 lg-pb-70 mt-40">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-8 m-auto text-center">
                     <div className="title-one mb-50 lg-mb-40">
                        <h2 className="text-white fs-lg">Straight to bed.</h2>
                        <p className="fs-24 text-white">Let us take care of finding your ideal home. </p>
                     </div>
                     <Link href="/en/contact" className="btn-six">Start now</Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default FancyBanner
