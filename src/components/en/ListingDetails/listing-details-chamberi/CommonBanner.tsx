import Link from "next/link"

const CommonBanner = ({ style_3 }: any) => {
   return (
      <div className="row">
         <div className="col-lg-6">
            <h3 className="property-titlee">Apartment Found in Chamberi for Isabel</h3>
            <div className="d-flex flex-wrap mt-10">
               <div className={`list-type text-uppercase mt-15 me-3 ${style_3 ? "bg-white text-dark fw-500" : "text-uppercase border-20"}`}>RENTAL</div>
               <div className="address mt-15"><i className="bi bi-geo-alt"></i> Chamberí, Central Madrid.
               </div>
               <p className="fs-20 lh-lg mt-10" style={{fontSize: '15px', marginTop: '20px'}}>               Isabel reached out to us while in Madrid to help her find an apartment, as she wanted to leave her residence.
</p>

            </div>
         </div>
         <div className="col-lg-6 text-lg-end">
            <div className="d-inline-block md-mt-40">
               <div className="price color-dark fw-500">Price: €1300</div>
               <ul className="style-none d-flex align-content-end action-btns">
                  <li style={{display: 'flex', alignItems: 'center'}}><Link href="/contact"
                     className={`d-flex align-items-center justify-content-center tran3s ${style_3 ? "" : "rounded-circle"}`}><i
                        className="fa-light fa-phone"></i></Link><p style={{margin: 0, paddingLeft: '10px'}}>Contact now</p></li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default CommonBanner
