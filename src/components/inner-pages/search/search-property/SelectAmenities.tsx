import React, { useEffect } from 'react';
import { UseFormRegister, UseFormSetValue, UseFormTrigger, FieldValues, FieldErrors, UseFormGetValues } from "react-hook-form";

interface Props {
   register: UseFormRegister<FieldValues>;
   errors: FieldErrors;
   setValue: UseFormSetValue<FieldValues>;
   trigger: UseFormTrigger<FieldValues>;
   getValues: UseFormGetValues<FieldValues>;
}

const SelectAmenities: React.FC<Props> = ({ register, errors, setValue, trigger, getValues }) => {
   const amenities = [
      "Aire Condicionado", "Calefacción", "Balcón", "Wifi", "Ascensor",
      "Garage", "Aceptan Mascotas", "Luminoso", "Lavarropa/Lavandería"
   ];

   const handleCheckboxChange = (amenity: string) => {
      const currentValue = getValues(`amenities.${amenity}`) || false;
      setValue(`amenities.${amenity}`, !currentValue);
      trigger(`amenities.${amenity}`);
   };

   useEffect(() => {
      amenities.forEach(amenity => {
         register(`amenities.${amenity}`);
      });
   }, [register]);

   return (
      <div className="bg-white card-box border-20 mt-40">
         <h4 className="dash-title-three m0 pb-5">Amenities/Complementos</h4>
         <ul className="style-none d-flex flex-wrap filter-input">
            {amenities.map((amenity, index) => (
               <li key={index}>
                  <input
                     type="checkbox"
                     id={`amenity-${index}`}
                     checked={!!getValues(`amenities.${amenity}`)}
                     onChange={() => handleCheckboxChange(amenity)}
                  />
                  <label htmlFor={`amenity-${index}`}>{amenity}</label>
                  {errors.amenities && errors.amenities[amenity] && <p className="error-message">{errors.amenities[amenity].message}</p>}

               </li>
            ))}
         </ul>
      </div>
   );
};

export default SelectAmenities;
