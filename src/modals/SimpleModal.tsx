import { useState } from "react";
import { toast } from "react-toastify";

const SimpleModal = ({ showModal, handleClose, formData }) => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({ email: false, fullName: false });

  const { propertyType, duration, minPrice, maxPrice, selectedBarrios } = formData;

  const handleSendData = async () => {
    const emailValid = email.trim() !== "";
    const fullNameValid = fullName.trim() !== "";

    if (!emailValid || !fullNameValid) {
      setErrors({
        email: !emailValid,
        fullName: !fullNameValid,
      });
      return;
    }

    // Construct the data object to send
    const data = {
      email,
      fullName,
      propertyType,
      duration,
      minPrice,
      maxPrice,
      selectedBarrios,
    };

    console.log(data, 'FINAL');
    toast.success("Gracias por comunicarte! Te contactaremos a la brevedad.", { position: "top-center" });

    // Clear the form data
    setEmail("");
    setFullName("");
    setErrors({ email: false, fullName: false });
    handleClose();

    // try {
    //   // Send data to the external service
    //   const response = await fetch('https://external-service.com/api/send', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     console.log('Data sent successfully!');
    //   } else {
    //     console.error('Failed to send data');
    //   }
    // } catch (error) {
    //   console.error('Error sending data:', error);
    // }
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
                  {errors.email && <div className="invalid-feedback">Email is required.</div>}
                </div>
                <div className="form-group">
                  <label>Nombre completo</label>
                  <input
                    type="text"
                    className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && <div className="invalid-feedback">Full Name is required.</div>}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className={`fw-500 tran3s "text-uppercase search-btn mb-30`} onClick={handleSendData}>
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
          z-index: 1001;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: relative;
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
