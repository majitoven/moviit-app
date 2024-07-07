"use client"
import React from 'react';
import { useForm, UseFormGetValues } from 'react-hook-form';
import Overview from "./Overview";
import ListingDetails from "./ListingDetails";
import SelectAmenities from "./SelectAmenities";

export interface FormValues {
  fullName: string;
  country: string;
  propertyType: string;
  duration: string;
  minPrice: number;
  maxPrice: number;
  selectedBarrios: string[];
  bedrooms: string;
  bathrooms: string;
  furnished: string;
  interiorExterior: string;
  minSqFeet: number;
  maxSqFeet: number;
  amenities: { [key: string]: boolean };
  description: string;
}

const SearchPropertyBody = () => {
  const { register, handleSubmit, reset, formState: { errors }, setValue, trigger, getValues } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle the form submission here
  };

  const handleCancel = () => {
    reset(); // Reset the form fields
  };

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

        <form onSubmit={handleSubmit(onSubmit)} style={{ background: '#ccf4f475', padding: '50px', borderRadius: '16px' }}>
          <Overview register={register} errors={errors} setValue={setValue} trigger={trigger} />
          <ListingDetails register={register} errors={errors} setValue={setValue} trigger={trigger} />
          <SelectAmenities register={register} errors={errors} setValue={setValue} trigger={trigger} getValues={getValues} />
          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Otros</h4>
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="description">Descripción de la solicitud/notas</label>
              <textarea {...register("description")} className="size-lg" placeholder="Describa brevemente su situación (ej: Vengo con mi pareja y quiero un lugar soleado y céntrico)..."></textarea>
              <p className={`error-message ${errors.description ? 'visible' : ''}`}>{String(errors.description?.message || '')}</p>
            </div>
          </div>

          <div className="button-group d-inline-flex align-items-center mt-30">
            <button type="submit" className="dash-btn-two tran3s me-3">Enviar</button>
            <button type="button" onClick={handleCancel} className="dash-cancel-btn tran3s">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPropertyBody;
