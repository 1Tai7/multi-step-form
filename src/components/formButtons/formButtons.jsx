/* eslint-disable react/prop-types */
import { useState } from "react";
import "./formButtons.css";
const FormButtons = ({ setStep, step }) => {
  const [confirmForm, setConfirmForm] = useState(false);
  const handleStep = () => {
    if (step >= 3) {
      setConfirmForm(true);
    }
    setStep(step + 1);
  };
  const handleBackStep = () => {
    setConfirmForm(false);
    setStep(step - 1);
    if (step <= 0) {
      setStep(1);
    }
  };

  return (
    <section className="form-btns">
      <div className="btns-container">
        <div className="go-back-btn">
          {step > 1 && (
            <input
              onClick={() => handleBackStep()}
              type="submit"
              value="Go Back"
            />
          )}
        </div>
        <div className="next-step-btn">
          {confirmForm ? (
            <input type="submit" value="Confirm" />
          ) : (
            <input
              onClick={() => handleStep()}
              type="submit"
              value="Next Step"
            />
          )}
        </div>
      </div>
    </section>
  );
};
export default FormButtons;
