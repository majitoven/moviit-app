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
               <Overview />
               <ListingDetails />
               <SelectAmenities />
               <div className="bg-white card-box border-20 mt-40">
                  <h4 className="dash-title-three">Otros</h4>
                  <div className="dash-input-wrapper mb-30">
                     <label htmlFor="">Descripción de la solicitud/notas</label>
                     <textarea className="size-lg" placeholder="Describa brevemente su situación (ej: Vengo con mi pareja y quiero un lugar soleado y céntrico)..."></textarea>
                  </div>
               </div>

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
