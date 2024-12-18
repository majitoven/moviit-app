"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import NiceSelect from "@/ui/NiceSelect";
import NiceMultiSelect from "@/ui/NiceMultiSelect";
import PriceRange from "@/components/common/PriceRange";
import UseShortedProperty from "@/hooks/useShortedProperty";
import SimpleModal from "@/modals/SimpleModal"; // Import the modal component

export interface FormValues {
  propertyType: string;
  duration: string;
  minPrice: number;
  maxPrice: number;
  selectedBarrios: string[];
}

const DropdownOne = ({ style }: any) => {

  const itemsPerPage = 9;
  const page = "listing_5";

  const { handlePriceChange, maxPrice, priceValue } = UseShortedProperty({
    itemsPerPage,
    page,
  });

  const { register, handleSubmit, reset, formState: { errors }, setValue, trigger, getValues } = useForm<FormValues>();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormValues>({
    propertyType: '',
    duration: '',
    minPrice: 600,
    maxPrice: 10000,
    selectedBarrios: [],
  });
  const [selectedBarrios, setSelectedBarrios] = useState<string[]>([]);

  const handleModalOpen = () => {
    // Set the form data and open the modal
    const values = getValues();
    setFormData(values); // Set form data for the modal
    setShowModal(true);
  };

  const onSubmit = (data: FormValues) => {
    console.log(data, 'FINAL');
    handleModalOpen();
    // Handle the form submission here
  };

  const handleCancel = () => {
    reset(); // Reset the form fields
  };

  const handleModalClose = () => setShowModal(false);

  const changeLocation = (selectedValues: string[]) => {
    setSelectedBarrios(selectedValues);
    setValue('selectedBarrios', selectedValues);
    trigger('selectedBarrios');
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue('minPrice', newValue);
    trigger('minPrice');
    handlePriceChange([newValue, priceValue[1]]);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue('maxPrice', newValue);
    trigger('maxPrice');
    handlePriceChange([priceValue[0], newValue]);
  };

  const handleRangeChange = (values: number[]) => {
    setValue('minPrice', values[0]);
    setValue('maxPrice', values[1]);
    trigger(['minPrice', 'maxPrice']);
    handlePriceChange(values);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="filter-form"
      >
        <div className="row gx-0 align-items-center">
          <div className="col-xl-3 col-md-6">
            <div className="input-box-one border-left">
              <div className="label">Estoy buscando...</div>
              <NiceSelect
                className={`nice-select ${style ? "fw-normal" : ""}`}
                options={[
                  { value: "Apartamento", text: "Alquilar un apartamento" },
                  { value: "Habitación", text: "Alquilar una habitación" },
                ]}
                defaultCurrent={0}
                onChange={(e) => {
                  setValue("propertyType", e.target.value);
                  trigger("propertyType");
                }}
                name="propertyType"
                placeholder=""
              />
              <p className={`error-message ${errors.propertyType ? 'visible' : ''}`}>{String(errors.propertyType?.message || '')}</p>
            </div>
          </div>
          <div className={`${style ? "col-xl-2" : "col-xl-2"} col-md-6`}>
            <div className="input-box-one border-left">
              <div className="label">Zonas</div>
              <NiceMultiSelect
                className={`nice-select location ${style ? "fw-normal" : ""}`}
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
                  { value: "Trafalgar", text: "Trafalgar" },
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
                  { value: "Cortes", text: "Cortes" },
                  { value: "Pacífico", text: "Pacífico" },
                  { value: "Jerónimos", text: "Jerónimos" },
                  { value: "Atocha", text: "Atocha" },
                  { value: "Arganzuela", text: "Arganzuela" },
                  { value: "Delicias", text: "Delicias" },
                ]}
                defaultCurrent={[]}
                onChange={(selectedOptions) => {
                  changeLocation(selectedOptions);
                }}
                name="selectedBarrios"
                placeholder="Seleccione"
              />
              <p className={`error-message ${errors.selectedBarrios ? 'visible' : ''}`}>{String(errors.selectedBarrios?.message || '')}</p>
            </div>
          </div>
          <div className="col-xl-2 col-md-6">
            <div className="input-box-one border-left border-lg-0">
              <div className="label">Duración</div>
              <NiceSelect
                className={`nice-select ${style ? "fw-normal" : ""}`}
                options={[
                  { value: "1-5 meses", text: "1 - 5 meses" },
                  { value: "6-11 meses", text: "6 - 11 meses" },
                  { value: "1 año", text: "1 año" },
                  { value: "Más de 1 año", text: "Más de 1 año" },
                ]}
                defaultCurrent={0}
                onChange={(e) => {
                  setValue("duration", e.target.value);
                  trigger("duration");
                }}
                name="duration"
                placeholder=""
              />
              <p className={`error-message ${errors.duration ? 'visible' : ''}`}>{String(errors.duration?.message || '')}</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="input-box-one border-left border-lg-0">
              <div className="label">Rango de precios</div>
              <div className="price-ranger">
                <div
                  className="price-input d-flex align-items-center justify-content-between pt-5"
                  style={{ marginBottom: "12px" }}
                >
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
                <PriceRange
                  MAX={maxPrice}
                  MIN={600}
                  STEP={1}
                  values={priceValue}
                  handleChanges={handleRangeChange}
                />
              </div>
              <p className={`error-message ${errors.minPrice || errors.maxPrice ? 'visible' : ''}`}>{String(errors.minPrice?.message || '')}</p>
            </div>
          </div>

          <div className={`${style ? "col-xl-2" : "col-xl-2"}`}>
            <div className="input-box-one lg-mt-10">
              <button
                type="submit"
                className={`fw-500 tran3s ${style ? "w-100 tran3s search-btn-three" : "text-uppercase search-btn"}`}
              >
                {style ? "Buscar" : "Search"}
              </button>
            </div>
          </div>
        </div>
      </form>
      <SimpleModal showModal={showModal} handleClose={handleModalClose} formData={formData} />
    </>
  );
};

export default DropdownOne;
