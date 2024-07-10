"use client";
import React from 'react';
import { UseFormRegister, UseFormSetValue, UseFormTrigger, FieldValues, FieldErrors } from "react-hook-form";
import NiceSelect from "@/ui/NiceSelect";
import NumberNiceSelect from "@/ui/NumberNiceSelect";
import PriceRange from "@/components/common/PriceRange";
import UseShortedProperty from "@/hooks/useShortedProperty";
import { FormValues } from './SearchPropertyBody';

interface Props {
   register: UseFormRegister<FormValues>;
   errors: FieldErrors<FormValues>;
   setValue: UseFormSetValue<FormValues>;
   trigger: UseFormTrigger<FormValues>;
}

const ListingDetails: React.FC<Props> = ({ register, errors, setValue, trigger }) => {
  const itemsPerPage = 9;
  const page = "listing_5";
  const { handleSqFeetChange, maxSqFeet, sqFeetValue } = UseShortedProperty({
    itemsPerPage,
    page,
  });

  const handleMinSqFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue('minSqFeet', newValue);
    trigger('minSqFeet');
    handleSqFeetChange([newValue, sqFeetValue[1]]);
 };

 const handleMaxSqFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue('maxSqFeet', newValue);
    trigger('maxSqFeet');
    handleSqFeetChange([sqFeetValue[0], newValue]);
 };

 const handleRangeChange = (values: number[]) => {
    setValue('minSqFeet', values[0]);
    setValue('maxSqFeet', values[1]);
    trigger(['minSqFeet', 'maxSqFeet']);
    handleSqFeetChange(values);
  };

  return (
    <div className="bg-white card-box border-20 mt-40">
      <h4 className="dash-title-three">Detalles del inmueble</h4>
      <div className="row align-items-end">
        <div className="col-md-4">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="bedrooms">Número de dormitorios*</label>
            <NumberNiceSelect
              className="nice-select"
              placeholder="Seleccione cantidad de dormitorios"
              options={[
                { value: '0', text: 0 },
                { value: '1', text: 1 },
                { value: '2', text: 2 },
                { value: '3', text: 3 },
              ]}
              defaultCurrent={0}
              {...register("bedrooms", { required: "Este campo es obligatorio" })}
              onChange={(e) => {
                setValue('bedrooms', e.target.value);
                trigger('bedrooms');
              }}
            />
            <p className={`error-message ${errors.bedrooms ? 'visible' : ''}`}>{String(errors.bedrooms?.message || '')}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="bathrooms">Número de baños</label>
            <NumberNiceSelect
              placeholder="Seleccione cantidad de baños"
              className="nice-select"
              defaultCurrent={0}
              options={[
                { value: '0', text: 0 },
                { value: '1', text: 1 },
                { value: '2', text: 2 },
                { value: '3', text: 3 },
              ]}
              {...register("bathrooms")}
              onChange={(e) => {
                setValue('bathrooms', e.target.value);
                trigger('bathrooms');
              }}
            />
            <p className={`error-message ${errors.bathrooms ? 'visible' : ''}`}>{String(errors.bathrooms?.message || '')}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="furnished">Amueblado</label>
            <NiceSelect
              className="nice-select"
              defaultCurrent={0}
              placeholder="Seleccione preferencia"
              options={[
                { value: 'si', text: "Si" },
                { value: 'no', text: "No" },
              ]}
              {...register("furnished")}
              onChange={(e) => {
                setValue('furnished', e.target.value);
                trigger('furnished');
              }}
            />
            <p className={`error-message ${errors.furnished ? 'visible' : ''}`}>{String(errors.furnished?.message || '')}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="interiorExterior">Interior/Exterior</label>
            <NiceSelect
              defaultCurrent={0}
              className="nice-select"
              placeholder="Seleccione preferencia"
              options={[
                { value: 'Interior', text: "Interior" },
                { value: 'Exterior', text: "Exterior" },
                { value: 'Indiferente', text: "Indiferente" },
              ]}
              {...register("interiorExterior")}
              onChange={(e) => {
                setValue('interiorExterior', e.target.value);
                trigger('interiorExterior');
              }}
            />
            <p className={`error-message ${errors.interiorExterior ? 'visible' : ''}`}>{String(errors.interiorExterior?.message || '')}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dash-input-wrapper mb-30">
            <label htmlFor="sqFeet">Tamaño (m²)</label>
            <div className="price-ranger">
              <div className="price-input d-flex align-items-center justify-content-between pt-5" style={{ marginBottom: "12px" }}>
                <div className="field d-flex align-items-center">
                  <input
                    style={{ height: "30px" }}
                    type="number"
                    className="input-min"
                    value={sqFeetValue[0]}
                    {...register("minSqFeet")}
                    onChange={handleMinSqFeetChange}

                  />
                </div>
                <div className="divider-line"></div>
                <div className="field d-flex align-items-center">
                  <input
                    style={{ height: "30px" }}
                    type="number"
                    className="input-max"
                    value={sqFeetValue[1]}
                    {...register("maxSqFeet")}
                    onChange={handleMaxSqFeetChange}
                  />
                </div>
                <div className="currency ps-1">m²</div>
              </div>
              <PriceRange
                MAX={maxSqFeet}
                MIN={40}
                STEP={1}
                values={sqFeetValue}
                handleChanges={handleRangeChange}
              />
            </div>
            <p className={`error-message ${errors.minSqFeet || errors.maxSqFeet ? 'visible' : ''}`}>{String(errors.minSqFeet?.message || '')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
