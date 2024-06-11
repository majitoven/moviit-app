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
      name: yup.string().required("Este campo es requerido"),
      email: yup.string().required("Este campo es requerido").email('Debe ser un correo válido'),
      phone: yup.number()
         .transform((originalValue, originalObject) => {
            // Convert empty string to NaN
            return originalObject && originalObject.phone === '' ? NaN : originalValue;
         })
         .typeError('Debe ser un número')
         .required('Este campo es requerido'),
      message: yup.string().required("Este campo es requerido"),
   })
   .required();

const AgencyFormTwo = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
   const onSubmit = (data: FormData) => {
      const notify = () => toast('Enviado exitosamente', { position: 'top-center' });
      notify();
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="input-box-three mb-25">
            <div className="label">Tu nombre completo*</div>
            <input type="text" {...register("name")} placeholder="Ingrese su nombre y apellido" className="type-input rounded-0" />
            <p className="form_error">{errors.name?.message}</p>
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Tu correo electrónico*</div>
            <input type="email" {...register("email")} placeholder="Ingrese su correo electrónico" className="type-input rounded-0" />
            <p className="form_error">{errors.email?.message}</p>
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Tu teléfono móvil*</div>
            <input type="tel" {...register("phone")} placeholder="Ingrese un teléfono" className="type-input rounded-0" />
            <p className="form_error">{errors.phone?.message}</p>
         </div>
         <div className="input-box-three mb-15">
            <div className="label">Mensaje*</div>
            <textarea {...register("message")} placeholder="Hola, estoy interesada/o en ..." className="rounded-0"></textarea>
            <p className="form_error">{errors.message?.message}</p>
         </div>
         <button type='submit' className="btn-nine text-uppercase w-100 mb-20">ENVIAR</button>
      </form>
   )
}

export default AgencyFormTwo
