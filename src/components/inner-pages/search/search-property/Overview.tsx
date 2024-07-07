import React, { useState } from "react";
import { UseFormRegister, UseFormSetValue, UseFormTrigger, FieldValues, FieldErrors } from "react-hook-form";
import MapBarrios from '@/components/common/MainMap';
import NiceMultiSelect from '@/ui/NiceMultiSelect';
import NiceSelect from "@/ui/NiceSelect";
import PriceRange from "@/components/common/PriceRange";
import UseShortedProperty from "@/hooks/useShortedProperty";

interface Props {
   register: UseFormRegister<FieldValues>;
   errors: FieldErrors;
   setValue: UseFormSetValue<FieldValues>;
   trigger: UseFormTrigger<FieldValues>;
}

const Overview: React.FC<Props> = ({ register, errors, setValue, trigger }) => {
   const itemsPerPage = 9;
   const page = "listing_5";
   const { handlePriceChange, maxPrice, priceValue } = UseShortedProperty({
      itemsPerPage,
      page,
   });

   const [selectedBarrios, setSelectedBarrios] = useState<string[]>([]);

   const changeLocation = (selectedValues: string[]) => {
      setSelectedBarrios(selectedValues);
      setValue('selectedBarrios', selectedValues);
      trigger('selectedBarrios');
   };

   const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value, 10);
      handlePriceChange([newValue, priceValue[1]]);
   };

   const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseInt(e.target.value, 10);
      handlePriceChange([priceValue[0], newValue]);
   };

   return (
      <div className="bg-white card-box border-20">
         <h4 className="dash-title-three">Información Básica</h4>
         <div className="row align-items-end">
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="fullName">Nombre y apellido*</label>
                  <input {...register("fullName", { required: "Este campo es obligatorio" })} type="text" placeholder="Ingrese nombre y apellido" />
                  {errors.fullName && <p className="error-message">{String(errors.fullName.message)}</p>}
               </div>
            </div>
            <div className="col-md-6">
               <div className="dash-input-wrapper mb-25">
                  <label htmlFor="country">País de origen*</label>
                  <NiceSelect
                     defaultCurrent={193}
                     className="nice-select"
                     placeholder="Seleccione país"
                     options={
                        [
                           { "text": "Afghanistan", "value": "Afghanistan" },
                           { "text": "Albania", "value": "Albania" },
                           { "text": "Algeria", "value": "Algeria" },
                           { "text": "American Samoa", "value": "American Samoa" },
                           { "text": "Andorra", "value": "Andorra" },
                           { "text": "Angola", "value": "Angola" },
                           { "text": "Anguilla", "value": "Anguilla" },
                           { "text": "Antarctica", "value": "Antarctica" },
                           { "text": "Antigua and Barbuda", "value": "Antigua and Barbuda" },
                           { "text": "Argentina", "value": "Argentina" },
                           { "text": "Armenia", "value": "Armenia" },
                           { "text": "Aruba", "value": "Aruba" },
                           { "text": "Australia", "value": "Australia" },
                           { "text": "Austria", "value": "Austria" },
                           { "text": "Azerbaijan", "value": "Azerbaijan" },
                           { "text": "Bahamas", "value": "Bahamas" },
                           { "text": "Bahrain", "value": "Bahrain" },
                           { "text": "Bangladesh", "value": "Bangladesh" },
                           { "text": "Barbados", "value": "Barbados" },
                           { "text": "Belarus", "value": "Belarus" },
                           { "text": "Belgium", "value": "Belgium" },
                           { "text": "Belize", "value": "Belize" },
                           { "text": "Benin", "value": "Benin" },
                           { "text": "Bermuda", "value": "Bermuda" },
                           { "text": "Bhutan", "value": "Bhutan" },
                           { "text": "Bolivia", "value": "Bolivia" },
                           { "text": "Bosnia and Herzegovina", "value": "Bosnia and Herzegovina" },
                           { "text": "Botswana", "value": "Botswana" },
                           { "text": "Brazil", "value": "Brazil" },
                           { "text": "Brunei Darussalam", "value": "Brunei Darussalam" },
                           { "text": "Bulgaria", "value": "Bulgaria" },
                           { "text": "Burkina Faso", "value": "Burkina Faso" },
                           { "text": "Burundi", "value": "Burundi" },
                           { "text": "Cambodia", "value": "Cambodia" },
                           { "text": "Cameroon", "value": "Cameroon" },
                           { "text": "Canada", "value": "Canada" },
                           { "text": "Cape Verde", "value": "Cape Verde" },
                           { "text": "Cayman Islands", "value": "Cayman Islands" },
                           { "text": "Central African Republic", "value": "Central African Republic" },
                           { "text": "Chad", "value": "Chad" },
                           { "text": "Chile", "value": "Chile" },
                           { "text": "China", "value": "China" },
                           { "text": "Christmas Island", "value": "Christmas Island" },
                           { "text": "Cocos (Keeling) Islands", "value": "Cocos (Keeling) Islands" },
                           { "text": "Colombia", "value": "Colombia" },
                           { "text": "Comoros", "value": "Comoros" },
                           { "text": "Congo", "value": "Congo" },
                           { "text": "Congo, The Democratic Republic of the", "value": "Congo, The Democratic Republic of the" },
                           { "text": "Cook Islands", "value": "Cook Islands" },
                           { "text": "Costa Rica", "value": "Costa Rica" },
                           { "text": "Cote D'Ivoire", "value": "Cote D'Ivoire" },
                           { "text": "Croatia", "value": "Croatia" },
                           { "text": "Cuba", "value": "Cuba" },
                           { "text": "Cyprus", "value": "Cyprus" },
                           { "text": "Czech Republic", "value": "Czech Republic" },
                           { "text": "Denmark", "value": "Denmark" },
                           { "text": "Djibouti", "value": "Djibouti" },
                           { "text": "Dominica", "value": "Dominica" },
                           { "text": "Dominican Republic", "value": "Dominican Republic" },
                           { "text": "Ecuador", "value": "Ecuador" },
                           { "text": "Egypt", "value": "Egypt" },
                           { "text": "El Salvador", "value": "El Salvador" },
                           { "text": "Equatorial Guinea", "value": "Equatorial Guinea" },
                           { "text": "Eritrea", "value": "Eritrea" },
                           { "text": "Estonia", "value": "Estonia" },
                           { "text": "Ethiopia", "value": "Ethiopia" },
                           { "text": "Falkland Islands (Malvinas)", "value": "Falkland Islands (Malvinas)" },
                           { "text": "Faroe Islands", "value": "Faroe Islands" },
                           { "text": "Fiji", "value": "Fiji" },
                           { "text": "Finland", "value": "Finland" },
                           { "text": "France", "value": "France" },
                           { "text": "French Guiana", "value": "French Guiana" },
                           { "text": "French Polynesia", "value": "French Polynesia" },
                           { "text": "French Southern Territories", "value": "French Southern Territories" },
                           { "text": "Gabon", "value": "Gabon" },
                           { "text": "Gambia", "value": "Gambia" },
                           { "text": "Georgia", "value": "Georgia" },
                           { "text": "Germany", "value": "Germany" },
                           { "text": "Ghana", "value": "Ghana" },
                           { "text": "Gibraltar", "value": "Gibraltar" },
                           { "text": "Greece", "value": "Greece" },
                           { "text": "Greenland", "value": "Greenland" },
                           { "text": "Grenada", "value": "Grenada" },
                           { "text": "Guadeloupe", "value": "Guadeloupe" },
                           { "text": "Guam", "value": "Guam" },
                           { "text": "Guatemala", "value": "Guatemala" },
                           { "text": "Guinea", "value": "Guinea" },
                           { "text": "Guinea-Bissau", "value": "Guinea-Bissau" },
                           { "text": "Guyana", "value": "Guyana" },
                           { "text": "Haiti", "value": "Haiti" },
                           { "text": "Holy See (Vatican City State)", "value": "Holy See (Vatican City State)" },
                           { "text": "Honduras", "value": "Honduras" },
                           { "text": "Hong Kong", "value": "Hong Kong" },
                           { "text": "Hungary", "value": "Hungary" },
                           { "text": "Iceland", "value": "Iceland" },
                           { "text": "India", "value": "India" },
                           { "text": "Indonesia", "value": "Indonesia" },
                           { "text": "Iran, Islamic Republic Of", "value": "Iran, Islamic Republic Of" },
                           { "text": "Iraq", "value": "Iraq" },
                           { "text": "Ireland", "value": "Ireland" },
                           { "text": "Israel", "value": "Israel" },
                           { "text": "Italy", "value": "Italy" },
                           { "text": "Jamaica", "value": "Jamaica" },
                           { "text": "Japan", "value": "Japan" },
                           { "text": "Jordan", "value": "Jordan" },
                           { "text": "Kazakhstan", "value": "Kazakhstan" },
                           { "text": "Kenya", "value": "Kenya" },
                           { "text": "Kiribati", "value": "Kiribati" },
                           { "text": "Korea, Democratic People'S Republic of", "value": "Korea, Democratic People'S Republic of" },
                           { "text": "Korea, Republic of", "value": "Korea, Republic of" },
                           { "text": "Kuwait", "value": "Kuwait" },
                           { "text": "Kyrgyzstan", "value": "Kyrgyzstan" },
                           { "text": "Lao People's Democratic Republic", "value": "Lao People's Democratic Republic" },
                           { "text": "Latvia", "value": "Latvia" },
                           { "text": "Lebanon", "value": "Lebanon" },
                           { "text": "Lesotho", "value": "Lesotho" },
                           { "text": "Liberia", "value": "Liberia" },
                           { "text": "Libyan Arab Jamahiriya", "value": "Libyan Arab Jamahiriya" },
                           { "text": "Liechtenstein", "value": "Liechtenstein" },
                           { "text": "Lithuania", "value": "Lithuania" },
                           { "text": "Luxembourg", "value": "Luxembourg" },
                           { "text": "Macao", "value": "Macao" },
                           { "text": "Macedonia, The Former Yugoslav Republic of", "value": "Macedonia, The Former Yugoslav Republic of" },
                           { "text": "Madagascar", "value": "Madagascar" },
                           { "text": "Malawi", "value": "Malawi" },
                           { "text": "Malaysia", "value": "Malaysia" },
                           { "text": "Maldives", "value": "Maldives" },
                           { "text": "Mali", "value": "Mali" },
                           { "text": "Malta", "value": "Malta" },
                           { "text": "Marshall Islands", "value": "Marshall Islands" },
                           { "text": "Martinique", "value": "Martinique" },
                           { "text": "Mauritania", "value": "Mauritania" },
                           { "text": "Mauritius", "value": "Mauritius" },
                           { "text": "Mayotte", "value": "Mayotte" },
                           { "text": "Mexico", "value": "Mexico" },
                           { "text": "Micronesia, Federated States of", "value": "Micronesia, Federated States of" },
                           { "text": "Moldova, Republic of", "value": "Moldova, Republic of" },
                           { "text": "Monaco", "value": "Monaco" },
                           { "text": "Mongolia", "value": "Mongolia" },
                           { "text": "Montserrat", "value": "Montserrat" },
                           { "text": "Morocco", "value": "Morocco" },
                           { "text": "Mozambique", "value": "Mozambique" },
                           { "text": "Myanmar", "value": "Myanmar" },
                           { "text": "Namibia", "value": "Namibia" },
                           { "text": "Nauru", "value": "Nauru" },
                           { "text": "Nepal", "value": "Nepal" },
                           { "text": "Netherlands", "value": "Netherlands" },
                           { "text": "Netherlands Antilles", "value": "Netherlands Antilles" },
                           { "text": "New Caledonia", "value": "New Caledonia" },
                           { "text": "New Zealand", "value": "New Zealand" },
                           { "text": "Nicaragua", "value": "Nicaragua" },
                           { "text": "Niger", "value": "Niger" },
                           { "text": "Nigeria", "value": "Nigeria" },
                           { "text": "Niue", "value": "Niue" },
                           { "text": "Norfolk Island", "value": "Norfolk Island" },
                           { "text": "Northern Mariana Islands", "value": "Northern Mariana Islands" },
                           { "text": "Norway", "value": "Norway" },
                           { "text": "Oman", "value": "Oman" },
                           { "text": "Pakistan", "value": "Pakistan" },
                           { "text": "Palau", "value": "Palau" },
                           { "text": "Palestinian Territory, Occupied", "value": "Palestinian Territory, Occupied" },
                           { "text": "Panama", "value": "Panama" },
                           { "text": "Papua New Guinea", "value": "Papua New Guinea" },
                           { "text": "Paraguay", "value": "Paraguay" },
                           { "text": "Peru", "value": "Peru" },
                           { "text": "Philippines", "value": "Philippines" },
                           { "text": "Pitcairn", "value": "Pitcairn" },
                           { "text": "Poland", "value": "Poland" },
                           { "text": "Portugal", "value": "Portugal" },
                           { "text": "Puerto Rico", "value": "Puerto Rico" },
                           { "text": "Qatar", "value": "Qatar" },
                           { "text": "Reunion", "value": "Reunion" },
                           { "text": "Romania", "value": "Romania" },
                           { "text": "Russian Federation", "value": "Russian Federation" },
                           { "text": "Rwanda", "value": "Rwanda" },
                           { "text": "Saint Helena", "value": "Saint Helena" },
                           { "text": "Saint Kitts and Nevis", "value": "Saint Kitts and Nevis" },
                           { "text": "Saint Lucia", "value": "Saint Lucia" },
                           { "text": "Saint Vincent and the Grenadines", "value": "Saint Vincent and the Grenadines" },
                           { "text": "Samoa", "value": "Samoa" },
                           { "text": "San Marino", "value": "San Marino" },
                           { "text": "Sao Tome and Principe", "value": "Sao Tome and Principe" },
                           { "text": "Saudi Arabia", "value": "Saudi Arabia" },
                           { "text": "Senegal", "value": "Senegal" },
                           { "text": "Serbia and Montenegro", "value": "Serbia and Montenegro" },
                           { "text": "Seychelles", "value": "Seychelles" },
                           { "text": "Sierra Leone", "value": "Sierra Leone" },
                           { "text": "Singapore", "value": "Singapore" },
                           { "text": "Slovakia", "value": "Slovakia" },
                           { "text": "Slovenia", "value": "Slovenia" },
                           { "text": "Solomon Islands", "value": "Solomon Islands" },
                           { "text": "Somalia", "value": "Somalia" },
                           { "text": "South Africa", "value": "South Africa" },
                           { "text": "Spain", "value": "Spain" },
                           { "text": "Sri Lanka", "value": "Sri Lanka" },
                           { "text": "Sudan", "value": "Sudan" },
                           { "text": "Suriname", "value": "Suriname" },
                           { "text": "Swaziland", "value": "Swaziland" },
                           { "text": "Sweden", "value": "Sweden" },
                           { "text": "Switzerland", "value": "Switzerland" },
                           { "text": "Syrian Arab Republic", "value": "Syrian Arab Republic" },
                           { "text": "Taiwan, Province of China", "value": "Taiwan, Province of China" },
                           { "text": "Tajikistan", "value": "Tajikistan" },
                           { "text": "Tanzania, United Republic of", "value": "Tanzania, United Republic of" },
                           { "text": "Thailand", "value": "Thailand" },
                           { "text": "Timor-Leste", "value": "Timor-Leste" },
                           { "text": "Togo", "value": "Togo" },
                           { "text": "Tokelau", "value": "Tokelau" },
                           { "text": "Tonga", "value": "Tonga" },
                           { "text": "Trinidad and Tobago", "value": "Trinidad and Tobago" },
                           { "text": "Tunisia", "value": "Tunisia" },
                           { "text": "Turkey", "value": "Turkey" },
                           { "text": "Turkmenistan", "value": "Turkmenistan" },
                           { "text": "Turks and Caicos Islands", "value": "Turks and Caicos Islands" },
                           { "text": "Tuvalu", "value": "Tuvalu" },
                           { "text": "Uganda", "value": "Uganda" },
                           { "text": "Ukraine", "value": "Ukraine" },
                           { "text": "United Arab Emirates", "value": "United Arab Emirates" },
                           { "text": "United Kingdom", "value": "United Kingdom" },
                           { "text": "United States", "value": "United States" },
                           { "text": "Uruguay", "value": "Uruguay" },
                           { "text": "Uzbekistan", "value": "Uzbekistan" },
                           { "text": "Vanuatu", "value": "Vanuatu" },
                           { "text": "Venezuela", "value": "Venezuela" },
                           { "text": "Viet Nam", "value": "Viet Nam" },
                           { "text": "Virgin Islands, British", "value": "Virgin Islands, British" },
                           { "text": "Virgin Islands, U.S.", "value": "Virgin Islands, U.S." },
                           { "text": "Wallis and Futuna", "value": "Wallis and Futuna" },
                           { "text": "Western Sahara", "value": "Western Sahara" },
                           { "text": "Yemen", "value": "Yemen" },
                           { "text": "Zambia", "value": "Zambia" },
                           { "text": "Zimbabwe", "value": "Zimbabwe" }
                        ]}
                     {...register("country", { required: "Este campo es obligatorio" })}
                     onChange={(e) => {
                        setValue('country', e.target.value);
                        trigger('country');
                     }}
                  />
                  {errors.country && <p className="error-message">{String(errors.country.message)}</p>}
               </div>
            </div>
         </div>

         <div className="row align-items-end">
            <div className="col-md-4">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="propertyType">Estoy buscando*</label>
                  <NiceSelect
                     className="nice-select"
                     placeholder="Seleccione una opción"
                     options={[
                        { value: "apartamento", text: "Alquilar un apartamento" },
                        { value: "habitación", text: "Alquilar una habitación" },
                     ]}
                     {...register("propertyType", { required: "Este campo es obligatorio" })}
                     onChange={(e) => {
                        setValue('propertyType', e.target.value);
                        trigger('propertyType');
                     }}
                  />
                  {errors.propertyType && <p className="error-message">{String(errors.propertyType.message)}</p>}
               </div>
            </div>
            <div className="col-md-4">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="duration">Duración*</label>
                  <NiceSelect
                     placeholder="Seleccione duración"
                     className="nice-select"
                     options={[
                        { value: "3-6", text: "3-6 meses" },
                        { value: "7-9", text: "7 - 9 meses" },
                        { value: "10-12", text: "10 - 12 meses" },
                     ]}
                     {...register("duration")}
                     onChange={(e) => {
                        setValue('duration', e.target.value);
                        trigger('duration');
                     }}
                  />
                  {errors.duration && <p className="error-message">{String(errors.duration.message)}</p>}
               </div>
            </div>
            <div className="col-md-4">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="priceRange">Rango de precios*</label>
                  <div className="price-ranger">
                     <div className="price-input d-flex align-items-center justify-content-between pt-5" style={{ marginBottom: "12px" }}>
                        <div className="field d-flex align-items-center">
                           <input
                              style={{ height: "30px" }}
                              type="number"
                              className="input-min"
                              {...register("minPrice")}
                              value={priceValue[0]}
                              onChange={handleMinPriceChange}
                           />
                        </div>
                        <div className="divider-line"></div>
                        <div className="field d-flex align-items-center">
                           <input
                              style={{ height: "30px" }}
                              type="number"
                              className="input-max"
                              {...register("maxPrice")}
                              value={priceValue[1]}
                              onChange={handleMaxPriceChange}
                           />
                        </div>
                        <div className="currency ps-1">€</div>
                     </div>
                  </div>

                  <PriceRange MAX={maxPrice} MIN={600} STEP={1} values={priceValue} handleChanges={handlePriceChange} />
                  {errors.minPrice && <p className="error-message">{String(errors.minPrice.message)}</p>}
                  {errors.maxPrice && <p className="error-message">{String(errors.maxPrice.message)}</p>}
               </div>
            </div>
         </div>
         <div className="col-lg-3">
            <div className="dash-input-wrapper mb-25">
               <label htmlFor="selectedBarrios">Zonas*</label>
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
                     { value: "Trafalgar", text: "Trafalgar" }, //lo agregue
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
                     { value: "Cortes", text: "Cortes" }, //lo agregue
                     { value: "Pacífico", text: "Pacífico" },
                     { value: "Jerónimos", text: "Jerónimos" },
                     { value: "Atocha", text: "Atocha" },
                     { value: "Arganzuela", text: "Arganzuela" },
                     { value: "Delicias", text: "Delicias" },
                  ]}
                  defaultCurrent={[]}
                  onChange={changeLocation}
                  placeholder="Seleccione zonas"
                  name={''}
               />
               {errors.selectedBarrios && <p className="error-message">{String(errors.selectedBarrios.message)}</p>}
            </div>
         </div>
         <div className="col-12">
            <MapBarrios selectedBarrios={selectedBarrios} />
         </div>
      </div>
   );
};

export default Overview;
