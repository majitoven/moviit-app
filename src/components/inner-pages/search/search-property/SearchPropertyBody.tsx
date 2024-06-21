"use client"
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo"
import Overview from "./Overview"
import ListingDetails from "./ListingDetails"
import Link from "next/link"
import SelectAmenities from "./SelectAmenities"
import AddressAndLocation from "../../../dashboard/profile/AddressAndLocation"

const AddPropertyBody = () => {
   return (
      <div className="search-body mt-40 xl-mt-100 xl-mb-100">
         <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
               <h3 className="font-garamond special-title center">ES UNA BÚSQUEDA 360º EN MADRID </h3>
               <p className="fs-20 lh-lg pb-25 mt-20"> Realiza la búsqueda y uno de nuestros asesores personales te enviará pronto los apartamentos y habitaciones que están disponibles para ti y se adapten a tu situación. Es muy fácil, sólo tienes que llenar el formulario :) </p>
            </div>

            <Overview />
            <ListingDetails />

            <div className="bg-white card-box border-20 mt-40">
               <h4 className="dash-title-three">Photo & Video Attachment</h4>
               <div className="dash-input-wrapper mb-20">
                  <label htmlFor="">File Attachment*</label>

                  <div className="attached-file d-flex align-items-center justify-content-between mb-15">
                     <span>PorpertyImage_01.jpg</span>
                     <Link href="#" className="remove-btn"><i className="bi bi-x"></i></Link>
                  </div>
                  <div className="attached-file d-flex align-items-center justify-content-between mb-15">
                     <span>PorpertyImage_02.jpg</span>
                     <Link href="#" className="remove-btn"><i className="bi bi-x"></i></Link>
                  </div>
               </div>
               <div className="dash-btn-one d-inline-block position-relative me-3">
                  <i className="bi bi-plus"></i>
                  Upload File
                  <input type="file" id="uploadCV" name="uploadCV" placeholder="" />
               </div>
               <small>Upload file .jpg, .png, .mp4</small>
            </div>
            <SelectAmenities />
            <AddressAndLocation />

            <div className="button-group d-inline-flex align-items-center mt-30">
               <Link href="#" className="dash-btn-two tran3s me-3">Enviar</Link>
               <Link href="#" className="dash-cancel-btn tran3s">Cancelar</Link>
            </div>
         </div>
      </div>
   )
}

export default AddPropertyBody
