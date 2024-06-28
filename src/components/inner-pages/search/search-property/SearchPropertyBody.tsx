"use client"
import { useState } from 'react';
import DashboardHeaderTwo from "@/layouts/headers/dashboard/DashboardHeaderTwo"
import Overview from "./Overview"
import ListingDetails from "./ListingDetails"
import Link from "next/link"
import SelectAmenities from "./SelectAmenities"
import AddressAndLocation from "../../../dashboard/profile/AddressAndLocation"
import MapBarrios from '@/components/common/MainMap';
import NiceMultiSelect from '@/ui/NiceMultiSelect';

const AddPropertyBody = () => {


   return (
      <div className="search-body mt-40 xl-mt-100 xl-mb-100">
         <div className="container">
            <h3>Prontos, listos... a buscar tu hogar.</h3>
            <div className="d-flex flex-column justify-content-center align-items-center mt-60">
               <h3 className="font-garamond special-title center">ES UNA BÚSQUEDA 360º EN MADRID </h3>
               <div>
                  <p className="fs-20 lh-lg mt-20 fw-normal"> Realiza la búsqueda y uno de nuestros asesores personales te enviará pronto los apartamentos y habitaciones que están disponibles para ti y se adapten a tu situación. </p>
                  <p className="fs-20 lh-lg pb-25 fw-normal"> Es muy fácil, sólo tienes que <strong>llenar el formulario</strong> :) </p>
               </div>
            </div>

            <div style={{ background: '#ccf4f475', padding: '50px', borderRadius: '16px' }}>
               {/* <div>
                  <div className="row">
                     <div className="col-xl-2 col-md-6">
                        <div className="input-box-one border-left">
                           <div className="label">Zonas</div>
                           <NiceMultiSelect
                              className="nice-select location"
                              options={[
                                 { value: "Chamberí", text: "Chamberí" },
                                 { value: "Justicia", text: "Justicia" },
                                 { value: "Chueca", text: "Chueca" },
                                 { value: "Malasaña", text: "Malasaña" },
                                 { value: "Sol", text: "Sol" },
                                 { value: "Almagro", text: "Almagro" },
                                 { value: "Ríos Rosas", text: "Ríos Rosas" },
                                 { value: "Gaztambide", text: "Gaztambide" },
                                 { value: "Argüelles", text: "Argüelles" },
                                 { value: "Arapiles", text: "Arapiles" },
                                 { value: "Salamanca", text: "Salamanca" },
                                 { value: "Goya", text: "Goya" },
                                 { value: "Lista", text: "Lista" },
                                 { value: "Ibiza", text: "Ibiza" },
                                 { value: "Recoletos", text: "Recoletos" },
                                 { value: "Castellana", text: "Castellana" },
                                 { value: "Cuatro Caminos", text: "Cuatro Caminos" },
                                 { value: "El Viso", text: "El Viso" },
                                 { value: "Prosperidad", text: "Prosperidad" },
                                 { value: "Vallehermoso", text: "Vallehermoso" },
                                 { value: "Ciudad Jardín", text: "Ciudad Jardín" },
                                 { value: "Hispanoamérica", text: "Hispanoamérica" },
                                 { value: "Fuente del Berro", text: "Fuente del Berro" },
                                 { value: "Guindalera", text: "Guindalera" },
                                 { value: "Ventas", text: "Ventas" },
                                 { value: "Ciudad Universitaria", text: "Ciudad Universitaria" },
                                 { value: "Latina", text: "Latina" },
                                 { value: "Palacio", text: "Palacio" },
                                 { value: "Lavapiés", text: "Lavapiés" },
                                 { value: "Universidad", text: "Universidad" },
                                 { value: "Pacífico", text: "Pacífico" },
                                 { value: "Jerónimos", text: "Jerónimos" },
                                 { value: "Atocha", text: "Atocha" },
                                 { value: "Arganzuela", text: "Arganzuela" },
                                 { value: "Delicias", text: "Delicias" },
                              ]}
                              defaultCurrent={[]}
                              onChange={selectHandler}
                              name=""
                              placeholder="Selecciona zonas"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-10">
                        <MapBarrios selectedBarrios={selectedBarrios} />
                     </div>
                  </div>
               </div> */}

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
      </div>
   )
}

export default AddPropertyBody
