/* eslint-disable react/prop-types */
import { useState } from "react";
import "./personalInfo.css";
import PersonalInput from "./personalInput";
const PersonalInfo = ({ setStep, step }) => {
  const [confirmForm, setConfirmForm] = useState(false);
  const handleStep = () => {
    if (step >= 4) {
      setConfirmForm(true);
    }
    setStep(step + 1);
  };
  return (
    <div className="personal-info-container">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form action="">
        <PersonalInput
          className="form-info"
          htmlFor="name"
          title="Name"
          type="text"
          name="name"
          placeholder="e.g.Stephen King"
        />

        <PersonalInput
          className="form-info"
          htmlFor="email"
          title="Email Address"
          type="email"
          name="email"
          placeholder="e.g.stephenking@gmail.com"
        />

        <PersonalInput
          className="form-info"
          htmlFor="phoneNumber"
          title="Phone Number"
          type="number"
          name="phoneNumber"
          placeholder="e.g. +1 123 456 7890"
        />
      </form>
      <div className="next-step-button">
        {confirmForm ? (
          <input type="submit" value="Confirm" />
        ) : (
          <input onClick={() => handleStep()} type="submit" value="Next Step" />
        )}
      </div>
    </div>
  );
};
export default PersonalInfo;
