import { useState } from "react"
import NiceSelect from "@/ui/NiceSelect";
import Image from "next/image";
import locationImage from "@/assets/images/dashboard/icon/icon_16.svg";
import MapBarrios from '@/components/common/MainMap';
import NiceMultiSelect from '@/ui/NiceMultiSelect';

const AddressAndLocation = () => {


   const [selectedBarrios, setSelectedBarrios] = useState<string[]>([]);

   const changeLocation = (selectedValues: string[]) => {
      setSelectedBarrios(selectedValues);
   };

   const selectHandler = (e: any) => { };

   return (
      <div className="bg-white card-box border-20 mt-40">
         <h4 className="dash-title-three">Address & Location</h4>
         <div className="row">
            <div className="col-12">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Address*</label>
                  <input type="text" placeholder="19 Yawkey Way" />
               </div>
            </div>
            <div className="col-lg-3">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Country*</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: "1", text: "Afghanistan" },
                        { value: "2", text: "Albania" },
                        { value: "3", text: "Algeria" },
                        { value: "4", text: "Andorra" },
                        { value: "5", text: "Angola" },
                        { value: "6", text: "Antigua and Barbuda" },
                        { value: "7", text: "Argentina" },
                        { value: "8", text: "Armenia" },
                        { value: "9", text: "Australia" },
                        { value: "10", text: "Austria" },
                        { value: "11", text: "Azerbaijan" },
                        { value: "12", text: "Bahamas" },
                        { value: "13", text: "Bahrain" },
                        { value: "14", text: "Bangladesh" },
                        { value: "15", text: "Barbados" },
                        { value: "16", text: "Belarus" },
                        { value: "17", text: "Belgium" },
                        { value: "18", text: "Belize" },
                        { value: "19", text: "Benin" },
                        { value: "20", text: "Bhutan" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
         </div>



         <div className="col-12">
            <div className="row">
               <div className="col-lg-3">
                  <div className="dash-input-wrapper mb-25">
                     <label htmlFor="">Zonas*</label>
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
                           {value: "Trafalgar", text: "Trafalgar"}, //lo agregue
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
                           { value: "Latina", text: "Latina" }, // PREGUNTAR SI ES LA LATINA O WTF
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
                        onChange={changeLocation}
                        name=""
                        placeholder="Seleccione zonas"
                     />
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <MapBarrios selectedBarrios={selectedBarrios} />
               </div>
            </div>
         </div>

         {/* <div className="col-12">
            <div className="dash-input-wrapper mb-25">
               <label htmlFor="">Map Location*</label>
               <div className="position-relative">
                  <input type="text" placeholder="XC23+6XC, Moiran, N105" />
                  <button className="location-pin tran3s"><Image src={locationImage} alt="" className="lazy-img m-auto" /></button>
               </div>
               <div className="map-frame mt-30">
                  <div className="gmap_canvas h-100 w-100">
                     <iframe className="gmap_iframe h-100 w-100" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                  </div>
               </div>
            </div>
         </div> */}
      </div>
   )
}

export default AddressAndLocation
