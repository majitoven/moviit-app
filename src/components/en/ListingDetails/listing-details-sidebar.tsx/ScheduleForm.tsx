"use client";
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
  name: yup.string().required("This field is required"),
  email: yup.string().email("Must be a valid email").required("This field is required"),
  phone: yup.string().matches(/^\d+$/, "Must be a valid number").required("This field is required"),
  message: yup.string().required("This field is required"),
}).required();

const ScheduleForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

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
        toast.success("Thank you for reaching out! We will contact you shortly.", { position: "top-center" });
        reset();
      } else {
        toast.error("Error sending the email. Please try again later.", { position: "top-center" });
      }
    } catch (error) {
      toast.error("Error sending the email. Please try again later.", { position: "top-center" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-box-three mb-25">
        <div className="label">Name*</div>
        <input type="text" {...register("name")} placeholder="Your full name" className="type-input" />
        <p className="form_error">{errors.name?.message}</p>
      </div>
      <div className="input-box-three mb-25">
        <div className="label">Email*</div>
        <input type="email" {...register("email")} placeholder="Your email address" className="type-input" />
        <p className="form_error">{errors.email?.message}</p>
      </div>
      <div className="input-box-three mb-25">
        <div className="label">Phone*</div>
        <input type="tel" {...register("phone")} placeholder="Your phone/mobile" className="type-input" />
        <p className="form_error">{errors.phone?.message}</p>
      </div>
      <div className="input-box-three mb-15">
        <div className="label">Message*</div>
        <textarea {...register("message")} placeholder="Hello, I'm looking for a similar apartment..."></textarea>
        <p className="form_error">{errors.message?.message}</p>
      </div>
      <button type="submit" className="btn-nine text-uppercase rounded-3 w-100 mb-10">INQUIRE</button>
    </form>
  );
};

export default ScheduleForm;
