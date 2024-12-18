"use client";
import React from 'react';
import { useForm, UseFormGetValues } from 'react-hook-form';
import Overview from "./Overview";
import ListingDetails from "./ListingDetails";
import SelectAmenities from "./SelectAmenities";
import { toast } from 'react-toastify';

export interface FormValues {
  phone: string;
  email: string;
  month: string;
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

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch('/api/sendFullSearch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Thank you for reaching out! We will contact you shortly.", { position: "top-center" });
        reset();
      } else {
        toast.error("Error sending email. Please try again later.", { position: "top-center" });
      }
    } catch (error) {
      toast.error("Error sending email. Please try again later.", { position: "top-center" });
    }
  };

  const handleCancel = () => {
    reset(); // Reset the form fields
  };

  return (
    <div className="search-body mt-40 xl-mt-100 xl-mb-100 md-mt-20 md-mb-40 md-pt-40">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center mt-60">
          <h3 className="font-garamond special-title center">360º PERSONALIZED SEARCH IN MADRID</h3>
          <div>
            <p className="fs-20 lh-lg mt-20 fw-normal"> We offer a personalized service for housing search, adapting to the client's criteria. We assist with negotiation, research, and documentation until the contract is signed.</p>
            <p className="fs-20 lh-lg pb-25 fw-normal"> Just <strong>complete the form</strong> and we will contact you shortly to start the process. </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} style={{ background: '#ccf4f475', padding: '50px', borderRadius: '16px' }} className="special-custom-form md-p0">
          <Overview register={register} errors={errors} setValue={setValue} trigger={trigger} />
          <ListingDetails register={register} errors={errors} setValue={setValue} trigger={trigger} />
          <SelectAmenities register={register} errors={errors} setValue={setValue} trigger={trigger} getValues={getValues} />
          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Others</h4>
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="description">Request description/notes</label>
              <textarea {...register("description")} className="size-lg" placeholder="Briefly describe your situation (e.g., I'm coming with my partner and want a sunny and central place)..."></textarea>
              <p className={`error-message ${errors.description ? 'visible' : ''}`}>{String(errors.description?.message || '')}</p>
            </div>
          </div>

          <div className="button-group d-inline-flex align-items-center mt-30">
            <button type="submit" className="dash-btn-two tran3s me-3">Send</button>
            <button type="button" onClick={handleCancel} className="dash-cancel-btn tran3s">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPropertyBody;
