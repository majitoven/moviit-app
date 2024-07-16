import { useState } from "react";
import { toast } from "react-toastify";

interface FormData {
  propertyType: string;
  duration: string;
  minPrice: number;
  maxPrice: number;
  selectedBarrios: string[];
}

interface SimpleModalProps {
  showModal: boolean;
  handleClose: () => void;
  formData: FormData;
}

const SimpleModal: React.FC<SimpleModalProps> = ({ showModal, handleClose, formData }) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ email: false, fullName: false, phone: false });

  const { propertyType, duration, minPrice, maxPrice, selectedBarrios } = formData;

  const handleSendData = async () => {
    const emailValid = email.trim() !== "";
    const fullNameValid = fullName.trim() !== "";
    const phoneValid = phone.trim() !== "";

    if (!emailValid || !fullNameValid || !phoneValid) {
      setErrors({
        email: !emailValid,
        fullName: !fullNameValid,
        phone: !phoneValid,
      });
      return;
    }

    const data = {
      email,
      fullName,
      phone,
      propertyType,
      duration,
      minPrice,
      maxPrice,
      selectedBarrios,
    };

    try {
      const response = await fetch('/api/sendMiniSearch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Gracias por comunicarte! Te contactaremos a la brevedad.", { position: "top-center" });

        setEmail("");
        setFullName("");
        setPhone("");
        setErrors({ email: false, fullName: false, phone: false });
        handleClose();
      } else {
        toast.error("Error al enviar el correo. Por favor, inténtelo de nuevo más tarde.", { position: "top-center" });
      }
    } catch (error) {
      toast.error("Error al enviar el correo. Por favor, inténtelo de nuevo más tarde.", { position: "top-center" });
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h5 className="modal-title">Estás a un paso!</h5>
              <button className="close-button" onClick={handleClose}>
                &times;
              </button>
            </div>
            <p className="fs-10">Sólo dejanos tus datos de contacto para enviarte la información:</p>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div className="invalid-feedback">Email es requerido.</div>}
                </div>
                <div className="form-group">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && <div className="invalid-feedback">Nombre es requerido.</div>}
                </div>
                  <div className="form-group">
                  <label>Teléfono móvil</label>
                  <input
                    type="text"
                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  {errors.phone && <div className="invalid-feedback">Teléfono es requerido.</div>}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className={`fw-500 tran3s text-uppercase search-btn mb-30`} onClick={handleSendData}>
                Solicitar información
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 100000000000 !important; /* Ensure this is higher than other elements on your page */
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 1000000000001 !important; /* Ensure this is higher than other elements on your page */
        }
        @media (min-width: 768px) {
          .modal-content {
            max-width: 370px;
          }
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 10px;
        }
        .modal-title {
          margin: 0;
          font-size: 1.25rem;
        }
        .close-button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .modal-body {
          padding: 10px 0;
        }
        .form-group {
          margin-bottom: 15px;
        }
        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
        }
        .form-control.is-invalid {
          border-color: #dc3545;
        }
        .invalid-feedback {
          display: block;
          color: #dc3545;
        }
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid #e5e5e5;
          padding-top: 10px;
        }
        .modal-button {
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .modal-button:hover {
          background: #0056b3;
        }
      `}</style>
    </>
  );
};

export default SimpleModal;
