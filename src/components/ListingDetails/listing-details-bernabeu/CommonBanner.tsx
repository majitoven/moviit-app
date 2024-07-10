import Link from "next/link"

const CommonBanner = ({ style_3 }: any) => {
   return (
      <div className="row">
         <div className="col-lg-6">
            <h3 className="property-titlee">Piso Bernabéu / Lu y Gastón</h3>
            <div className="d-flex flex-wrap mt-10">
               <div className={`list-type text-uppercase mt-15 me-3 ${style_3 ? "bg-white text-dark fw-500" : "text-uppercase border-20"}`}>ALQUILER</div>
               <div className="address mt-15"><i className="bi bi-geo-alt"></i> Barrio Bernabéu, Centro de Madrid.
               </div>
            </div>
         </div>
         <div className="col-lg-6 text-lg-end">
            <div className="d-inline-block md-mt-40">
               <div className="price color-dark fw-500">Precio: €1550</div>
               <ul className="style-none d-flex align-content-end action-btns">
                  <li style={{display: 'flex', alignItems: 'center'}}><Link href="/contact"
                     className={`d-flex align-items-center justify-content-center tran3s ${style_3 ? "" : "rounded-circle"}`}><i
                        className="fa-light fa-phone"></i></Link><p style={{margin: 0, paddingLeft: '10px'}}>Me interesa</p></li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default CommonBanner
