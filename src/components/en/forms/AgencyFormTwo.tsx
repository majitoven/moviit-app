"use client"
import { toast } from 'react-toastify';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   name: string;
   email: string;
   phone: number;
   message: string;
}

const schema = yup
   .object({
      name: yup.string().required("This field is required"),
      email: yup.string().required("This field is required").email('Must be a valid email'),
      phone: yup.number()
         .transform((originalValue, originalObject) => {
            // Convert empty string to NaN
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Must be a number')
         .required('This field is required'),
      message: yup.string().required("This field is required"),
   })
   .required();

const AgencyFormTwo = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = async (data: FormData) => {
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          toast.success("Thank you for reaching out! We will contact you soon.", { position: "top-center" });
          reset();
        } else {
          toast.error("Error sending email. Please try again later.", { position: "top-center" });
        }
      } catch (error) {
        toast.error("Error sending email. Please try again later.", { position: "top-center" });
      }
    };
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="input-box-three mb-25">
            <div className="label">Your full name*</div>
            <input type="text" {...register("name")} placeholder="Enter your first and last name" className="type-input rounded-0" />
            <p className="form_error">{errors.name?.message}</p>
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Your email*</div>
            <input type="email" {...register("email")} placeholder="Enter your email" className="type-input rounded-0" />
            <p className="form_error">{errors.email?.message}</p>
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Your mobile phone*</div>
            <input type="tel" {...register("phone")} placeholder="Enter a phone number" className="type-input rounded-0" />
            <p className="form_error">{errors.phone?.message}</p>
         </div>
         <div className="input-box-three mb-15">
            <div className="label">Message*</div>
            <textarea {...register("message")} placeholder="Hello, I am interested in ..." className="rounded-0"></textarea>
            <p className="form_error">{errors.message?.message}</p>
         </div>
         <button type='submit' className="btn-nine text-uppercase w-100 mb-20">SEND</button>
      </form>
   )
}

export default AgencyFormTwo
