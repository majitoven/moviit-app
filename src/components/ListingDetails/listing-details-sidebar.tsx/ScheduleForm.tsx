"use client"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

interface FormData {
   name: string;
   email: string;
   phone: string;
   message: string;
}

const schema = yup.object({
   name: yup.string().required("Este campo es requerido"),
   email: yup.string().email("Debe ser un correo válido").required("Este campo es requerido"),
   phone: yup.string().matches(/^\d+$/, "Debe ser un número válido").required("Este campo es requerido"),
   message: yup.string().required("Este campo es requerido"),
}).required();

const ScheduleForm = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
      resolver: yupResolver(schema),
   });

   const onSubmit = (data: FormData) => {
      toast.success("Gracias por comunicarte! Te contactaremos a la brevedad.", { position: "top-center" });
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="input-box-three mb-25">
            <div className="label">Nombre*</div>
            <input type="text" {...register("name")} placeholder="Tu nombre completo" className="type-input" />
            <p className="form_error">{errors.name?.message}</p>
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Correo*</div>
            <input type="email" {...register("email")} placeholder="Tu correo electrónico" className="type-input" />
            <p className="form_error">{errors.email?.message}</p>
         </div>
         <div className="input-box-three mb-25">
            <div className="label">Teléfono*</div>
            <input type="tel" {...register("phone")} placeholder="Tu teléfono/móvil" className="type-input" />
            <p className="form_error">{errors.phone?.message}</p>
         </div>
         <div className="input-box-three mb-15">
            <div className="label">Mensaje*</div>
            <textarea {...register("message")} placeholder="Hola, estoy buscando un piso similar..."></textarea>
            <p className="form_error">{errors.message?.message}</p>
         </div>
         <button className="btn-nine text-uppercase rounded-3 w-100 mb-10">CONSULTAR</button>
      </form>
   );
};

export default ScheduleForm;
